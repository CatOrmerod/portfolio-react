import React from 'react';
import myResume from '../../../src/assets/resume/resume.pdf';

export default function Resume() {
  return (
    <div className="container py-4">
    <div className="row apgn-items-md-stretch">
        <div className="col-md-12">
            <div className="h-100 p-5 rounded-3">
                <h3>Cat Ormerod</h3>
                <p>Currently working towards a certificate in Full Stack Web Development from the University of Sydney
                    Coding Bootcamp.</p>
                <p>Based in the Greater Sydney area, I'm looking for remote working opportunities</p>
                <a id="resume-link" href={myResume} download="Cat-Ormerod-Resume">Download Resume</a>
            </div>
        </div>
        <div className="col-md-4">
            <div className="h-100 p-5 rounded-3">
                <h3>Skills</h3>
                <ul>
                    <p>HTML / CSS / JavaScript</p>
                    <p>Node.js / Express.js / Sequelize</p>
                    <p>Bootstrap / JQuery / mySQL</p>
                    <p>Heroku / GitHub</p>
                </ul>
            </div>
        </div>
        <div className="col-md-8">
            <div className="h-100 p-5 rounded-3">
                <h3>More about me</h3>
                <p>I am a results-oriented project management specialist with a proven track record delivering
                    significant campaigns with challenging deadlines and strict budgets.</p>
                <p>Strong analytical skills, including a thorough understanding of how to interpret customer & business
                    needs and translate them into apppliation and operational requirements.</p>
                <p>Excellent communication and interpersonal skills, with the ability to develop solid strategic
                    relationships with customers, business partners and stakeholders. </p>
            </div>
        </div>
        <div className="col-md-12">
            <div className="h-100 p-5 rounded-3">
                <h3>Career Highlights</h3>
                <p>Seconded to the new office in Singapore to deliver events, marketing campaigns, promotions and set up processes and ongoing tools for the team.</p>
                <p>Developing the Airpoints programme marketing launch for the new retail coalition – this involved working with 4 key business partners to deliver a priming and launch campaign that met objectives for all partners included.</p>
                <p>Nominated finalist for the ICON award in December 2015 at Air NZ, as well as ‘Quest for the Best’ award at SKYCITY, both internal staff recognition programmes.</p>
            </div>
        </div>
    </div>
    </div>
  );
}