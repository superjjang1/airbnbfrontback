import React, {Component} from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';


class NavBar extends Component {

    render() { 
        return ( 
        <div className="container-fluid nav">
            <div className="row">
                <div className="black">
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">AirBnB</Link>
                    </div>
                </div>
            </div>
        </div>
         );
    }
}
 
export default NavBar;