import React from 'react';
import './About.css';
import PropTypes from 'prop-types';
import mypic from './mypic.JPG';

 const About = (props) => {

    return (
        <div className='info-container'>
            <div className="about-header">
                <img src={mypic}  className='round-img' alt="profile" 
                    style={{width:'250px',height:'280px'}}/>  
                <div className="header-text">
                <p> Full Name : {props.fullname}</p>
                    <p> Age : {props.age}</p>
                    <p >
                    I am a self motivated person who is always willing to learn and expand my skills and 
                    knowledge. I am an ambitious individual driven by the desire to succeed and advance 
                    my capabilities. Aspiring to pursue a career in web development and hopefully become 
                    a web developer. I am passionate about finding different and innovative solutions
                    to problems.
                    </p>
                </div>
            </div>
            <div className='container'>
            <p></p>
                <h3><strong>More About Me</strong></h3>
                    
                    <p>
                    I was introduced to the tech space in high school in grade 10 Information technology we were introduced to Scretch. The
                    realization that I could create programs that could work and produce results was 
                    fascinating for me. After highschool studied Biotechnology because I wanted to study
                    something technology related but with some science because I love science also.
                    In coding love the fact that I am able to take part and have a role in producing solutions 
                    for problems using technology. During the course at Life Choices I realised that I enjoy
                     coding and I can achieve a lot with it hence I decided to pursue a career in web development.
                    </p> 
                    
            </div>
            <div className='edu-container'>
                <br></br>
                <h3><i className="fas fa-graduation-cap fa-2x" style={{color:'#1a237e'}}></i>
                    <strong>EDUCATION </strong></h3>
                <h4><strong>Other  </strong></h4>
                <p>{props.current}</p>
                
                <h4><strong>Tertiary  </strong></h4>
                <p>Institution : University of Western Cape</p>
                <p>Qualification : {props.tertiary}</p>
                
                <h4 ><strong>Matric </strong></h4>
                <p>Year  :  2014</p>
                <p>School  : {props.school}</p>  
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