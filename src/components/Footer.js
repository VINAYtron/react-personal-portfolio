import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/VINAYtron?tab=repositories" target='#'>
          <GithubIcon className="icons" />
        </a>
      </div>
      <p> Made with love ❤ by Vinay Patil , &copy; 2022</p>
    </div>
  );
}

export default Footer;
