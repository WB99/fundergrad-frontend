import React, { useContext, useEffect, useState } from "react";
import NavBar from "../Components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./StudentPage.module.css";
import FundStudentCard from "./FundStudentCard";
import { Button, Form, InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { StudentsContext } from "../App";


export default function StudentPage() {
    const navigate = useNavigate();
    const backHandler = () => {
        navigate("/students");
      };
    
    const studentID = parseInt(useParams().id);
    let data = useContext(StudentsContext);
    data=data.filter((student) => student.studentID === studentID)[0]
    
    return (
        <>
            <NavBar />
            <button className={classes.backButton} onClick={backHandler}>
            🔙 All Students
             </button>
            <div className={classes.root}>
                <div className={classes.textblock}>
                    <div className={classes.header}>
                        <img
                            className={classes.profilepic}
                            src={data.profilepic}
                        />
                        <div className={classes.details}>
                            <text className={classes.title}>{data.name}</text>
                            <text className={classes.subtitle}>{data.course}</text>
                            <div>
                                <a href={data.linkedin} target="_blank">Linkedin</a>
                                <a href="https://www.youtube.com/watch?v=2xx_2XNxxfA&ab_channel=KCFM" target="_blank">Download Resume</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className={classes.body}>
                        <div className={classes.story}>
                            <text className={classes.subtitle}>My Story</text>
                            <text className={classes.text}>{data.description}</text>
                        </div>
                        <div className={classes.fundusage}>
                            <text className={classes.subtitle}>Fund Usage</text>
                            <text className={classes.text}>{data.fundusage}</text>
                        </div>
                    </div>
                </div>

                <FundStudentCard data={data}/>
            </div>
        </>
    );
}
