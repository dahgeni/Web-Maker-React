import React, { Component } from 'react';
import './App.css';
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import Profile from "./components/user/Profile";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


class App extends Component {

  
   render() {
    return (
          <Router>
        <div>
          <Switch>
            <Route exact path= "/login" component= {Login}/>
            <Route exact path= "/register" component= {Register} />
            <route exact path="/user/:uid" component={Profile} />
          </Switch>
         </div>
           </Router>);
       
         }
      }
    

    // render only allows you to render one tag. only one outer tag
  

      
export default App;
