import React from "react";
import './projects.css';
import Portfolio1 from '../../images/portfolio-1.png';
import Portfolio2 from '../../images/portfolio-2.png';
import Portfolio3 from '../../images/portfolio-3.png';
import Portfolio4 from '../../images/portfolio-4.png';
import Portfolio5 from '../../images/portfolio-5.png';

const Works = () => {
    return (
        <section className="works">
            <h2 className="projectsTitle">Projects gallery.</h2>
            <span className="projectsDescription">Over the last 4 years of me coding, I had come across opportunities whereby I was tested
            to my abilities, to produce projects of different sectors whether it being game, website, or application development. Below
            are all the projects listed, take your time and enjoy! </span>
            <div className="projectsImgs">
                <img src={Portfolio1} alt="Client-Server model." className="projectsImg" />
                <img src={Portfolio2} alt="COVID disease simulation program." className="projectsImg" />
                <img src={Portfolio3} alt="Laser tank game." className="projectsImg" />
                <img src={Portfolio4} alt="PlanMyTrip website." className="projectsImg" />
                <img src={Portfolio5} alt="Student ID card program." className="projectsImg" />
            </div>
            </section>
      );
}
 
export default Works;

