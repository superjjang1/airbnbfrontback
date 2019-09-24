import React from 'react';
import loginAction from '../../actions/loginAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class Login extends React.Component{
    state ={
        email: "",
        password:""
    }
    
    changeEmail = (e) => {
        this.setState({email: e.target.value})
    }
    changePass = (e) => {
        this.setState({password: e.target.value})
    }
    submitLogin=(e)=>{
        e.preventDefault();
        // validation for email and pass if you wanna put it in, this is where it would go.
        let formValid=true;
        let msg = "";
        for(let key in this.state){
            if((this.state[key].length <1)&&(key !=='msg')){
                formValid = false;
                msg = `${key} field is required`
                break;
            }
        }
        if(this.props.pass.toLowerCase()===this.props.pass){
            formValid =false;
            msg = "your password, isn't correct"  
        }else if(!(/\d/.test(this.state.pass))){
            formValid = false;
            msg= "wrong password"
        }
        if(this.state.email.toLowerCase()===this.state.email){
            formValid =false;
            msg = "your email is incorrect"
        }
        if(formValid){
            const loginData = {...this.state}
            this.props.loginAction(loginData);
        }else{
            this.setState({
                msg
            })
        }
    }

    render(){
        return(
            <div className="login-form">
                <form onSubmit={this.submitLogin}>
                    <button className="facebook-login">Connect With Facebook</button>
                    <button className="google-login">Connect with Google</button>
                    <span>or</span>
                    <input onChange={this.changeEmail} value={this.state.email} className="email-signup" placeholder="Email address" />
                    <input onChange={this.changePass} value={this.state.password} className="password-signup" placeholder="Password" type="password"/>
                    <button className="sign-up-button">Log In</button>
                    <div className="border-rule"></div>
                    <div className="login-text align-left">Don't have an account? <span onClick={()=>{this.props.changeModalContent('signup')}} >Sign Up</span></div>
                </form>
            </div>
        )

    }
}

function mapStateToProps(state){
    return {
        auth: state.auth
        //pulling state.auth from the store, and putting in in the props

    }
}
function mapDispatchToProps(dispatch){
    //bindActionCreators = make our otherwise simple function
    //an action creator
    return bindActionCreators({
        login: loginAction
    },dispatch)
}


// export default Login;
export default connect(mapStateToProps,mapDispatchToProps)(Login);