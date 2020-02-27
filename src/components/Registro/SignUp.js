import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';

import Divider from "@material-ui/core/Divider";

export class SignUp extends React.Component{


    constructor(props) {
        console.log("FEWfwefewfewfewfwe")
        super(props);
        this.state = {name : "", email: "",pass: '',pass2: ''};
        this.handleEmailChange = this.handleEmailChange.bind(this);
        
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        
        this.handlePass2Change = this.handlePass2Change.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleNameChange (e) {
        this.setState({name: e.target.value});
        console.log(this.state.name)
    }

    handleEmailChange (e) {
        this.setState({email: e.target.value});
        console.log(this.state.email)
    }

    handlePassChange(e) {
        console.log("pass")
        this.setState({pass: e.target.value});
        console.log(this.state.pass)
    }

    handlePass2Change(e) {
        this.setState({ pass2: e.target.value });
        console.log(this.state.pass2)
    }


    handleSubmit(e) {
        e.preventDefault();
        if (this.state.pass != this.state.pass2) {
            console.log(this.state.pass)
            console.log(this.state.pass2)

            alert("Passwords do not match");
        } else if(this.state.name && this.state.email && this.state.pass && this.state.pass2 ){
            alert("Account Created");
            localStorage.setItem('name',this.state.name);
            localStorage.setItem('email',this.state.email);
            localStorage.setItem('password', this.state.pass);
            console.log(this.state.pass)
            console.log("email stored: "+localStorage.getItem("email"))
            window.location.href = "/";
            alert("ok")
        }


    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} style={{ width: "100%" }}>
            <h3> Sign Up</h3>
            <TextField
                id="Name"
                label="Name"
                value={this.state.name}
                onChange={this.handleNameChange}
                />
            <Divider />
            <TextField
                id="Email"
                label="Email"
                value={this.state.email}
                onChange={this.handleEmailChange}
                />
            <Divider />
    
            <TextField
                id="password"
                label="password"
                value={this.state.pass}
                onChange={this.handlePassChange}
                />
            <Divider />
    
            
            <TextField
                id="conf. password"
                label="conf. password"
                value={this.state.pass2}
                onChange={this.handlePass2Change}
                />
            <Divider />
            <Button variant="contained" color="default" type="submit">
                Sign Up
            </Button>
        </form>
    
        )
    }
}