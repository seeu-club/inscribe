import {Modal,Button,Input } from 'antd';
import "../../assets/style/deploy.scss";
import {CloseOutlined} from "@ant-design/icons";

export default function Deploy({isModalOpen,handleOk,handleCancel}){
    return <>
        <Modal
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            centered
            footer={null}
            className="deploy-modal"
            width={620}
            closeIcon={<CloseOutlined />}
        >

            <div className="modal-title">Deploy</div>
            <div className="deploy-item">
                <div className="label">Protocol:</div>
                <div className="value">brc-20</div>
            </div>
            <div className="deploy-item">
                <div className="label">Tick:</div>
                <div className="value">
                    <Input placeholder="tick" />
                </div>
            </div>
            <div className="deploy-item">
                <div className="label">Total supply:</div>
                <div className="value">
                    <Input placeholder="total supply" />
                </div>
            </div>
            <div className="deploy-item">
                <div className="label">Limit per mint:</div>
                <div className="value">
                    <Input placeholder="limit per mint" type="number" />
                </div>
            </div>
            <div className="button">
                <Button  type="primary"  className=" h-10 w-[200px]" >
                    <span className="label">Confirm</span>
                </Button>
            </div>
        </Modal>
    </>
}
