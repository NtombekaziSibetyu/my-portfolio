import React from 'react';
import './About.css';
import PropTypes from 'prop-types';
import mypic from './mypic.JPG';

 const About = (props) => {

    return (
        <div className='info-container' id="about">
            <div className="cover-photo">
                <div className="header">
                        <h1>ABOUT ME</h1>
                </div>
                <img src={mypic} alt="profile" 
                     className="profile"/>  
            </div>

            <div className='container'>
                    
                    <p >
                    I am a self motivated person who is always willing to learn and expand my skills and 
                    knowledge. I am an ambitious individual driven by the desire to succeed and advance 
                    my capabilities. Aspiring to pursue a career in web development and hopefully become 
                    a web developer. I am passionate about finding different and innovative solutions
                    to problems.
                    </p>
                    
                    <p>
                    I was introduced to the tech space in high school in grade 10 Information technology we were introduced to Scratch. The
                    realization that I could create programs that could work and produce results was 
                    fascinating for me. After highschool studied Biotechnology because I wanted to study
                    something technology related but with some science because I love science also.
                    In coding love the fact that I am able to take part and have a role in producing solutions 
                    for problems using technology. During the course at Life Choices I realised that I enjoy
                     coding and I can achieve a lot with it hence I decided to pursue a career in web development.
                    </p> 
                    
            </div>
                     
            
        </div>

      
    )
}

About.defaultProps = {
    fullname:'Ntombekazi Sibetyu',
    age:"23",
    current: "Life Choices Coding Academy",
    tertiary : "BSc Biotechnology",
    school : "Center of Sciencd and Technology - COSAT"
}

About.propTypes = {
    fullname: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    current: PropTypes.string.isRequired
}

export default About;