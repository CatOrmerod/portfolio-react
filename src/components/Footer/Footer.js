import React from 'react';
import './footer.css';
import { FaGithub, FaLinkedin, FaSlack } from "react-icons/fa";

const Footer = () => {

    return (
        <footer class="container-fluid text-center" id="contact-me">
            <div class="icon-bar">
                <a href="https://www.linkedin.com/in/cat-ormerod/" className="linkedin" target="_blank"><FaLinkedin /></a>
                <a href="https://github.com/CatOrmerod" className="github" target="_blank"><FaGithub /></a>
                <a href="mailto:catormerod@gmail.com" className="email" target="_blank"><FaSlack /></a>
            </div>
        </footer>
    );
};

export default Footer;