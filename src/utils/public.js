import {Buffer} from "buffer";
import {Address,  Tap} from "@cmdcode/tapscript"
import axios from "axios";

export function createTextInscription(text) {
    const encoder = new TextEncoder()
    const contentType = Buffer.from(encoder.encode("text/plain;charset=utf-8"))
    const content = Buffer.from(encoder.encode(text))
    // const contentType = Buff.encode("text/plain;charset=utf-8")
    // const content = Buff.encode(text)
    return {contentType, content}
}

export function getInscribeAddress(
    pubkey,
    inscription,
    network,
) {
    const encoder = new TextEncoder()
    const script = [
        pubkey,
        "OP_CHECKSIG",
        "OP_0",
        "OP_IF",
        Buffer.from(encoder.encode("ord")),
        "01",
        inscription.contentType,
        "OP_0",
        inscription.content,
        "OP_ENDIF",
    ]
    const tapleaf = Tap.encodeScript(script)
    const [tpubkey, cblock] = Tap.getPubKey(pubkey, {target: tapleaf})
    const address = Address.p2tr.fromPubKey(tpubkey, network)
    return {address, tpubkey, script, cblock, tapleaf}
}

export async function getUTXOList(address, skip=0, size=10) {
    const url = `https://open-api-testnet.unisat.io/v1/indexer/address/${address}/utxo-data?cursor=${skip}&size=${size}`
    const {data} = await axios.get(url, {
        headers: {
            Authorization: `Bearer e2c5717a142f58c05bdb8d9ce68794ee8b74c12267859dd185de1491f7d6780a`,
        },
    })
    return data.data.utxo
}
