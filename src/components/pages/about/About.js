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
            
            <div className='container'>
            <h3 ><strong>TESTIMONIALS</strong></h3>
            <div className='row'>
                <div className='col'>
                <div className='card'>
                    <p><strong>Godwin Dzvapatsva </strong>- Head of Curriculum and Learning</p>
                    <p>Ntombekazi is a polite and well behaved candidate who can be
                    a great asset to any development team. I enjoyed working with her 
                    throughout her studies at Lifechoices.
                    </p>
                    </div>
                </div>
                <div className='col'>
                <div className='card'>
                    <p>
                    <strong>Anam Majikijela </strong>- Collegue
                    </p>
                    <p>
                    Ntombekazi is what I believe to be a hard worker, she is great 
                    to work with and is very creative with every project she comes 
                    across with.
                    </p>
                    </div>
                </div>
            </div>
             
            <div className='row'>
                <div className='col'>
                <div className='card'>
                     <img src="data:image/jpeg;base64,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" 
                    className='round-img' alt="profile" 
                    style={{width:'250px',height:'280px'}}/>  
                    <p><strong>Viata Fredericks</strong> - Collegue</p>
 
                    <p>Ntombekazi Sibetyu is a wise and committed individual. I have had the pleasure of working with her and found herto be a really hard working individual. We were put under 
                    a lot of pressure and stress and yet she has kept on going,
                    not given up and tried her best. I believe that Ntombekazi has
                    great potential and will be an asset in the workplace</p>
                    </div>
                </div>

                <div className='col'> 
                    <div className='card'>
                   
                    <p>
                    <strong>Yonela Ntsangani </strong>- Collegue
                    </p>
                    <p>
                    Ntombekazi Sibetyu is a wise and committed individual. I have had the pleasure of working with her and found herto be a really hard working individual. We were put under 
                    a lot of pressure and stress and yet she has kept on going,
                    not given up and tried her best. I believe that Ntombekazi has
                    great potential and will be an asset in the workplace.
                    </p>
                    </div>  
                </div>
            </div>
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