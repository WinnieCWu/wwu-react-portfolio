import React, { useState } from "react";
import Project from '../Project';
import Photography from '../../assets/project/0.JPG';
import SocialNetwork from '../../assets/project/1.JPG';
import DeepThoughts from '../../assets/project/2.JPG';
import BudgetTracker from '../../assets/project/3.JPG';
import ExpressNotes from '../../assets/project/4.JPG';
import OurSpace from '../../assets/project/5.JPG';



const Portfolio = () => {
  const [projects] = useState([
    {
      name: "Photography E-Portfolio",
      category: "React",
      description:
        "Added front-end code to build and make the photo gallery functional using React",
      githubLink: "Link to github repo: https://github.com/WinnieCWu/e-photography-portfolio.git",
      link:"",
      image: {Photography}
    },
    {
      name: "Social Network Application",
      category: "MERN stack",
      description:
        "This app was built with MERN stack for a social network web application to allow users to share their thoughts, react to their friends' thoughts, and create a friend list. Used Express.js, MongoDB, Express.js, and Mongoose to build the functionality of the app",
      githubLink: "Link to github repo: https://github.com/WinnieCWu/social-network-api.git",
      link: "Link to see how the app functions: https://drive.google.com/file/d/1at6tHrKvIlp4IiGs_-w_nYVJwCyruUzt/view",
      image: {SocialNetwork}
      },
    {
      name: "Some Deep Thoughts",
      category: "MERN stack",
      description:"Social media app built with MERN stack that enables users to log in and share their thoughts, while also interacting with other users' thoughts with reactions. It's a sing-page app that uses MERN stack for full-stack development.",
      githubLink: "Link to github repo: https://github.com/WinnieCWu/some-deep-thoughts.git",
      link: "Deployed link: https://afternoon-reef-90509.herokuapp.com/",
      image: {DeepThoughts}
    },
    {
      name: "Progressive Budget Tracker",
      category: "Progressive Web App",
      description:"A budget tracker app that enables users to add or subtract funds both with and without internet connection with the help of IndexedDB and Service Worker.",
      githubLink: "Link to github repo: https://github.com/WinnieCWu/progressive-budget-tracker.git",
      link: "Deployed link: https://limitless-lowlands-47356.herokuapp.com/",
      image: {BudgetTracker}
    },
    {
      name: "Express Note Taker",
      category: "Express.js",
      description:"A note taker app using Express.js that enables users to write, save, and delete notes, which helps organize thoughts and track endless tasks.",
      githubLink: "Link to github repo: https://github.com/WinnieCWu/Note-Taker-App.git",
      link: "Deployed link: http://enigmatic-mountain-89996.herokuapp.com/",
      image: {ExpressNotes}
    },
    {
      name: "OurSpace",
      category: "Full Stack App",
      description:"A full stack app with a digital space for users to write their own thoughts and comment on other's.",
      githubLink: "Link to github repo: https://github.com/WinnieCWu/OurSpace.git",
      link: "Deployed link: https://obscure-citadel-61027.herokuapp.com/",
      image: {OurSpace}
    }
  ]);

  const [currentPage, setCurrentPage] = useState(projects[0]);


  return (
    <section>

      <h1>Portfolio</h1>
      <div className="container"> 
        {projects.map(project => (
          <Project
            name = {project.name}
            category = {project.category}
            description = {project.description}
            githubLink= {project.githubLink}
            link = {project.link}
            image = {project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
