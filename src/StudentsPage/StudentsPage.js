import React, { useEffect, useState, useContext } from "react";
import NavBar from "../Components/Navbar";
import StudentCard from "./StudentCard";
import classes from "./StudentsPage.module.css";
import { StudentsContext } from "../App";

function StudentsPage() {
    
    const students = useContext(StudentsContext)
    const [newStudents, setNewStudents] = useState([])
    
    useEffect(()=>{
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        console.log("NEW USER: ", user)
        var userObject = {
            studentID: 0,
            name: user.name,
            firstname: user.name,
            profilepic: user.profilePicUri,
            course: "Year " + user.yos + " " + user.degree + " at " + user.school,
            description: user.summary,
            fundusage: "I will use the funds to cover the school fees for my remaining 2 years of studies. The excess will be used to cover my hostel fees and other miscellaneous fees.",
            amountRaised: "0",
            goal: user.fundTarget,
            progress: 0,
            linkedin: user.linkedIn,
        };
        setNewStudents([userObject, ...students])
        students.push(userObject)
        console.log("Students", students)
      }
    }, [])

    useEffect(()=>{
      setfilteredStudents(newStudents)
    }, [newStudents])

    const toggleHandlerA = () => {
        setShowAlmost(!showAlmost)
    }
    const toggleHandlerB = () => {
        setShowKickstart(!showKickstart)
    }
    const [filteredStudents, setfilteredStudents] = useState([])


    const [showAlmost, setShowAlmost] = useState(false)
    const [showKickstart, setShowKickstart] = useState(false)

    useEffect(()=>{
      var filtered = showAlmost ? 
        ( showKickstart ? newStudents.filter((student)=>(student.progress < 10 || student.progress > 75)) : newStudents.filter((student)=>(student.progress > 75)))
        : ( showKickstart ? newStudents.filter((student)=>(student.progress < 10)) : newStudents);
      setfilteredStudents(filtered)
    }, [showAlmost, showKickstart])
    

    return (
        <div>
            <NavBar />
            <div className={classes.intro}>
                <text className={classes.text}>
                    Find a student that you would like to sponsor!
                </text>
                <input className={classes.input} onChange={toggleHandlerA} type="checkbox"/>
                <text className={classes.text}>Almost There</text>
                <input className={classes.input} onChange={toggleHandlerB} type="checkbox"/>
                <text className={classes.text}>Needs a Kickstart</text>
            </div>
            <div className={classes.root}>
                {filteredStudents.map((student) => (
                    <StudentCard data={student} />
                ))}
            </div>
        </div>
    );
}
export default StudentsPage;
