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
                <p>Based in the Greater Sydney area, I'm looking for remote working opportunities</p>
                
            </div>
        </Col>
    </Row>
    <Row>
        <Col className="col-md-4">
        <div className="h-100 p-2 rounded-3">
                <h4>Skills</h4>
                <ul>
                <h6>Browser Based Technologies</h6>
                <ul>HTML</ul>
                <ul>CSS</ul>
                <ul>Javascript</ul>
                <ul>jQuery</ul>
                <ul>Responsive Design</ul>
                <ul>Bootstrap</ul>
                <ul>Handlebars</ul>
                <ul>Local Storage, Session Storage, IndexedDB</ul>
                <ul>React.js</ul>
                </ul>
                <ul>
                <h6>Deployment</h6>
                <ul>Heroku</ul>
                <ul>Github</ul>
                </ul>
                <ul>
                <h6>Computer Science</h6>
                <ul>Design Patterns</ul>
                <ul>Data Structures</ul>
                <ul>Algorithms</ul>
                </ul>
                <ul>
                <h6>Server-Side Developmet</h6>
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
                <h4>Career Highlights</h4>
                <p>Seconded to the new office in Singapore to deliver events, marketing campaigns, promotions and set up processes and ongoing tools for the team.</p>
                <p>Developing the Airpoints programme marketing launch for the new retail coalition – this involved working with 4 key business partners to deliver a priming and launch campaign that met objectives for all partners included.</p>
                <p>Nominated finalist for the ICON award in December 2015 at Air NZ, as well as ‘Quest for the Best’ award at SKYCITY, both internal staff recognition programmes.</p>
            </div>
        </Row>
        </Col>
    </Row>
    </Container>
  );
}