import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class Profile extends Component {
  render() {
    return (
        <div>
        
        <nav className="navbar navbar-dark bg-primary fixed-top">
            <a className="navbar-brand"><b>Profile</b></a>
            <button className="btn bg-transparent color-white" type="submit" form="myForm"><i className="fas fa-check"></i></button>
        </nav>
        <br>
        
        <div className="container">
            <form  id="myForm">
                <div className="alert alert-danger">This username is taken, please try another one.</div>
                <div  class="alert alert-success">Update Successfully</div>
               
                <div className="form-group">
                    <label><b>Username</b></label>
                    <input required class="form-control" name="username"
                    placeholder="Enter Username..."  /> 
                </div>
                <div class="alert alert-warning">Username can't be empty</div>
               
                <div className="form-group">
                    <label><b>Email</b></label>
                    <input class="form-control" name="email" placeholder="Enter Email..." />
                </div>
               
                <div className="form-group">
                    <label><b>First Name</b></label>
                    <input className="form-control" name="firstName"  placeholder="Enter First Name..." />
                </div>
               
                <div className="form-group">
                    <label><b>Last Name</b></label>
                    <input class="form-control" name="lastName"  placeholder="Enter Last Name..." />
                </div>
               
                < a className="btn btn-primary btn-block">Websites</a>
                <button class="btn btn-danger btn-block">Logout</button>
                <br />
                <a  className="btn btn-outline-dark" routerLink="/user-list">User List</a>
            </form>
        </div>
       
        <nav className="navbar navbar-dark bg-primary fixed-bottom">
            <div className="full-width">

           <a className="color-white float-right" 

             <i className="fas fa-user" />
            </div>
       </nav>
       </div>

         );
       }
    }
      
   