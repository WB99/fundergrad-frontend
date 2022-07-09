import React, { useEffect, useState, useContext, useDebugValue } from "react";
import { SignupContext } from "../../App";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
function Signup({ changePage }) {
  const navigate = useNavigate();
  let userDetails = useContext(SignupContext);
  const [formFilled, setFormFilled] = useState(false);
  const [role, setRole] = useState("student");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [match, setMatch] = useState(true);
  const [submitCount, setSubmitCount] = useState(0);
  function matchHandle() {
    setMatch(!(passwordConfirm.length >= 1 && passwordConfirm != password));
    console.log(passwordConfirm.length);
  }
  function handleName(event) {
    setName(event.target.value);
    console.log(name);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
    console.log(name);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
    console.log(name);
  }
  function handlePasswordConfirm(event) {
    setPasswordConfirm(event.target.value);
    // matchHandle();
    console.log(name);
  }
  function setSignupContext(e) {
    e.preventDefault();
    userDetails = { name: name, email: email, password: password, role: role };
    console.log(userDetails);
    navigate("/profile");
  }

  useEffect(() => {
    matchHandle();
  }, [passwordConfirm]);

  useEffect(() => {
    if (
      name != "" &&
      email != "" &&
      password.length > 8 &&
      password == passwordConfirm
    ) {
      setFormFilled(true);
    } else {
      setFormFilled(false);
    }
  }, [passwordConfirm, name, email, password]);
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
      <input placeholder="Password" onChange={handlePassword}></input>
      <input
        placeholder="Confirm password"
        onChange={handlePasswordConfirm}
      ></input>
      {match ? null : <div className="matchy">Passwords do not match</div>}
      {formFilled ? (
        <button className="submit" onClick={setSignupContext}>
          Create Account
        </button>
      ) : (
        <button
          className="submit"
          onClick={(e) => {
            e.preventDefault();
            setSubmitCount(submitCount + 1);
          }}
        >
          Create Account
        </button>
      )}
      {formFilled == false && submitCount > 0 ? (
        <div className="matchy">
          Please ensure a name, email and password of more than length 8 is
          submitted.
        </div>
      ) : null}
      <div>Have an account?</div>
      <div className="changepage" onClick={changePage}>
        Log in here!
      </div>
    </form>
  );
}

export default Signup;
