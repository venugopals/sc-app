import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import logo  from "./standard-logo.png";
import "./App.css";


class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass: false,
      is_authenticated: localStorage.getItem("is_authenticated")
    };
    this.Logout = this.Logout.bind(this);
  }

  toggleMenuBar(e){
   this.setState({addClass: !this.state.addClass});
  }

  Logout(){
    this.setState((state, props) => {
      return {
        is_authenticated: false
      };
    });
    localStorage.setItem("is_authenticated", false)
  }
  
  getMenuBar(){
    let navClass = ["collapse navbar-collapse"]
    if(this.state.addClass) {
      navClass.push("show");
    }
    let navLinks;
    if(localStorage.getItem("is_authenticated") == "true"){
      navLinks = <div className={navClass.join(' ')} id="navbarNavAltMarkup">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-item nav-link active" href="/dashboard">DashBoard <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-item nav-link" href="/explore">Explore</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-item nav-link" href="/settings">Settings</a>
                      </li>
                      <li className="nav-item logout">
                        <a className="nav-item nav-link float-right" href="/" onClick={this.Logout}>Logout</a>
                      </li>
                    </ul>
                   </div>
    }
    else{
      navLinks = undefined;
    }
   return(
      <nav className="navbar navbar-expand-lg navbar-light bg-lightblue ">
        <a className="" href="#"><span><img className="logoWidth" src={logo} alt="logo"/></span></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onClick={this.toggleMenuBar.bind(this)}>
        <span className="navbar-toggler-icon"></span>
      </button>
        {navLinks}
      </nav>
   )
  }
  render() {
    return (
      <div className="menuBar">
         {this.getMenuBar()}
      </div>
    );
  }
}
export default MenuBar;