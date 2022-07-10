import React, { useContext, useEffect, useState } from "react";
import classes from "./FundStudentCard.module.css";
import { useNavigate } from "react-router-dom";
import { Button, Form, InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PaymentModal from "../Components/PaymentModal";
import Overlay from "../Components/Overlay";


export default function(props) {
    const student = props.data;
    const [showPaymentModal, setShowPaymentModal] = useState(false)

    const togglePaymentModal = () => {
      setShowPaymentModal(!showPaymentModal)
    }


    return (
        <>
        <div className={classes.root}>
            <Form>
                <h1>💰 Fund {student.firstname}!</h1>
                <Form.Group className={classes.tbc} controlId='amount'>
                    <Form.Label>Amount</Form.Label>
                    <InputGroup className={classes.input}>
                        <Form.Control className={classes.formcontrol} type="number" placeholder="SGD"/>
                    </InputGroup>
                </Form.Group>

                <Form.Group className={classes.tbc} controlId='message'>
                    <Form.Label>Send {student.firstname} a Message</Form.Label>
                    <InputGroup className={classes.input}>
                        <Form.Control as='textarea' rows={3} />
                    </InputGroup>
                </Form.Group>
                
                <Button className={classes.button} onClick={togglePaymentModal}>
                    Support {student.firstname}!
                </Button>
            </Form>
        </div>
            {showPaymentModal && <PaymentModal toggle={togglePaymentModal}/>}
            {showPaymentModal && <Overlay toggle={togglePaymentModal}/>}  
        </>
    );
}
