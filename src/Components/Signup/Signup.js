import React, { useEffect, useState } from 'react'
import "./Signup.css"
function Signup({changePage}) {
    const [role, setRole] = useState("student")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [match, setMatch] = useState(true)
    function matchHandle(){
        setMatch(!((passwordConfirm.length >= 1) && passwordConfirm != password))
        console.log(passwordConfirm.length)
    }
    function handleName(event){
        setName(event.target.value);
        console.log(name)
    }
    function handleEmail(event){
        setEmail(event.target.value);
        console.log(name)
    } 
    function handlePassword(event){
        setPassword(event.target.value);
        console.log(name)
    }
    function handlePasswordConfirm(event){
        setPasswordConfirm(event.target.value);
        // matchHandle();
        console.log(name)
    }
    useEffect(()=>{
        matchHandle()
    }, [passwordConfirm])
    return ( 
        <form className="signup">
            <div className="create-account">Create an account</div>
            <div className="select">
                {role === "student" ? <div className="select clicker student selected">
                    Student
                </div>
                : <div className="select clicker student" onClick={() => setRole("student")}>
                Student
            </div>
            }
                {role === "donor" ? <div className="select clicker selected">
                    Donor
                </div>
                : <div className="select clicker" onClick={() => setRole("donor")}>
                Donor
            </div>
            }
            </div>
            <input placeholder='Name' onChange={handleName}></input>
            <input placeholder='Email' onChange={handleEmail}></input>
            <input placeholder='Password' onChange={handlePassword}></input>
            <input placeholder='Confirm password' onChange={handlePasswordConfirm}></input>
            {match ? null : <div className='matchy'>Passwords do not match</div>}
            <input className="submit" type="submit" value="Create Account"></input>
            <div>Have an account?</div>
            <div className="changepage" onClick={changePage}>Log in here!</div>
        </form>
     );
}

export default Signup;