import {Button, Input} from "antd";
import styled from "styled-components";
const { TextArea } = Input;
import {Address } from "@cmdcode/tapscript";

const Box = styled.div`
    .bt20{
        margin-bottom: 30px;
    }
`

export default function Mint(){
    return <Box>
        <div className="flex items-center justify-between gap-2 bt20">
            <span>Tick:</span>
            <Input placeholder="tick" className="h-10 w-[600px] "/>

        </div>
        <div className="flex items-center justify-between gap-2 bt20">
            <span>Amount:</span>
            <Input type="number" placeholder="amount" className="h-10 w-[600px]"/>
        </div>
        <div className=" flex items-center justify-between gap-2 bt20">
            <span>Repeat:</span>
            <Input type="number" placeholder="repeat time" className="h-10 w-[600px]"/>
        </div>
        <div className=" flex flex-col gap-2 bt20">
            <span>Inscription:</span>
            <TextArea className="h-[100px] w-[800px]" placeholder="Inscription, example:
{&quot;p&quot;:&quot;brc-20&quot;,&quot;op&quot;:&quot;mint&quot;,&quot;tick&quot;:&quot;aval&quot;,&quot;amt&quot;:&quot;100000000&quot;}"/>
        </div>
        <div className=" flex items-center justify-center gap-5">
            <Button type="primary" className=" h-10 w-[200px] launch-btn "><span className="label">Mint</span></Button>
        </div>
    </Box>
}
