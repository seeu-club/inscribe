import Layout from "../layout/layout.jsx";
import {Select, Progress, Input, Button,Table} from 'antd';
import styled from "styled-components";
import "../assets/style/inscribe.scss";
import {PlusOutlined} from "@ant-design/icons";
// import SearchImg from "../assets/images/search.svg";
import Deploy from "../components/inscribe/deploy.jsx";
import {useState} from "react";

const { TextArea } = Input;



export default function Inscribe() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };



    return <Layout>
        <Deploy isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} />
        <main className="inscribe-page">
            <h1 className="page-title">Inscribe</h1>
            <div className="search-bar">
                <div></div>
                <Button type="primary" className="deploy" icon={<PlusOutlined />} onClick={()=>showModal()}>
                    Deploy
                </Button>
            </div>
            <div className="inscribe-tick"><span className="tick-name">SeeU</span></div>
            <div className="total-remain">
                <div className="data"><span className="label">Total: </span><span className="value">21,000,000</span></div>
                <div className="double">
                    <div className="data"><span className="label">Remain: </span><span className="value">0</span></div>
                    <div className="limit">Per limit: 1,000</div>
                </div>
                <Progress percent={100} />
            </div>
            <div className="flex items-center justify-between gap-2">
                <span>Tick:</span>
                <Input placeholder="tick" className="h-10 w-[600px] "/>

            </div>
            <div className="flex items-center justify-between gap-2">
                <span>Amount:</span>
                <Input type="number" placeholder="amount" className="h-10 w-[600px]"/>
            </div>
            <div className=" flex items-center justify-between gap-2">
                <span>Repeat:</span>
                <Input type="number" placeholder="repeat time" className="h-10 w-[600px]"/>
            </div>
            <div className=" flex flex-col gap-2">
                <span>Inscription:</span>
                <TextArea className="h-[100px] w-[800px]" placeholder="Inscription, example:
data:,{&quot;p&quot;:&quot;asc-20&quot;,&quot;op&quot;:&quot;mint&quot;,&quot;tick&quot;:&quot;aval&quot;,&quot;amt&quot;:&quot;100000000&quot;}"/>
            </div>
            <div className=" flex items-center justify-center gap-5">
                <Button  type="primary"  className=" h-10 w-[200px]" >mint</Button>
            </div>
        </main>
    </Layout>
}
