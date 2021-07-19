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
                <p>I've worked in Marketing for the last 20 years, most recently in the
                    Airline Industry for Air New Zealand. In that time I've enjoyed roles in
                    Trade Marketing, Brand Development and also a few Marketing Analytics
                    roles.</p>
                <p>I currently live in Central Coast, NSW with my partner and our 3 year old
                    daughter, Piper. I've enjoyed being a full-time mum for the last few years,
                    but now I'm ready for the next challenge
                </p>
                <p>When looking at going back into the workforce I decided to follow my heart and give coding a go.
                    Whilst I thought it would be a good fit for my personality and background, I didn't realize quite how much
                    I've love it.  I'm excited to see where this journey takes me and looking forward to getting a job once I've completed the course.
                </p>
            </Media>
        </Media>
    );
};

export default About;