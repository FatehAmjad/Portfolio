import React from "react";
import './intro.css';
import bg from '../../images/image.png'
import btnImg from '../../images/hireme.png'
import { Link } from 'react-scroll';

const linkedInProfile = "https://ae.linkedin.com/in/fatehamjad";
const Intro = () => {
    
    const openLinkedInProfile = () => {
        window.open(linkedInProfile, "_blank");
    }

    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hey there!</span>
                <span className="introText">Myself <intro className="introName">Fateh Amjad,</intro><br/>Full-Stack Web and Python Developer.</span>
                <p className="introPara">BSC IT graduate from Curtin University.</p>
                <Link><button className="hire" onClick={openLinkedInProfile}>
                    <img src= {btnImg} alt="Hire" className="btnImg" />Hire Me.
                    </button>
                    </Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
      );
}
 
export default Intro;