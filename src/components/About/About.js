import React from 'react';
import { Media } from 'reactstrap';
import selfie from '../../assets/images/selfie.jpg';

const About = () => {
    return (
        <Media className="text-center">
            <Media middle>
                <Media object src={selfie} alt="Selfie" className="mr-3 mt-3 rounded-circle" style={{ width: '150px' }} />
            </Media>
            <Media body>
                <Media heading>
                    Cat Ormerod <small><i>full stack developer</i></small>
                </Media>
                <p>Currently working at Deloitte in the Cloud & Engineering team, 
                    which has been a fabulous start to my career in development.  
                    My first project was a role in Automation Testing where I wrote scripts to test API's end-to-end. 
                    Now about to move into a Mulesoft project as my next step, I've just completed the Anypoint Platform Development Fundamentals Course and about to get certified with my exam booked for late October.
                    In my spare time I've completed the Azure Fundamentals certificate and am now focussed on learning C# in my downtime.  I love that aspect of development, where there is ALWAYS something new to learn!</p>
                <p>Prior to Deloitte I've worked in Marketing for the last 20 years, most recently in the
                    Airline Industry for Air New Zealand. In that time I've enjoyed roles in
                    Trade Marketing, Brand Development and Analytics (which gave me a great introduction to SQL).</p>
                <p>When looking at going back into the workforce, after maternity leave, I decided to follow my heart and give coding a go.
                    Whilst I thought it would be a good fit for my personality and background, I didn't realize quite how much
                    I'd love it.  I completed the University of Sydney Coding Bootcamp, an immersive 6 month course 
                    that teaches full-stack development with an A+ average.    
                </p>
            </Media>
        </Media>
    );
};

export default About;