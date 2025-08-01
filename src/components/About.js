import React from "react";
import Links from "./Links";

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio.trim() !== "" ? <p>{bio}</p> : null}
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
