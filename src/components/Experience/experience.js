import React, { useRef } from "react";
import './experience.css';
import curtin from '../../images/curtin.png';
import forage from '../../images/forage.png';
import microsoft from '../../images/microsoft.png';
import cisco from '../../images/cisco.png';
import facebookIcon from '../../images/facebook-icon.png';
import instaIcon from '../../images/instagram.png';
import emailjs from '@emailjs/browser';

const Experience = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_5d65uvl', 'template_zhvsi0t', form.current, 'iG3AAfsCLGQZDosLO')
        .then((result) => {
            console.log(result.text);
            alert('Email Sent!');
            e.target.reset(); 
        }, (error) => {
            console.log(error.text);    
        });
    };
    
    return (  
        <section id="experiencePage">
            <div id="experience">
                <h1 className="experiencePageTitle">My Experience</h1>
                <p className="experienceDesc">During my journey of BSC IT program, I had the privilege of gaining knowledege and experience 
                from the below notable entities. </p>
                <div className="experienceImgs">
                    <img src={curtin} alt="Curtin logo." className="experienceImg" />
                    <img src={forage} alt="Forage logo." className="experienceImg" />
                    <img src={microsoft} alt="Microsoft logo." className="experienceImg" />
                    <img src={cisco} alt="Facebook logo." className="experienceImg" />
                </div>
            </div>

            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill the below form to talk about any working opportunities.</span>
                <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name='your_name' />
                    <input type="email" className="email" placeholder="Your Email" name='your_email' />
                    <textarea className='Msg' name="message" cols="30" rows="5" placeholder="Your message"></textarea>
                    <button type='submit' value='Send' className="submitForm">Submit</button>

                    <div className="links">
                        <img src={facebookIcon} alt="Links" className="link" />
                        <img src={instaIcon} alt="Links" className="link" />
                    </div>

                </form>
            </div>

        </section>
    );
}
 
export default Experience