import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import DashBoard from "./DashBoard";
import ErrorBoundary from "./ErrorMsg";



export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      hasError: false
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

//   validateEmail(e) {
//     const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     const { validate } = this.state
//       if (emailRex.test(e.target.value)) {
//         validate.emailState = 'has-success'
//       } else {
//         validate.emailState = 'has-danger'
//       }
//       this.setState({ validate })
//     }
  

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    let getLocalUserData = localStorage.getItem("user")
    if(getLocalUserData != undefined){
       let userDBData = JSON.parse(getLocalUserData)
       if(userDBData.email == this.state.email && userDBData.password == this.state.password){
        this.setState((state, props) => {
          return {
            is_authenticated: true
          };
        });
        localStorage.setItem("is_authenticated", true)
        this.props.history.push("/dashboard");
        window.location.reload()
       }
       else{
        this.setState({hasError: true})
        //return <h1>User credentials are invalid.</h1>;
       }


    }
    else{
      this.props.history.push("/signup");
    }
    debugger;

  }

  handleSignUp = (e)=>{
    this.props.history.push("/signup");
  }

  render() {
    
    if(localStorage.getItem("is_authenticated") == "false"){
          return (
            <React.Fragment> 
            <ErrorBoundary hasError = {this.state.hasError} msg = "User credentials are invalid."/>
            <div className="Login">
              <h2 className = "sign-text"> Sign In</h2>
              <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="email">
                  <FormLabel>Email</FormLabel>
                  <FormControl
                    autoFocus
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    //valid={ this.state.validate.emailState === 'has-success' }
                    //invalid={ this.state.validate.emailState === 'has-danger' }

                  />
                </FormGroup>
                <FormGroup controlId="password">
                  <FormLabel>Password</FormLabel>
                  <FormControl
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                  />
                </FormGroup>
                <Button
                  block
                  disabled={!this.validateForm()}
                  type="submit"
                  className="LoginButton"
                >
                  Login
                </Button>
                    (or)
                <Button
                    block
                    type="button"
                    className="LoginButton"
                    onClick={this.handleSignUp}
                  >
                    SignUp
                  </Button>
              </form>
            </div>
            </React.Fragment> 
          );
      }
    else{
      return(<DashBoard/>)
    }
 
  }
}
