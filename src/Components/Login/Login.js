import React from 'react'
import "./Login.css"
function Login({changePage}) {
    return ( 
        <form className="signup">
            <div className="create-account login">Log In</div>
            <input placeholder='Email'></input>
            <input placeholder='Password'></input>
            <input className="submit" type="submit" value="Create Account"></input>
            <div>Don't have an account?</div>
            <div className="changepage" onClick={changePage}>Sign up here!</div>
        </form>
     );
}

export default Login;