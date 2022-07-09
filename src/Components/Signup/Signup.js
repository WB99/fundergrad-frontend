import React from 'react'
import "./Signup.css"
function Signup() {
    return ( 
        <form className="signup">
            <div className="create-account">Create an account</div>
            <div className="select">
                <div className="select clicker student selected">
                    Student
                </div>
                <div className="select clicker">
                    Donor
                </div>
            </div>
            <input placeholder='Name'></input>
            <input placeholder='Email'></input>
            <input placeholder='Password'></input>
            <input placeholder='Confirm password'></input>
            <input className="submit" type="submit" value="Create Account"></input>
        </form>
     );
}

export default Signup;