import React from "react";
import './skills.css';
import pythonPic from '../../images/Python.png';
import webPic from '../../images/website-design.png';
import appPic from '../../images/app-design.png';
const Skills = () => {
    return ( 
        <section id='skills'>
            <span className="skillHeading">About me.</span>
            <span className="skillDescription">IT graduate from Curtin University with over 4 years of experience in software 
            and website development. Expertise in C programming, Python, Django, Bootstrap, React, and Front-end stack with 
            a focus on game and web development. Delivering team-based projects on time and with problem solving skills and ability to 
            work well under pressure.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={pythonPic} alt="pythonPic" className="skillImg1" />
                    <div className="skillBarText">
                        <h2>Python Developer</h2>
                        <ul>
                            <li>4 years hand on experience with multiple Python projects.</li>
                            <li>Inherited Django framework along with Python codebase.</li>
                        </ul>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={webPic} alt="webPic" />
                    <div className="skillBarText">
                        <h2>Web Developer</h2>
                        <ul>
                            <li>Developed 4 websites:
                                <ol>
                                    <li>Business website - Travel Planner with AI and Django</li>
                                    <li>Personal porfolio - React</li>
                                    <li>Student ID card application - Python, Front-end stack, and Django </li>
                                    <li>E-commerce website - Front-end stack </li>
                                    </ol> 
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={appPic} alt="appPic" />
                    <div className="skillBarText">
                        <h2>App Developer</h2>
                        <ul>
                            <li>Produced a Disease Simulation COVID spread program in Python.</li>
                            <li>Created a Laser-tank game in C Programming with functionalities such as move, shoot, and win/loss.</li>
                            <li>Made a 'Simple Network Chat' client-server model program with C Programming.</li>
                            <li>Developed a student ID card application program using python to be used by 2000+ students.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Skills;