import React from 'react'
import { useState } from 'react'
import "./Login.css"
function Login({changePage}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    function handleEmail(event){
        setEmail(event.target.value);
    } 
    function handlePassword(event){
        setPassword(event.target.value);
    }
    return ( 
        <form className="signup">
            <div className="create-account login">Log In</div>
            <input placeholder='Email' onChange={setEmail}></input>
            <input placeholder='Password' onChange={setPassword}></input>
            <input className="submit" type="submit" value="Create Account"></input>
            <div>Don't have an account?</div>
            <div className="changepage" onClick={changePage}>Sign up here!</div>
        </form>
     );
}

export default Login;