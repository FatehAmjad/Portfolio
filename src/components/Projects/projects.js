import React from "react";
import "./projects.css";
import videoBg from '../../images/videoBg.mp4';

const Works = () => {
  return (
    <section className="works">
      <h2 className="projectsTitle">Projects overview.</h2>
      
      <video className="video" src={videoBg} autoPlay loop muted />
      
    </section>
  );
};

export default Works;
