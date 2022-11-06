import React from "react";
//take screenshots of deployed app, then include project title, link to deployed app, and link to corresponding github
const Project = (currentPage) => {
  const { name, category, description, index, githubLink, link } = currentPage;
 
  return (
    <div className ="modal">
      <h2>{name}</h2>
      <li>{category}</li>
      <ul>{description}</ul>
      <ul>{githubLink}</ul>
      <ul>{link}</ul>
    </div>
  );
};

export default Project;
