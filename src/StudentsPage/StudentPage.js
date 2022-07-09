import React from "react";
import NavBar from "../Components/Navbar";
import classes from "./StudentPage.module.css";
import FundStudentCard from "./FundStudentCard";
import { Button, Form, InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function StudentPage() {
    return (
        <>
            <NavBar />
            <div className={classes.root}>
                <div className={classes.textblock}>
                    <div className={classes.header}>
                        <img
                            className={classes.profilepic}
                            src='https://media-exp2.licdn.com/dms/image/C5603AQF0ecH6FuAy4A/profile-displayphoto-shrink_800_800/0/1641983069059?e=1662595200&v=beta&t=TFzy69HF5PuzjXTrFxqspf8K4qX72F07UbTaD6d3yxM'
                        />
                        <div className={classes.details}>
                            <text className={classes.title}>JOEL LIM</text>
                            <text className={classes.subtitle}>Year 2 Computer Science at NTU</text>
                            <div classname={classes.links}>
                                <Button href="https://www.linkedin.com/in/joel-lim-jie-en/" variant="link">Linkedin</Button>
                                <Button href="https://www.youtube.com/watch?v=2xx_2XNxxfA&ab_channel=KCFM" variant="link">Download Resume</Button>
                            </div>
                        </div>
                    </div>
                    
                    <div className={classes.body}>
                        <div className={classes.story}>
                            <text className={classes.subtitle}>My Story</text>
                            <text className={classes.text}>
                                In korea, I heart surgeon. Number one. Steady hand. One day, Kim Jong Un need new heart. I do operation. But mistake! Kim Jong Un die! SSD very mad! I hide fishing boat, come to America. No English, no food, no money. Darryl give me job. Now I have house, American car and new woman. Darryl save life. My big secret. I kill Kim Jong Un on purpose. I good surgeon. The best!
                            </text>
                        </div>
                        <div className={classes.fundusage}>
                            <text className={classes.subtitle}>Fund Usage</text>
                            <text className={classes.text}>
                                I will use the funds to fundergraduate my undergraduate studies! If this sounds fundtastic, please SMASH the subscribe button, leave a like, and FUNDERGRAD me!! I will show my fundergradtitute :-)
                            </text>
                        </div>
                    </div>
                </div>

                <FundStudentCard/>
            </div>
        </>
    );
}
