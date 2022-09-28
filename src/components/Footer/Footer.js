import React from 'react';
import './footer.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {

    return (
        <footer class="container-fluid text-center" id="contact-me">
            <div class="icon-bar">
                <a href="https://www.linkedin.com/in/cat-ormerod/" className="linkedin" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href="https://github.com/CatOrmerod" className="github" target="_blank" rel="noreferrer"><FaGithub /></a>
            </div>
        </footer>
    );
};

export default Footer;