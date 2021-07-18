import React from 'react';
import { Col, Row, Button, Jumbotron, Container } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { useForm, ValidationError } from '@formspree/react';
// import { validateEmail } from '../../utils/helpers';

const Contact = (props) => {
  // const [state, handleSubmit] = useForm("meqvlrja");
  // if (state.succeeded) {
  //     return <p>Thanks for joining!</p>;
  // }
    return (
      <Container>
        <Jumbotron className="text-center">
            <h3>Contact Me</h3>
            <p className="lead">Please contact me at <a
                        href="mailto:catormerod@gmail.com">catormerod@gmail.com</a> or use the form below!</p>
        </Jumbotron>
        <form action="https://formspree.io/f/meqvlrja" method="POST">
        <AvForm>
        <Row xs="1" sm="2">
        <Col>
        <AvField name="name" label="Name" type="text" validate={{
            required: {value: true, errorMessage: 'Please enter a name'},
            pattern: {value: '^[A-Za-z0-9]+$', errorMessage: 'Your name must be composed only with letter and numbers'},
            minLength: {value: 2, errorMessage: 'Your name must be between 2 and 16 characters'},
            maxLength: {value: 16, errorMessage: 'Your name must be between 2 and 16 characters'}
          }} />
        </Col>
          <Col>
          <AvField name="email" label="Email" type="text" validate={{
            required: {value: true, errorMessage: 'Please enter an email address'},
            pattern: {value: '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'}
        }} />
        </Col>
        </Row>
        <AvField name="message" label="Message" type="text" validate={{
            required: {value: true, errorMessage: 'Please enter a message'},
            pattern: {value: '^[A-Za-z0-9]+$', errorMessage: 'Your message must be composed only with letter and numbers'},
            minLength: {value: 6, errorMessage: 'Your message must be at least 6 characters'},
          }}/>
        <Button color="primary">Submit</Button>
      </AvForm>
      </form>
      </Container>
    //   <form onSubmit={handleSubmit}>
    //   <label htmlFor="email">
    //     Email Address
    //   </label>
    //   <input
    //     id="email"
    //     type="email" 
    //     name="email"
    //   />
    //   <ValidationError 
    //     prefix="Email" 
    //     field="email"
    //     errors={state.errors}
    //   />
    //   <textarea
    //     id="name"
    //     name="name"
    //   />
    //   <ValidationError 
    //     prefix="Name" 
    //     field="name"
    //     errors={state.errors}
    //   />
    //   <textarea
    //     id="message"
    //     name="message"
    //   />
    //   <ValidationError 
    //     prefix="Message" 
    //     field="message"
    //     errors={state.errors}
    //   />
    //   <button type="submit" disabled={state.submitting}>
    //     Submit
    //   </button>
    // </form>
    );
}

export default Contact;