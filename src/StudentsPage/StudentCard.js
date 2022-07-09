import React from "react";
import classes from "./StudentCard.module.css";
import { useNavigate } from "react-router-dom";

export default function(props) {
  const student = props.data;

  const navigate = useNavigate();

  const goToIndivStudent = () => {
    navigate(`/students/${student.studentID}`);
  };

  return (
    <div className={classes.root} onClick={goToIndivStudent}>
      <h1>{student.name}</h1>
      <img className={classes.profilepic} src={student.profilepic}/>
      <h3>{student.course}</h3>
      <p>
        {student.description}
      </p>
    </div>
  );
}
