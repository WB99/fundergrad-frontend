import React, { useEffect, useState, useContext, useDebugValue } from "react";
import { SignupContext, ProfilesContext } from "../../App";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
function Signup({ changePage }) {
  const navigate = useNavigate();
  let userDetails = useContext(SignupContext);
  let profiles = useContext(ProfilesContext);
  const [formFilled, setFormFilled] = useState(false);
  const [role, setRole] = useState("student");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [match, setMatch] = useState(true);
  const [passwordError, setPasswordError] = useState(false);
  const [touched, setTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function matchHandle() {
    setMatch(!(passwordConfirm.length >= 1 && passwordConfirm != password));
  }
  function handleName(event) {
    setName(event.target.value);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handlePassword(event) {
    setTouched(true);
    setPassword(event.target.value);
  }
  function handlePasswordConfirm(event) {
    setPasswordConfirm(event.target.value);
  }

  const toggleShowPassword = () => {
    setShowPassword(() => !showPassword);
  };

  useEffect(() => {
    matchHandle();
    if (
      name !== "" &&
      email !== "" &&
      password.length > 8 &&
      password === passwordConfirm
    ) {
      setFormFilled(true);
    } else {
      setFormFilled(false);
    }
  }, [passwordConfirm, name, email, password]);

  const passwordChecker = () => {
    if (password.length <= 8 && touched) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  useEffect(() => {
    passwordChecker();
  }, [password]);

  const submitHandler = (e) => {
    e.preventDefault();
    const userInfo = JSON.stringify({
      name: name,
      email: email,
      password: password,
      role: role,
      School: "",
      degree: "",
      year: "",
      LI: "",
      profilepic: {},
      resume: {},
    });
    localStorage.setItem("user", userInfo);
    navigate("/profile");
  };

  return (
    <form className="signup">
      <div className="create-account">Create an account</div>
      <div className="select">
        {role === "student" ? (
          <div className="select clicker student selected">Student</div>
        ) : (
          <div
            className="select clicker student"
            onClick={() => setRole("student")}
          >
            Student
          </div>
        )}
        {role === "donor" ? (
          <div className="select clicker selected">Donor</div>
        ) : (
          <div className="select clicker" onClick={() => setRole("donor")}>
            Donor
          </div>
        )}
      </div>
      <input placeholder="Name" onChange={handleName}></input>
      <input placeholder="Email" onChange={handleEmail}></input>
      <div className="inputContainer">
        <input
          placeholder="Password"
          type={!showPassword ? "password" : "text"}
          onChange={handlePassword}
        />
        <div className="eye" onClick={toggleShowPassword}>
          👁
        </div>
      </div>
      {passwordError && (
        <div className="matchy">
          Password must be more than 8 characters long.
        </div>
      )}
      <div className="inputContainer">
        <input
          placeholder="Confirm password"
          onChange={handlePasswordConfirm}
        />
        <div className="eye" onClick={toggleShowPassword}>
          👁
        </div>
      </div>
      {match ? null : <div className="matchy">Passwords do not match</div>}
      <button className="submit" disabled={!formFilled} onClick={submitHandler}>
        Create Account
      </button>
      <div>Have an account?</div>
      <div className="changepage" onClick={changePage}>
        Log in here!
      </div>
    </form>
  );
}

export default Signup;
