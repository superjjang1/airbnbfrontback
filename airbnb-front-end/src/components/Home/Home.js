import React, {Component} from 'react';
import './Home.css';
import SearchBox from './SearchBox';
import Venues from '../utility/Venue';
import axios from 'axios';

class Home extends Component {
    state = {cities: []}
    componentDidMount(){
        const recommendedCities = axios.get(`${window.apiHost}/cities`)
        recommendedCities.then((resp)=>{
            const cities = resp.data;
            this.setState({
                cities
            })
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
            <div className="container">
                <div className="venue col s12">
                    <Venues cities={this.state.cities}/>
                </div>
            </div>
         </>);
    }
}
 
export default Home;