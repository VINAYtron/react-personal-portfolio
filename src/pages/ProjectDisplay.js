import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt={"project-img"} />
      <p>
        <b>Skills:</b> <span>{project.skills}</span>
      </p>
      <div className="link-box">
        <a href={project.repoLink} target="#">
          <GitHubIcon className="icons" />
        </a>
        <a href={project.liveLink} target="#">
          <LinkIcon className="icons" />
        </a>
      </div>
    </div>
  );
}

export default ProjectDisplay;
