import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Register extends Component {
  render() {
    return (   
            <div className= "container ">
            <h1>Register</h1>
            <form> 
                    <div className="alert alert-danger"> this Username is taken, please try another one</div>
                    <div className="alert alert-danger"> two password are not matched></div>
                <div className="form-group">
                    <input name="username" required className="form-control" type="text" placeholder="username" />
                </div>
                <div className="alert alert-warning">Username cannot be empty</div>
                <div className="form-group">
                    <input className="form-control" required name="password"type="password" placeholder="password" />
                </div>
                <div  className="alert alert-warning">Please Enter Your Password</div>
                    <div className="form-group">
                        <input className="form-control" required name="verifyPassword" type="password" 
                        placeholder="verify password" />
                    </div>
                <div className="alert alert-warning">Please Enter your Password Again</div>             
                <button type="submit" className="btn btn-primary btn-block">Register</button>
                <Link to="/login" className="btn btn-success btn-block">Cancel</Link>
            </form>
        </div> 

       );
     }
   }  