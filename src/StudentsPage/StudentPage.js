import React from "react";
import NavBar from "../Components/Navbar";
import classes from "./StudentPage.module.css";
import FundStudentCard from "./FundStudentCard";

export default function StudentPage() {
    return (
        <>
            <NavBar />
            <div className={classes.root}>
                <div classname={classes.header}>
                    <h1>JOEL LIM LAN JIAO</h1>
                    <img
                        className={classes.profilepic}
                        src='https://media-exp2.licdn.com/dms/image/C5603AQF0ecH6FuAy4A/profile-displayphoto-shrink_800_800/0/1641983069059?e=1662595200&v=beta&t=TFzy69HF5PuzjXTrFxqspf8K4qX72F07UbTaD6d3yxM'
                    />
                    <div classname={classes.details}>
                        <a href="https://www.linkedin.com/in/joel-lim-jie-en/">Linkedin</a>
                        <a href="https://www.youtube.com/watch?v=2xx_2XNxxfA&ab_channel=KCFM">Download Resume</a>
                    </div>
                </div>
                
                <div className={classes.body}>
                    <div className={classes.desc}>
                        <h3>
                            A little about myself
                        </h3>
                        <p>lorem impsuemr sosdoir fdoflelir udufofurj</p>
                    </div>
                    <FundStudentCard/>
                </div>
            </div>
        </>
    );
}
