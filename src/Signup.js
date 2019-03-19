import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Signup.css";
import DashBoard from "./DashBoard";


export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {user:
      {
      name: "",
      email: "",
      contact: "",
      address: "",
      password: "",
      confirmPassword: ""
    },
      is_authenticated: false
    };
  }

  validateForm() {
    return (
      this.state.user.name.length > 0 &&
      this.state.user.email.length > 0 &&
      this.state.user.password.length > 0 &&
      this.state.user.password === this.state.user.confirmPassword
    );
  }

  validateConfirmationForm() {
    return this.state.confirmationCode.length > 0;
  }

  handleChange = event => {
    this.setState({user:{
      ...this.state.user,
      [event.target.id]: event.target.value
      }
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState((state, props) => {
      return {
        is_authenticated: true
      };
    });
    localStorage.setItem("user", JSON.stringify(this.state.user));
    localStorage.setItem("is_authenticated", true)

  }

  handleConfirmationSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });
  }

  handleLogin = (e)=>{
    this.props.history.push("/");
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
      <FormGroup controlId="name">
      <FormLabel>Name</FormLabel>
      <FormControl
        autoFocus
        type="name"
        value={this.state.user.name}
        onChange={this.handleChange}
      />
    </FormGroup>
        <FormGroup controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={this.state.user.email}
            onChange={this.handleChange}
          />
        </FormGroup>
        
        <FormGroup controlId="contact">
          <FormLabel>Contact</FormLabel>
          <FormControl
            autoFocus
            type="contact"
            value={this.state.user.contact}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="address">
          <FormLabel>Address</FormLabel>
          <textarea
            autoFocus
            type="text"
            className = "form-control"
            id="address"
            name="address"
            value={this.state.user.address}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={this.state.user.password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="confirmPassword">
          <FormLabel>Confirm Password</FormLabel>
          <FormControl
            value={this.state.user.confirmPassword}
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
        SignUp
      </Button>
      (or)
      <Button
            block
            type="submit"
            className="LoginButton"
            onClick={this.handleLogin}
          >
            Login
      </Button>
      </form>
    );
  }

  render() {
    let isAuthenticated = this.state.is_authenticated
    return (
      <div className="Signup">
        {!isAuthenticated ? this.renderForm() : <DashBoard/>} 
      </div>
    );
  }
}