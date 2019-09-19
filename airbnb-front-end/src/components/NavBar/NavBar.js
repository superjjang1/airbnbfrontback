import React, {Component} from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';


class NavBar extends Component {

    render() { 
        return ( 
        <div className="container-fluid nav">
            <div className="row">
                <nav className="black">
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">AirBnB</Link>
                        <ul id="nav-mobile" className="right">
                            <li className="nav-item">
                                <Link to=""></Link>
                            </li>
                            <li className="nav-item">
                                <Link to=""></Link>
                            </li>
                            <li className="nav-item">
                                <Link to=""></Link>
                            </li>
                            <li className="nav-item">
                                <Link to=""></Link>
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