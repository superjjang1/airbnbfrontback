import React from 'react';
import Login from './NavBar/Login'
import './NavBar/NavBar.css';

function LoginPage(props){
    const loginStyle = {
        "display":"block",
        "border": "1px solid black",
        "marginTop": "100px"
    }
    const pushUrl = localStorage.getItem('preLoginPage') ? localStorage.getItem('preLoginPage') : '/';
    return(
        <div className="login-modal"  style={loginStyle}>
            <Login closeModal={()=>{props.history.push(pushUrl)}} />
        </div>
    )
}

export default LoginPage;