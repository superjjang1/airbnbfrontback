import React, {Component} from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';


class NavBar extends Component {
    state = {
        showModal : false
    }
    signup = (e) =>{

    }

    render() { 
        return ( 
        <div className="container-fluid nav">
            <div className="row">
                <nav className="transparent">
                    <div className="nav-wrapper">
                        <Link to="/" className="left">AirBnB</Link>
                        <ul id="nav-mobile" className="right">
                            <li>
                                <Link to="/host/homes">Host a home</Link>
                            </li>
                            <li>
                                <Link to="/host/experiences">Host an experience</Link>
                            </li>
                            <li>
                                <Link to="/help">Help</Link>
                            </li>
                            <li onClick={this.signup}>
                                Sign up
                            </li>
                            <li onClick={this.signup}>
                               Log in
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="login-modal">
                    <h1>Modal</h1>

                </div>
            </div>

        </div>
         );
    }
}
 
export default NavBar;