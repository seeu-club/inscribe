import request from './index';
export const deploy = (data) =>{
    return request.post("/v2/inscribe/order/create/brc20-deploy",data);
}
