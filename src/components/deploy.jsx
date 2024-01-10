import {Button, Input} from "antd";
import styled from "styled-components";

import {Address,  Tx,Signer} from "@cmdcode/tapscript"
import {createTextInscription, getInscribeAddress, getUTXOList} from "../utils/public.js";
import {useSelector} from "react-redux";

const { TextArea } = Input;

const Box = styled.div`
    .bt20{
        margin-bottom: 30px;
        span{
            white-space: nowrap;
            min-width: 160px;
        }
    }
`

export default function Deploy(){

    const account = useSelector(store => store.account);

    const handleDeploy = async () =>{
        // const text = `{"p":"brc-20","op":"deploy","tick":"${tick}","max":"${totalSupply}","lim":"${mintLimit}"}`
        const text = `{"p":"brc-20","op":"deploy","tick":"tick","max":"200000000000","lim":"100"}`
        const inscription = createTextInscription(text)
        console.log(inscription)

        let pubkey = await window.unisat.getPublicKey();
        console.log(pubkey)

        let network = await window.unisat.getNetwork();

        console.log(network)

        //
        const {address, tpubkey, cblock, tapleaf, script} = getInscribeAddress(pubkey, inscription, network)

        console.log(address, tpubkey, cblock, tapleaf, script)

        const utxos = await getUTXOList(account);
        const input = {txId: utxos[0].txid, index: utxos[0].vout, amount: utxos[0].satoshi}
        console.log(input)


        const txdata = Tx.create({
            vin: [
                {
                    // Use the txid of the funding transaction used to send the sats.
                    txid: input.txId,
                    // Specify the index value of the output that you are going to spend from.
                    vout: input.index,
                    // Also include the value and script of that ouput.
                    prevout: {
                        // Feel free to change this if you sent a different amount.
                        value: input.amount,
                        // This is what our address looks like in script form.
                        scriptPubKey: ["OP_1", tpubkey],
                    },
                },
            ],
            vout: [
                {
                    // We are leaving behind 1000 sats as a fee to the miners.
                    value: 546,
                    // This is the new script that we are locking our funds to.
                    scriptPubKey: Address.toScriptPubKey(address),
                },
                {
                    value: input.amount - 5000,
                    scriptPubKey: Address.toScriptPubKey(address),
                },
            ],
        })
        console.log(txdata)



        const sigHash = Signer.taproot.hash(txdata, 0, {extension: tapleaf})
        console.error(sigHash)
        let res = await window.unisat.signPsbts(sigHash);
        console.log(res)

        return;

        // const sig = Signer.taproot.sign(seckey, txdata, 0, {extension: tapleaf})
        txdata.vin[0].witness = [sig, script, cblock]
        // const isValid = Signer.taproot.verify(txdata, 0, {pubkey, throws: true})
        // console.log(Tx.util.getTxSize(txdata), Tx.util.getTxid(txdata))
        // console.log("Your txhex:", Tx.encode(txdata).hex, isValid)
        // // console.dir(txdata, {depth: null})
        // console.log(`deploy tx: ${await boardCast(Tx.encode(txdata).hex)}`)
    }

    return <Box>
        <div className="flex items-center justify-between gap-2 bt20">
            <span>Tick:</span>
            <Input placeholder="tick" className="h-10 w-[600px] "/>

        </div>
        <div className="flex items-center justify-between gap-2 bt20">
            <span>Total Supply:</span>
            <Input type="number" placeholder="amount" className="h-10 w-[600px]"/>
        </div>
        <div className=" flex items-center justify-between gap-2 bt20">
            <span>Limit per mint:</span>
            <Input type="number" placeholder="repeat time" className="h-10 w-[600px]"/>
        </div>
        <div className=" flex flex-col gap-2 bt20">
            <span>Inscription:</span>
            <TextArea className="h-[100px] w-[800px]" placeholder="Inscription, example:
{&quot;p&quot;:&quot;brc-20&quot;,&quot;op&quot;:&quot;mint&quot;,&quot;tick&quot;:&quot;aval&quot;,&quot;amt&quot;:&quot;100000000&quot;}"/>
        </div>
        <div className=" flex items-center justify-center gap-5">
            <Button type="primary" className=" h-10 w-[200px] launch-btn " onClick={()=>handleDeploy()}><span className="label">Deploy</span></Button>
        </div>
    </Box>
}
