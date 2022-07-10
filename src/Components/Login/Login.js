import React, { useEffect } from 'react'
import { useState } from 'react'
import "./Login.css"
import { ProfilesContext, SignupContext } from '../../App'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({changePage}) {
    const navigate = useNavigate()
    let profiles = useContext(ProfilesContext)
    let signup = useContext(SignupContext)
    const [curprof, setCurprof] = useState({})
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [validProfile, setValidProfile] = useState(false)
    function handleEmail(event){
        setEmail(event.target.value);
    } 
    function handlePassword(event){
        setPassword(event.target.value);
    }
    function checkvalid(){
        signup = {}
        setValidProfile(false)
        for(let i = 0; i < profiles.length; i++ ){
            console.log(profiles[i])
            if (profiles[i].email === email && profiles[i].password === password){
                setCurprof(profiles[i])
                setValidProfile(true)

            }
        }  
        console.log(curprof)
    }
    function setLoginContext(e){
        e.preventDefault()
        const userInfo = JSON.stringify(curprof);
        console.log(userInfo)
        localStorage.setItem("user", userInfo);
        navigate("/profile")
    }
    useEffect(
        () => {checkvalid()}, [email, password]
    )
    return ( 
        <form className="signup">
            <div className="create-account login">Log In</div>
            <input placeholder='Email' onChange={handleEmail}></input>
            <input placeholder='Password' onChange={handlePassword}></input>
            {validProfile ? <button className="submit" onClick={setLoginContext}> Log In</button> : <button className="submit" onClick={(e) => {e.preventDefault()}}> Log In</button>}
            <div>Don't have an account?</div>
            <div className="changepage" onClick={changePage}>Sign up here!</div>
        </form>
     );
}

export default Login;