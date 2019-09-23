import React, {Component} from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';
import ModalSplash from './ModalSplash';


class NavBar extends Component {
    state = {
        showModal : false
    }
    signup = (e) =>{
        document.querySelector('body').className = 'body-modal-show';
        this.setState({
            showModal: true
        })
    }
    closeModal = (e) => {
        this.setState({
            showModal: false
        })
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
                            <li className="nav-non-link" onClick={this.signup}>
                                Sign up
                            </li>
                            <li className="nav-non-link" onClick={this.signup}>
                               Log in
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="login-modal" style={this.state.showModal ? {"display": "block"} : {}} >
                    <button id="close-modal" onClick={this.closeModal}>&Chi;</button>
                    <div className="modal-content">

                    <ModalSplash/>
                    </div>
                </div>
            </div>

        </div>
         );
    }
}
 
export default NavBar;