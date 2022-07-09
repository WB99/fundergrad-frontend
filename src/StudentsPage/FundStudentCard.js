import React from "react";
import classes from "./FundStudentCard.module.css";
import { useNavigate } from "react-router-dom";
import { Button, Form, InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function(props) {
    const student = props.data;

    return (
        <div className={classes.root}>
            <Form>
                <h1>💰 Fund Joel!</h1>
                <Form.Group className={classes.tbc} controlId='amount'>
                    <Form.Label>Amount</Form.Label>
                    <InputGroup className={classes.input}>
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control type="number" />
                    </InputGroup>
                </Form.Group>

                <Form.Group className={classes.tbc} controlId='message'>
                    <Form.Label>Send Joel a Message</Form.Label>
                    <InputGroup className={classes.input}>
                        <Form.Control as='textarea' rows={3} />
                    </InputGroup>
                </Form.Group>
                
                <Button className={classes.button} type='submit'>
                    Support Joel
                </Button>
            </Form>
        </div>
    );
}
