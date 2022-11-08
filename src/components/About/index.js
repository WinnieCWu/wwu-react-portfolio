import React from 'react';
import coverImage from '../../assets/cover-image.jpg';
import developerPhoto from '../../assets/developer-photo_10.jpg';

function About() {
  return (
    <section className="d-flex justify-content-center" id="about">
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
      <h1>Hello, I am Winnie Wu.</h1>
      <div className="my-2">
        <img src ={developerPhoto} alt="developer"/>
        <h3 className="container">
<br></br>
          I am a full stack web developer seeking further opportunity to provide top-quality services to clients and to be a valuable team-player. <br></br>
          Currently a Government Benefit Specialist and Program Coordinator for San Mateo County Health, with 10+ years’ experience in a healthcare setting, a master's degree in Public Health from University of San Francisco, and a Full-Stack Coding Certification from UC Berkeley Coding Bootcamp where I developed expertise in front- and back-end web development, database management, and design architecture, such as:<br></br> <br></br>
<li> <i> Front-End</i>: HTML5, CSS, JavaScript (JSON), jQuery, Bootstrap, AJAX, React (Hooks), Progressive Web Applications (PWA), Responsive Design, RESTful APIs, Webpack</li>
<li> <i>Back-End</i>: MERN Stack (MongoDB/Mongoose ODM, Express, ReactJS, Node.js), SQL/Sequelize ORM, GraphQL, User Authentication, Handlebars, Model-View-Controller (MVC), Test-Development Driven (TDD), Version Control (Git)</li> <br></br>
My diverse background in local government and non-profits help me to leverage a range of experiences: being a government benefit specialist and program coordinator enhanced my ability to adapt and problem-solve, my role as a social work assistant and intake coordinator honed my excellent organization and cross-functional collaboration skills, and my educator experience developed my ability to educate others in step-by-step processes. These, in addition to my reliable work ethic, drive for excellence, and passion for unlimited growth, are assets I am excited to bring into my career in web development.

        </h3>
      </div>
    </section>
  );
}

export default About;