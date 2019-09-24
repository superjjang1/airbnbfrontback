import React from 'react';
import {connect} from 'react-redux';
import{bindActionCreators} from 'redux';
import signUpAction from '../../actions/signUpAction';



class SignUp extends React.Component{
    state ={
        email: "",
        first: "",
        last: "",
        pass: "",
        msg: ""
    }
    changeEmail = (e) => {
        this.setState({email: e.target.value})
    }
    changeFirst = (e) => {
        this.setState({first: e.target.value})
    }
    changeLast = (e) => {
        this.setState({last: e.target.value})
    }
    changePass = (e) => {
        this.setState({pass: e.target.value})
    }
    submitSignUp = (e) =>{
        e.preventDefault();
        // console.log(`Name:${this.state.first} ${this.state.last}`)
        // console.log(`Email:${this.state.email}`)
        // console.log(`Pass:${this.state.password}`)
        //assume the data is valid,
        //if we run into invalid data, switch to false.
        let formValid = true;
        let msg = "";
        for(let key in this.state){
            if((this.state[key].length <1)&&(key !== 'msg')){
                formValid = false;
                msg = `${key} field is required`
                break;
            }
        }
        if(this.state.pass.toLowerCase() === this.state.pass){
            // user doesn't have any uppercase characters
            formValid = false;
            msg = "Youre password, must contain at least 1 uppercase letter";
            //check to see if there is a number in the password using regex
        }else if(!(/\d/.test(this.state.pass))){
            formValid = false;
            msg = "Your password, must contain atleast one number."
        }
        if(formValid){
            const userData={...this.state}
            this.props.signUpAction(userData);
        }else{
            this.setState({
                msg
            })
        }
    }
    render(){
        console.log(this.props.auth)
        return(
            <div className="register-form">
                <p className="form-msg">{this.state.msg}</p>
                <form onSubmit={this.submitSignUp}>

                    <input onChange={this.changeEmail} value={this.state.email} className="email-signup" placeholder="Email address" />
                    <input onChange={this.changeFirst} value={this.state.first} className="first-signup" placeholder="First name" />
                    <input onChange={this.changeLast} value={this.state.last} className="last-signup" placeholder="Last name" />
                    <input onChange={this.changePass} value={this.state.pass} className="password-signup" placeholder="Password" type="password" />
                    <button className="sign-up-button">Sign up</button>
                <div className="border-rule"></div>
                    <div className="login-text align-left">Already have an Airbnb account? <span onClick={()=>{this.props.changeModalContent('login')}}>Log in</span></div>
                </form>
            </div> 
        )
    }
}
function mapStateToProps(state){
    return{
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        signUpAction
    },dispatch)
}

// export default SignUp;
export default connect(mapStateToProps,mapDispatchToProps)(SignUp);