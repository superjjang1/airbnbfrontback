import axios from 'axios';

export default(data)=>{
    console.log('location?');
    const homeUrl = `${window.apiHost}/city/${city.cityName}`
    const axiosResponse = axios.post(homeUrl,data)
    return{
        type:'home',
        payload: axiosResponse
    }
}