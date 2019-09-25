import axios from 'axios';

export default(data)=>{
    console.log('homereduce');
    const homeUrl = `${window.apiHost}/host/homes`
    const axiosResponse = axios.post(homeUrl,data)
    return{
        type:'home',
        payload: axiosResponse
    }
}