import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import './App.css';
import Login from './Login';
import Signup from "./Signup";
import MenuBar from "./MenuBar";
import DashBoard from "./DashBoard";
import Explorer from "./Explorer";
import Settings from "./Settings";



class App extends Component {
  render() {
    return (
    <div>
      <Router>
        <MenuBar/>
        <Container className="App">
        
        </Container>
        <Route exact path="/" component={Login} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup"  component={Signup} />
        <Route path="/dashboard" exact component={DashBoard} />
        <Route path="/explore"  component={Explorer} />
        <Route path="/settings" exact component={Settings} />
      </Router>
    </div>
    );
  }
}

export default App;