import React, {Component} from 'react';
import './Home.css';
import SearchBox from './SearchBox';
import Venues from '../utility/Venue';

class Home extends Component {

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
                    <Venues/>
                </div>
            </div>
         </>);
    }
}
 
export default Home;