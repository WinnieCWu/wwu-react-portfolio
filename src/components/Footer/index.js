//have text/icon links to my github, linkedin profile, and stackoverflow or twitter

import React from 'react';
import githubIcon from '../../assets/github_icon.jpg';
import linkedInIcon from '../../assets/linkedin_icon.jpg';
import stackOverflowIcon from '../../assets/stackoverflow_icon.jpg';


function Footer() {
    return (
        <section id="footer" className="d-flex justify-content-center">
            <div id="icons" className="text-center">
                <a href="https://github.com/WinnieCWu">
                    <img src={githubIcon} alt="github icon"/>
                </a>
        
                <a href="https://www.linkedin.com/in/winniecwu7">
                    <img src={linkedInIcon} alt="linkedIn icon"/>
                </a>
            
                <a href="https://stackoverflow.com/users/19118237/winniecw">
                    <img src={stackOverflowIcon} alt="stack overflow icon"/>
                </a>
            </div>
        </section>
    );
};

export default Footer;