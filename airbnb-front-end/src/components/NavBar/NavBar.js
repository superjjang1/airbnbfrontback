import React, {Component} from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';


class NavBar extends Component {

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
                            <li>
                                <Link to="/sign-up">Sign up</Link>
                            </li>
                            <li>
                                <Link to="/log-in">Log in</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
         );
    }
}
 
export default NavBar;