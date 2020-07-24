import React, { Fragment} from 'react';
import './About.css';
import PropTypes from 'prop-types';
import mypic from './mypic.JPG'
import ProgressBar from '../portfolio/ProgressBar';


 const About = (props) => {

    return (
        <div className='info-container'>
            <h1 className='header'>NTOMBEKAZI </h1>
            <div className='container'>
            <div className='row'>
                <div className='col-4 '>
                <img src={mypic}  className='round-img' alt="profile" 
                    style={{width:'250px'}}/>  
                </div>
                <div className='col-6 '>
                <h3 className='sub-header'><strong>BIO</strong></h3>
                    <p> Full Name : {props.fullname}</p>
                    <p> Date of birth : {props.dob}</p>
                    <p> Gender : {props.gender}</p>
                    <p> Location suburb : {props.suburb}</p>
                    <p> Nationality : {props.nationality}</p>
                    <p> Criminal record : {props.criminalRec}</p>
                </div> 
                    <p >
                    I am a self motivated person who is always willing to learn and expand my skills and 
                    knowledge. I am an ambitious individual driven by the desire to succeed and advance 
                    my capabilities. Aspiring to pursue a career in web development and hopefully become 
                    a web developer. I am passionate about finding different and innovative solutions
                    to problems.
                    </p>
                    <p>
                    I was introduced to the tech space in high school in grade 10 Information technology. The
                    realization that I could create programs that could work and produce results was 
                    fascinating for me. I love the fact that I am able to take part and have a role in 
                    producing solutions for problems using technology.
                    </p> 
                </div>
             
            </div>
            
            <Fragment>
            <h3 ><strong>Passion Board</strong></h3>
            <ul>
                <li>
                    

                    Reading fiction and nonfiction and history books </li>
                <li>Drawing</li>
                <li>Watching movies and series</li>
                <li>Writing</li>
            </ul>
            </Fragment>
            <ProgressBar/>
            <Fragment>
            <h3><strong>EDUCATION</strong></h3>
            <p ><strong>MATRIC : </strong>{props.school}</p>
            <p ><strong>TERTIARY : </strong>{props.tertiary}</p>
            <p><strong>CURRENT : </strong>{props.current}</p>
            </Fragment>
            <Fragment>
            <h3 ><strong>Testimonials</strong></h3> 
            <div className='col-container'>
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
                    <p>Godwin Dzvapatsva - Head of Curriculum and Learning</p>
                    <p>Ntombekazi is a polite and well behaved candidate who can be
                    a great asset to any development team. I enjoyed working with her 
                    throughout her studies at Lifechoices.
                    </p>
                    </div>
                </div>
            </div>
            <div className='row'>
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
            </Fragment>
        </div>
            
      
    )
}

About.defaultProps = {
    fullname:'Ntombekazi Portia Sibetyu',
    dob: '1997/02/01',
    gender: 'female',
    suburb: 'Khayelitsha, Cape Town',
    nationality: 'South African',
    criminalRec: 'No criminal record',
    school: 'COSAT : Center of Science and Technology',
    tertiary: 'BSc Biotechnology UWC (2015-2018) ',
    current: 'Life Choices Academy: Coding (2020)'
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