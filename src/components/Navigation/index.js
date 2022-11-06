import React, { useEffect } from "react";

function Li (props){
  return(
    <li className="mx-2">
    <a data-testid="about" href={`#${props.page}`}
      onClick={() => props.setCurrentPage(props.page)}>
      {props.page}
    </a>
  </li>
  )
}

function Nav(props) {
  const {pages = [], currentPage, setCurrentPage } = props;

  return (
    <header className="flex-row px-1" id="nav">
      <nav>
        <div className="navbar">
        <div className="navbar-header col-lg-12 justify-flex-start">
        <ul className="flex-row">
          {pages.map(page=>{
            return ( <Li page={page} setCurrentPage={setCurrentPage} />
            )
          })}
        </ul>
        </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
