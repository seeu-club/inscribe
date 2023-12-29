import { Button } from 'antd';
// import Logo from "../../assets/images/logo.svg";
import {SearchOutlined, MenuOutlined} from "@ant-design/icons";
// import InscribeImg from "../../assets/images/inscribe.svg";
// import MarketImg from "../../assets/images/market.svg";

import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
    a{
      text-decoration: none;
      
    }
`

export default function Header() {
    return <div className="app-header">
        <div className="logo">
            {/*<NavLink to="/"><img src={Logo} alt=""/></NavLink>*/}
            seeU
        </div>
        <div className="connect">
            <Button  type="primary" className="connect-button">Connect</Button>
        </div>
    </div>
}
