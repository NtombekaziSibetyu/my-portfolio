import React, { Fragment} from 'react';
import './About.css';
import PropTypes from 'prop-types';
import mypic from './mypic.JPG'
import ProgressBar from '../portfolio/ProgressBar';
import Passion from './passion.js/passion'


 const About = (props) => {

    return (
        <div className='info-container'>
            <div className='container'>
            <div className='row'>
                <div className='col-4 '>
                <img src={mypic}  className='round-img' alt="profile" 
                    style={{width:'250px'},{height:'280px'}}/>  
                </div>
                <div className='col-8'>
                    <h3 className='sub-header'><strong>BIO</strong></h3>
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
            <div className='container'>
            
            <ProgressBar/>
            <br></br>
            <h3><i className="fas fa-graduation-cap fa-2x" style={{color:'#1a237e'}}></i>
                <strong>EDUCATION </strong></h3>
            <h4><strong>Current  </strong></h4>
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