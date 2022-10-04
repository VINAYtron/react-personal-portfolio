import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Vinay Patil</h2>
        <div className="prompt">
          <p>
            Aspiring Frontend developer with a passion for learning and
            creating.
          </p>
          <a href="https://github.com/VINAYtron?tab=repositories" target="#">
            <GithubIcon className="icons" />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, BootStrap, MaterialUI, StyledComponents,
              GitHub, Netlify
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
