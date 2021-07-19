export function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Contact Form code


import React, { useState } from 'react';
import { Container, Jumbotron } from 'reactstrap';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage('Please enter a valid email!');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`Your ${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    };

    return (
        <Container>
            <Jumbotron className="text-center">
                <h3>Contact Me</h3>
                <p className="lead">Please contact me at <a
                            href="mailto:catormerod@gmail.com">catormerod@gmail.com</a> or use the form below!</p>
            </Jumbotron>
                <form action="https://formspree.io/f/meqvlrja" method="POST">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Your name" onBlur={handleChange} />
                    <label className="form-label" htmlFor="email">Email</label>
                    <input type="text" className="form-control" id="email" name="email" placeholder="Your email" onBlur={handleChange} />
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" name="message" placeholder="Leave a message!" onBlur={handleChange} ></textarea>
                    {errorMessage && (
                        <div>
                            <p>{errorMessage}</p>
                        </div>
                    )}
                    {!errorMessage && (
                        <button className="btn" type="submit">SEND</button>
                    )}
                </form>
        </Container>
    );
}

export default Contact;