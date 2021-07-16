import React from 'react';
import { Col, Row, Button, Form, FormFeedback, FormGroup, Label, Input } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
// import { validateEmail } from '../../utils/helpers';

const Contact = (props) => {
    return (
        <AvForm>
        <AvField name="name" label="Name" type="text" validate={{
            required: {value: true, errorMessage: 'Please enter a name'},
            pattern: {value: '^[A-Za-z0-9]+$', errorMessage: 'Your name must be composed only with letter and numbers'},
            minLength: {value: 6, errorMessage: 'Your name must be between 6 and 16 characters'},
            maxLength: {value: 16, errorMessage: 'Your name must be between 6 and 16 characters'}
          }} />
        <AvField name="email" label="Email" type="text" validate={{
            required: {value: true, errorMessage: 'Please enter an email address'},
            pattern: {value: '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'}
        }} />
        <AvField name="message" label="Message" type="text" validate={{
            required: {value: true, errorMessage: 'Please enter a message'},
            pattern: {value: '^[A-Za-z0-9]+$', errorMessage: 'Your message must be composed only with letter and numbers'},
            minLength: {value: 6, errorMessage: 'Your message must be at least 6 characters'},
          }}/>
        <Button color="primary">Submit</Button>
      </AvForm>
    );
}

export default Contact;