import React from 'react';
import resume from '../../assets/Resume.pdf';
function Resume() {
    return (
        <section>
            <h1>
                <a href={resume} alt="downloadable resume">Resume</a>
            </h1>
            <h2> Frontend (Browser-Based) Proficiencies </h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript/jQuery</li>
                <li>Bootstrap</li>
                <li>Progressive Web Applications(PWAs)</li>
                <li>Local Storage, Session Storage, IndexedDB</li>
                <li>React.js</li>
            </ul>
            <h2> Backend Proficiencies</h2>
            <ul>
                <li>Server-Side Development</li>
                    <ol>MERN Stack (MongoDB, Express.js, React.js, Node.js)</ol>
                    <ol>User Authentication</ol>
                    <ol></ol>
                <li>Database Management</li>
                    <ol>MySQL</ol>
                    <ol>MongoDB</ol>
                    <ol></ol>
                <li>Application</li>
                    <ol>API & Rest</ol>
                    <ol>GraphQL</ol>
                    <ol>Deployment and Delivery</ol>
                        <li>Heroku</li>
                        <li>GitHub Pages</li>
                        <li>Unit Testing</li>
            </ul>
        </section>
    );
};


export default Resume;