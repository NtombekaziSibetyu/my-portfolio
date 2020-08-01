import React, { Fragment} from 'react';
import './About.css';
import PropTypes from 'prop-types';
import mypic from './mypic.JPG'
import ProgressBar from '../portfolio/ProgressBar';
import Passion from './Passion';


 const About = (props) => {

    return (
        <div className='info-container'>
            <div className='container'>
                <h1 className='header'>HI <i className='fas fa-smile' style={{color:'#ffd740'}}/>  I'M NTOMBEKAZI 
                </h1>
            <div className='row'>
                <div className='col-4 '>
                <img src={mypic}  className='round-img' alt="profile" 
                    style={{width:'250px'},{height:'280px'}}/>  
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
                  
            </div>
            <p></p>
                <h3><strong>About me</strong></h3>
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
                     coding and I can achieve a lot with it hence I decided to pursue a career in web development.
                    </p> 
                <h3 ><i className='fas fa-heart fa-2x' style={{color:'#f44336'}}/>
                        <strong>PASSION BOARD</strong></h3>
                    <div className='row'>
                        <div className='col'>
                        <img className='image' src='https://indianfolk.com/wp-content/uploads/2018/10/Movie.jpg'>
                         </img>            
                        <div className='text'>Movies, Documentaries, Series</div>
                        </div>
                        <div className='col'>
                        <img className='image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQa3IK-t-aRWLIDs3fh3JdL7CUJqmT64av8mA&usqp=CAU'>
                         </img>            
                        <div className='text'>Books</div>
                        </div>
                        <div className='col'>
                        <img className='image' src='data:image/jpeg;base64,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'>
                         </img>            
                        <div className='text'>Coding</div>
                        </div>
                        <div className='col'>
                        <img className='image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2IApFL7-xLEKg6U0heKi8eE3wqpWC-8MEYw&usqp=CAU' ></img>           
                        <div className='text'>Music</div>
                        </div>
                    </div>
            </div>
            <div className='container'>
            
            <ProgressBar/>
            <br></br>
            <h3><i className="fas fa-graduation-cap fa-2x" style={{color:'#1a237e'}}></i>
                <strong>EDUCATION </strong></h3>
            <h4 ><strong>Matric </strong></h4>
            <p>Year  :  2014</p>
            <p>School  : {props.school}</p>
            <h4><strong>Tertiary  </strong></h4>
            <p>Institution : University of Western Cape</p>
            <p>Qualification : {props.tertiary}</p>
            <h4><strong>Current  </strong></h4>
            <p>{props.current}</p>
            <h4>
            <i class="fas fa-briefcase fa-2x" style={{color:'#00897b '}} ></i>
            <strong> WORK EXPERIENCE </strong></h4>
            <p>I do not have any work experience</p>
               
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
    dob: '1997 / 02 / 01',
    gender: 'Female',
    suburb: 'Khayelitsha, Cape Town',
    nationality: 'South African',
    criminalRec: 'No criminal record',
    school: ' COSAT -  Center of Science and Technology',
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