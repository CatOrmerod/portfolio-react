import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Example = (props) => {
    return (
        <Form>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" placeholder="please enter your name" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="please enter your email address" />
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                <Label for="message">Message</Label>
                <Input type="text" name="message" id="message" placeholder="Please enter a message" />
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    );
}

export default Example;