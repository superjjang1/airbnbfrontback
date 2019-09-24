import React, {Component} from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';
import ModalSplash from './ModalSplash';
import Login from './Login';
import SignUp from './Signup';
import {connect} from 'react-redux';


class NavBar extends Component {
    state = {
        showModal : false,
        modalContent: <ModalSplash/>
        
    }
    componentDidMount(){
        this.setState({
            modalContent:<ModalSplash changeModalContent={this.changeModalContent}/>
        })
    }

    changeModalContent =(newContent) =>{
        let modalContent = <ModalSplash changeModalContent={this.changeModalContent}/>
        if (newContent==='login'){
                modalContent = <Login changeModalContent={this.changeModalContent}/>
        }else if(newContent === 'signup'){
                modalContent = <SignUp changeModalContent={this.changeModalContent} closeModal={this.closeModal}/>
        }
        this.setState({
            modalContent
        })
    }

    signup = (e) =>{
        document.querySelector('body').classList = 'body-modal-show';
        this.setState({
            showModal: true
        })
        this.changeModalContent()
    }
    login = (e) =>{
        document.querySelector('body').classList = 'body-modal-show';
        this.setState({
            showModal: true,
        })
        this.changeModalContent('login')
    }
    closeModal = (e) => {
        document.querySelector('body').classList = '';
        this.setState({
            showModal: false
        })
    }

    buildNavLinks = () =>{
        let navLinks = "";
        if(!this.props.auth.token){
            // user is not logged in. give them standard nav
        navLinks = 
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
        <li className="nav-non-link" onClick={this.login}>
            Log in
        </li>               
    </ul>

        }else{
            //user is logged, give them logged in nav
            navLinks =
            <ul id="nav-mobile" className="right">
                <li className="nav-non-link">
                    <Link to="/host/homes">Host a home</Link>
                </li>
                <li className="nav-non-link">
                    <Link to="/saved">Saved</Link>
                </li>
                <li className="nav-non-link">
                    <Link to="/trips">Trips</Link>
                </li>
                <li className="nav-non-link" onClick={this.props.logout}>
                    Logout
                </li>
                <li className="nav-non-link">
                    <Link to="/account">Welcome, {this.props.auth.first}</Link>
                </li>
            </ul>
        }
    return navLinks
    }

    render() { 
        const navLinks = this.buildNavLinks();
        return ( 
        <div className="container-fluid nav">
            <div className="row">
                <nav className="transparent">
                    <div className="nav-wrapper">
                        <Link to="/" className="left"><h4>AirBnb</h4></Link>
                        {navLinks}

                    </div>
                </nav>
                <div className="login-modal" style={this.state.showModal ? {"display": "block"} : {}} >
                    <button id="close-modal" onClick={this.closeModal}>&Chi;</button>
                    <div className="modal-content">

                    {this.state.modalContent}
                    </div>
                </div>
            </div>

        </div>
         );
    }
}
function mapStateToProps(state){
    return {
        auth: state.auth
    }
}
 
// export default NavBar;
export default connect(mapStateToProps)(NavBar);