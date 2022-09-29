import React from 'react';
import { Container, Jumbotron, Row, Col } from 'reactstrap';
import './resume.css';
import myResume from '../../../src/assets/resume/resume.pdf';

export default function Resume() {
  return (
    <Container>
    <Jumbotron className="text-center">
    <h3>Cat Ormerod - Resume</h3>
    <a id="resume-link" href={myResume} download="Cat-Ormerod-Resume">Download Resume</a>
    </Jumbotron>
    <Row>
        <Col>
        <div className="h-100 p-2 rounded-3">
                <p>Completed a certificate in Full Stack Web Development from the University of Sydney
                    Coding Bootcamp with an A+ average.</p>
                <p>Currently working for Deloitte in the Cloud & Engineering team with a focus on Integration and Quality Engineering.</p>
                
            </div>
        </Col>
    </Row>
    <Row>
        <Col className="col-md-4">
        <div className="h-100 p-2 rounded-3">
                <h4>Skills</h4>
                <ul>
                <h6>Browser Based Technologies</h6>
                <ul>HTML, CSS, Responsive Design</ul>
                <ul>Javascript & Node.js</ul>
                <ul>React.js</ul>
                <ul>jQuery</ul>
                <ul>Bootstrap</ul>
                <ul>Handlebars</ul>
                <ul>Local Storage, Session Storage, IndexedDB</ul>
                </ul>
                <ul>
                <h6>Deployment</h6>
                <ul>Heroku</ul>
                <ul>Github</ul>
                </ul>
                <ul>
                <h6>Integration</h6>
                <ul>Mulesoft</ul>
                </ul>
                <ul>
                <h6>Computer Science (beginner)</h6>
                <ul>Design Patterns</ul>
                <ul>Data Structures</ul>
                <ul>Algorithms</ul>
                </ul>
                <ul>
                <h6>Server-Side Development</h6>
                <ul>Graphql</ul>
                <ul>Express</ul>
                <ul>User Authentication</ul>
                <ul>Sequelize</ul>
                <ul>MERN Stack</ul>
                </ul>
                <ul>
                <h6>Databases</h6>
                <ul>MySQL</ul>
                <ul>MongoDB</ul>
                </ul>
                <ul>
                <h6>Quality and Performance</h6>
                <ul>REST API testing - Karate</ul>
                <ul>Soap UI testing</ul>
                <ul>Unit Testing</ul>
                <ul>Google Lighthouse</ul>
                <ul>Webpack</ul>
                <ul>PWA's</ul>
                <ul>Lazy Loading</ul>
                <ul>Service Workers</ul>
                </ul>
            </div>
        </Col>
        <Col className="col-md-8">
        <Row>
        <div className="h-100 p-2 rounded-3">
                <h4>More about me</h4>
                <p>A results-oriented project management specialist with a proven track record delivering
                    significant campaigns with challenging deadlines and strict budgets.</p>
                <p>Strong analytical skills, including a thorough understanding of how to interpret customer & business
                    needs and translate them into apppliation and operational requirements.</p>
                <p>Excellent communication and interpersonal skills, with the ability to develop solid strategic
                    relationships with customers, business partners and stakeholders. </p>
            </div>
        </Row>
        <Row>
        <div className="h-100 p-2 rounded-3">
                <h4>Deloitte Experience</h4>
                <p>Hired into Deloitte as a Analyst directly out of the full-stack development course, and within 8 months promoted to Consultant.</p>
                <p>Recently completed the Anypoint Platform Development Fundamentals course in preparation for my next project where I will be working on Mulesoft.</p>
                <p>Previous project was in an Automation testing role where I did end-to-end functional testing on REST and SOAP API's using various tools, including Karate, Soap UI, Ready API and Postman.</p>
                <p>Completed my AZ-900 Azure Fundamentals certification with Microsoft.</p>
            </div>
        </Row>
        </Col>
    </Row>
    </Container>
  );
}