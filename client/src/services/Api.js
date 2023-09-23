import { commonrequest } from "./ApiCall";
import { BACKEND_URL } from "./helper";
export const register=async(data)=>{
    return await commonrequest('POST',`${BACKEND_URL}/mernauthentication/register`,data);
    
}