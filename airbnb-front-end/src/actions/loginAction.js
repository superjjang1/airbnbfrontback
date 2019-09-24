import axios from 'axios';
export default(data)=>{
    console.log(data);
    const loginUrl=`${window.apiHost}/users/account`
    console.log(loginUrl);
    const axiosResponse = axios.post(loginUrl,data)
    return{
        type:'login',
        payload: axiosResponse
    }
}