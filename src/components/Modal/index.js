import React from "react";
//take screenshots of deployed app, then include project title, link to deployed app, and link to corresponding github
const Modal = (onClose, currentProject) => {
  const { name, description, index, githubLink, link } = currentProject;
 
  return (
    <div className ="modalBackdrop">
      <div className ="modalContainer">
        <h2 className="modalTitle">{name}</h2>
        <img src={require(`../../assets/project/${index}.jpg`)}
          alt="current project"
        />
          <p>{description}</p>
          <ul>{githubLink}</ul>
          <ul>{link}</ul>
          <button type="button" onClick={onClose}>
            Close this modal
          </button>
      </div>
    </div>
  );
};

export default Modal;
