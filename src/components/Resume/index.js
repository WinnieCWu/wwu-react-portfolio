import React from 'react';
import resume from '../../assets/Resume.pdf';

function Resume() {
    return (
        <section id="resume" className="d-flex justify-content-center">
            <h1>
                <a href={resume} alt="downloadable resume">Resume</a>
            </h1>
            <h2> Front-End Proficiencies </h2>
            <ul>
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript(JSON)</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>Progressive Web Applications(PWAs)</li>
                <li>React (Hooks)</li>
                <li>Responsive Design</li>
                <li>Webpack</li>
                <li>Local Storage, Session Storage, IndexedDB</li>
                
            </ul>
            <h2> Back-End Proficiencies</h2>
            <ul>
                <li>Server-Side Development</li>
                    <ol>MERN Stack (MongoDB/Mongoose ODM, Express.js, React.js, Node.js)</ol>
                    <ol>User Authentication</ol>
                    <ol></ol>
                <li>Database Management</li>
                    <ol>SQL/Sequelize ORM</ol>
                    <ol>MongoDB</ol>
                    <ol></ol>
                <li>Application</li>
                    <ol>RESTful APIs</ol>
                    <ol>Model-View-Controller (MVC)</ol>
                    <ol>Deployment and Delivery</ol>
                        <li>Heroku</li>
                        <li>GitHub Pages</li>
                        <li>Test-Development Driven (TDD)</li>
                        <li>Version Control (Git) </li>
            </ul>
        </section>
    );
};


export default Resume;