import React from 'react'
import "./Login.css"
function Login() {
    return ( 
        <form className="signup">
            <div className="create-account login">Log In</div>
            <input placeholder='Email'></input>
            <input placeholder='Password'></input>
            <input className="submit" type="submit" value="Create Account"></input>
        </form>
     );
}

export default Login;