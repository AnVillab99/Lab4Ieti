import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
export default function Registro(props) {
    const [state, setState] = React.useState({name:"",email:"",pass:"",pass2:""});
    
    const guardar = () =>{

    }
    const handleNameChange =(e)=> {
        setState({
            name: e.target.value
        });
    }

    const handleEmailChange =(e)=> {
        setState({
            email: e.target.value
        });
    }

    const handlePasswordChange=(e)=> {
        setState({
            pass: e.target.value
    })}

    const handlePassword2Change=(e)=> {
        this.setState({ pass2: e.target.value });
    }


    const handleSubmit=(e)=> {
        console.log("registro")
    }

    return(
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <h3> Registro</h3>
        <TextField
            id="Name"
            label="Name"
            value={state.name}
            onChange={handleNameChange}
            />
        <Divider />
        <TextField
            id="Email"
            label="Email"
            value={state.email}
            onChange={handleEmailChange}
            />
        <Divider />
        <TextField
            id="password"
            label="password"
            value={state.pass}
            onChange={handlePassChange}
            />
        <Divider />

        
        <TextField
            id="conf. password"
            label="conf. password"
            value={state.pass2}
            onChange={handlePass2Change}
            />
        <Divider />
        <Button variant="contained" color="default" type="submit">
            Register
        </Button>
    </form>

    )


}