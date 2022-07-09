import React from "react";
import classes from "./StudentCard.module.css";
import { useNavigate } from "react-router-dom";
import { ProgressBar, Progress } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function(props) {
  const student = props.data;

  const navigate = useNavigate();

  const goToIndivStudent = () => {
    navigate(`/students/${student.studentID}`);
  };

  return (
    <div className={classes.root} onClick={goToIndivStudent}>
      <text className={classes.title}>{student.name}</text>
      <img className={classes.profilepic} src={student.profilepic}/>
      <text className={classes.subtitle}>{student.course}</text>
        <text className={classes.subtitle}>Amount Raised: ${student.amountRaised}</text>
        <ProgressBar className={classes.progress} now={student.progress} />
        <text className={classes.text}>{student.progress}% of ${student.goal} goal reached</text>
      <text className={classes.text}>
        {student.description}
      </text>
    </div>
  );
}
