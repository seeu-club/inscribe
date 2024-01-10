import Layout from "../layout/layout.jsx";
import {Button} from 'antd';
import "../assets/style/inscribe.scss";
// import SearchImg from "../assets/images/search.svg";
import {useState} from "react";

import Mint from "../components/mint.jsx";
import Deploy from "../components/deploy.jsx";
import Transfer from "../components/transfer.jsx";

export default function Inscribe() {


    // {"p":"brc-20","op":"mint","tick":"aaa","amt":"1"}
    // {"p":"brc-20","op":"deploy","tick":"333","max":"3456789000000","lim":"1000","dec":"18"}
    // {"p":"brc-20","op":"transfer","tick":"faaf","amt":"10"}

    const [current,setCurrent] = useState(0)
    const [list] = useState(["Mint","Deploy","Transfer"])

    const handleCurrent = (index) =>{
        setCurrent(index)
    }

    return <Layout>
        <main className="inscribe-page">
            <h1 className="page-title">Inscribe</h1>
            <div className="search-bar">
                {
                    list.map((item,index)=>(<Button type="primary" className={current === index ?"launch-btn":"ording"} key={index} onClick={()=>handleCurrent(index)}>
                        <span className="label">{item}</span>
                    </Button>))
                }
            </div>
            {
                current === 0 && <Mint />
            }
            {
                current === 1 && <Deploy />
            }
            {
                current === 2 && <Transfer />
            }

        </main>
    </Layout>
}
