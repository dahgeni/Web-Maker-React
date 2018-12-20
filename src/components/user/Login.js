import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {axios} from "axios";

export default class Login extends Component {
    constructor(props) {
    super(props);
    this.state= {
        username: "",
        password: "",
        errors: {}
     };  
    
     } 
    
    
    onChange = e => {
    //  if(e.target.name === "username") {
    //     this.setState({
    //         username: e.target.value
    //     })} else {
    //         this.setState({
    //             password: e.target.value
    //         });
    //       }
    //    };
        this.setState({
            [e.target.name]: e.target.value

        });
    }

    onSubmit = e => {
        e.preventDefault();
        if(this.state.username === '') {
            this.setState({
                errors: { username: "Username is Required" }
            });
            return;
        }
        if (this.state.password === "") {
                this.setState({
                    errors: { password: "Password is Required"}
                });
                return;
    
        }
        this.login(this.state.username, this.state.password)
    };
  login = async (username, password) => {
   const user = {username, password
    }; 
    try {
        const res= await axios.post("/api/login", user);
        this.props.history.push(`/user/${res.data._id}`);
    }catch {
        this.setState({
        error: {
            match: "Username and Password are not matched"
        }
      })
    }
};

  render() {
    return (
      
<div className= "container">
    <h1>Login</h1>

    <form onSubmit={this.onSubmit}> 
      {this.state.errors.match &&(<div className="alert alert-danger">the username and password do not match our records; please try again</div>
      )}

        <div className="form-group">
            <input className="form-control" name="username" type="text" placeholder="username" value={this.state.username} 
            onChange = {this.onchange} />
            </div>

        {this.state.errors.username && ( <div className="alert alert-warning">{this.state.errors.username}
        </div> 
        )}
        <div className="form-group">
            <input className="form-control"  name="password"type="password" placeholder="password" value={this.state.password} 
            onChange={this.onChange} />
        </div>

        {this.state.errors.password && ( 
          <div className="alert alert-warning">{this.state.errors.password}</div>
    )}
        <button type="submit" className="btn btn-primary btn-block">Login</button>

        <Link to= "/register" className="btn btn-success btn-block">Register</Link>
   
      </form>
 </div>
    );
  }
}
