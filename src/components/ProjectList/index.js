import React, { useState } from 'react';
import Modal from '../Modal';
import Photography from '../../assets/project/0.JPG';
import SocialNetwork from '../../assets/project/1.JPG';
import DeepThoughts from '../../assets/project/2.JPG';
import BudgetTracker from '../../assets/project/3.JPG';
import ExpressNotes from '../../assets/project/4.JPG';
import OurSpace from '../../assets/project/5.JPG';

const ProjectList = ({category}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState();
    const [projects] = useState([
        {
            name: "Photography E-Portfolio",
            category: "project",
            description:
              "Added front-end code to build and make the photo gallery functional using React",
            githubLink: "Link to github repo: https://github.com/WinnieCWu/e-photography-portfolio.git",
            link:"",
            image: {Photography}
          },
          {
            name: "Social Network Application",
            category: "project",
            description:
              "This app was built with MERN stack for a social network web application to allow users to share their thoughts, react to their friends' thoughts, and create a friend list. Used Express.js, MongoDB, Express.js, and Mongoose to build the functionality of the app",
            githubLink: "Link to github repo: https://github.com/WinnieCWu/social-network-api.git",
            link: "Link to see how the app functions: https://drive.google.com/file/d/1at6tHrKvIlp4IiGs_-w_nYVJwCyruUzt/view",
            image: {SocialNetwork}    
        },
            
          {
            name: "Some Deep Thoughts",
            category: "project",
            description:"Social media app built with MERN stack that enables users to log in and share their thoughts, while also interacting with other users' thoughts with reactions. It's a single-page app that uses MERN stack for full-stack development.",
            githubLink: "Link to github repo: https://github.com/WinnieCWu/some-deep-thoughts.git",
            link: "Deployed link: https://afternoon-reef-90509.herokuapp.com/",
            image: {DeepThoughts}  
        },
          {
            name: "Progressive Budget Tracker",
            category: "project",
            description:"A budget tracker app that enables users to add or subtract funds both with and without internet connection with the help of IndexedDB and Service Worker.",
            githubLink: "Link to github repo: https://github.com/WinnieCWu/progressive-budget-tracker.git",
            link: "Deployed link: https://limitless-lowlands-47356.herokuapp.com/",
            image: {BudgetTracker}  
        },
          {
            name: "Express Note Taker",
            category: "project",
            description:"A note taker app using Express.js that enables users to write, save, and delete notes, which helps organize thoughts and track endless tasks.",
            githubLink: "Link to github repo: https://github.com/WinnieCWu/Note-Taker-App.git",
            link: "Deployed link: http://enigmatic-mountain-89996.herokuapp.com/",
            image: {ExpressNotes}  
        },
          {
            name: "OurSpace",
            category: "project",
            description:"A full stack app with a digital space for users to write their own thoughts and comment on other's.",
            githubLink: "Link to github repo: https://github.com/WinnieCWu/OurSpace.git",
            link: "Deployed link: https://obscure-citadel-61027.herokuapp.com/",
            image: {OurSpace}  
        }
    ]);

    const currentProjects = projects.filter(project => project.category === category);
    //go thru each project in project array to find project that match selected category by user 
    //if it matches, will be returned in an array and assigned to currentProject

    const toggleModal = (project, i) => {
      setCurrentProject({ ...project, index: i });
      setIsModalOpen(!isModalOpen);
    };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentProject={currentProject} />
      )}
        <div className="flex-row px-1">
        {currentProjects.map((project, i) => (
          <img
            src={require(`../../assets/project/${i}.jpg`)}
            alt={project.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(project, i)}
            key={project.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;