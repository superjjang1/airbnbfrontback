import React, {Component} from 'react';
import './Home.css';
import SearchBox from './SearchBox';
import Venues from '../utility/Venue';
import axios from 'axios';
import Abodes from '../utility/Abodes';

class Home extends Component {
    state = {cities: [], abodes: []}
    async componentDidMount(){
        const recommendedCities = axios.get(`${window.apiHost}/cities`)
        recommendedCities.then((resp)=>{
            const cities = resp.data;
            this.setState({
                cities
            })
        })
        const axiosResponse = await axios.get(`${window.apiHost}/abodes`)
        const suggestedAbodes = axiosResponse.data.map((abode,i)=>{
            return(
                <div key = {i} className="col s3">
                <Abodes abode = {abode}/>
            </div>)
        })
        
        this.setState({
            abodes: suggestedAbodes
        })
    }
    render() { 
        return (<> 
            <div className="container-fluid">
                <div className="row">
                    <div className="home col s12">
                        <div className="upper-fold">
                            <SearchBox />
                        </div>
                    </div>
                </div>
            </div>
            <div><h3>Recommended Cities</h3></div>
            <div className="container">
                <div className="row">
                    <div className="venue col s12">
                        <Venues cities={this.state.cities}/>
                    </div>
                </div>
                <div className ="row">
                <div><h3>Places to stay around the world.</h3></div>
                    {this.state.abodes}
                </div>
            </div>
         </>);
    }
}
 
export default Home;