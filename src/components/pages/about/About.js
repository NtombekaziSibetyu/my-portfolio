import React, { Fragment} from 'react';
import './About.css';
import PropTypes from 'prop-types';
import mypic from './mypic.JPG'
import ProgressBar from '../portfolio/ProgressBar';


 const About = (props) => {

    return (
        <div className='info-container'>
            <div className='container'>
            <h1 className='header'>HI I'M NTOMBEKAZI </h1>
            <div className='row'>
                <div className='col-4 '>
                <img src={mypic}  className='round-img' alt="profile" 
                    style={{width:'250px'}}/>  
                </div>
                <div className='col-8'>
                <h3 className='sub-header'><strong>BIO</strong></h3>
                    <p> Full Name : {props.fullname}</p>
                    <p> Date of birth : {props.dob}</p>
                    <p> Gender : {props.gender}</p>
                    <p> Location suburb : {props.suburb}</p>
                    <p> Nationality : {props.nationality}</p>
                    <p> Criminal record : {props.criminalRec}</p>
                </div> 
                <h4><strong>About me</strong></h4>
                    <p >
                    I am a self motivated person who is always willing to learn and expand my skills and 
                    knowledge. I am an ambitious individual driven by the desire to succeed and advance 
                    my capabilities. Aspiring to pursue a career in web development and hopefully become 
                    a web developer. I am passionate about finding different and innovative solutions
                    to problems.
                    </p>
                    <p>
                    I was introduced to the tech space in high school in grade 10 Information technology we were introduced to Scretch. The
                    realization that I could create programs that could work and produce results was 
                    fascinating for me. After highschool studied Biotechnology because I wanted to study
                    something technology related but with some science because I love science also.
                    In coding love the fact that I am able to take part and have a role in producing solutions 
                    for problems using technology. During the course at Life Choices I realised that I enjoy
                     coding and I can achieve a lot with it hence I decided to persue a career in web development.
                    </p> 
                </div>
                <h3 ><strong>Interests</strong></h3>
                <ul>
                <li>
                    Reading fiction and nonfiction and history books </li>
                <li>Drawing</li>
                <li>Watching movies and series</li>
                <li>Writing</li>
            </ul>
            </div>
            <div className='container'>
            <h3><strong>EDUCATION / WORK EXPERIENCE</strong></h3>
            <h4 ><strong>Matric </strong></h4>
            <p>Year : 2014</p>
            <p>School : {props.school}</p>
            <h4><strong>Tertiary  </strong></h4>
            <p>Institution : University of Western Cape</p>
            <p>Qualification : {props.tertiary}</p>
            <h4><strong>Current  </strong></h4>
            <p>{props.current}</p>
            <h4><strong>Work Experience</strong></h4>
            <p>I do not have any work experience</p>
                <ProgressBar/>
            </div>          
            
            <div className='container'>
            <h3 ><strong>TESTIMONIALS</strong></h3>
            <div className='row'>
                <div className='col'>
                <div className='card'>
                    <p>Godwin Dzvapatsva - Head of Curriculum and Learning</p>
                    <p>Ntombekazi is a polite and well behaved candidate who can be
                    a great asset to any development team. I enjoyed working with her 
                    throughout her studies at Lifechoices.
                    </p>
                    </div>
                </div>
                <div className='col'>
                <div className='card'>
                    <p>
                    Anam Majikijela - Collegue
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
                    <p>Viata Fredericks - Collegue</p>
 
                    <p>Ntombekazi Sibetyu is a wise and committed individual. I have had the pleasure of working with her and found herto be a really hard working individual. We were put under 
                    a lot of pressure and stress and yet she has kept on going,
                    not given up and tried her best. I believe that Ntombekazi has
                    great potential and will be an asset in the workplace</p>
                    </div>
                </div>
                <div className='col'>
                    <div className='card'>
                    <p>
                    Yonela Ntsangani - Collegue
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
    fullname:'Ntombekazi Portia Sibetyu',
    dob: '1997/02/01',
    gender: 'Female',
    suburb: 'Khayelitsha, Cape Town',
    nationality: 'South African',
    criminalRec: 'No criminal record',
    school: 'COSAT : Center of Science and Technology',
    tertiary: 'BSc Biotechnology ( 2015 - 2018 ) ',
    current: 'Life Choices Academy  : Coding ( 2020 )'
}

About.propTypes = {
    fullname: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    surbub: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    criminalRec: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    tertiary: PropTypes.string.isRequired,
    current: PropTypes.string.isRequired
}

export default About;