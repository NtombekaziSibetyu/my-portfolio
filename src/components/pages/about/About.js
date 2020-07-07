import React, { Fragment} from 'react';
import './About.css';
import PropTypes from 'prop-types';

 const About = (props) => {

    return (
        <div className='about-content'>
            <h1 className='header'>About Me</h1>
            <div className='row'>
                <div className='col-6 about'>
                    <img src='data:image/png;base64,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' 
                    className='round-img' alt="profile" 
                    style={{width:'150px'}}/>  
                </div>
                <div className='col-6 about'>
                    <p> Full Name: {props.fullname}</p>
                    <p> Date of birth: {props.dob}</p>
                    <p> Gender: {props.gender}</p>
                    <p> Location suburb: {props.suburb}</p>
                    <p> Nationality: {props.nationality}</p>
                    <p> {props.criminalRec}</p>
                </div> 
            </div>
             
            <h3 className='sub-header'><strong>Bio</strong></h3>
            <p >
            I am an innovative person who is always willing to learn and expand my skills and 
            knowledge. I am an ambitious individual driven by the desire to succeed and advance 
            my capabilities. Aspiring to pursue a career in web development and hopefully become 
            a full-stack developer. I am passionate about finding different and innovative solutions
            to problems.</p>
            <p >
            I was introduced to the tech space in high school in grade 10 Information technology. The
             realization that I could create programs that could work and produce results was 
             fascinating for me. I love the fact that I am able to take part and have a role in 
             producing solutions for problems using technology.
            </p>
            <Fragment>
            <h3 ><strong>Passion Board</strong></h3>
            <ul>
                <li>Reading fiction and nonfiction and history books </li>
                <li>Drawing</li>
                <li>Watching movies and series</li>
                <li>Writing</li>
            </ul>
            </Fragment>
            <Fragment>
            <h3><strong>Education</strong></h3>
            <p ><strong>MATRIC:</strong>{props.school}</p>
            <p ><strong>TERTIARY:</strong>{props.tertiary}</p>
            <p><strong>CURRENT:</strong>{props.current}</p>
            </Fragment>
            <Fragment>
            <h3 ><strong>Testimonials</strong></h3> 
            <div className='row'>
                <div className='col-6 about'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0sCAvrW1yFi0UYMgTZb113I0SwtW0dpby8Q&usqp=CAU" 
                    alt="profile" />
                    <p >Ntombekazi Sibetyu is a wise and committed individual. 
                        I have had the pleasure of working with her and found her
                         to be a really hard working individual. We were put under 
                         a lot of pressure and stress and yet she has kept on going,
                         not given up and tried her best. I believe that Ntombekazi has
                         great potential and will be an asset in the workplace.
                        Viata Fredericks - Collegeue</p>
                </div>
                <div className='col-6 about'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSoWLykLuq09-gzjxeyGGKMzP04Z6gSN085OA&usqp=CAU" 
                    alt="avatar" />
                    <p >
                        Ntombekazi is what I believe to be a hard worker, 
                        she is great to work with and is very creative with 
                        every project she comes up with. 
                        Anam Majikijela - Collegue</p>
                </div>
                <div className='col-6 about'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdwc59rVEsuR61UFzzhjA4WWDcCQWER7Uahw&usqp=CAU" 
                    alt="profile"/>
                    <p >Ntombekazi is humble, charismatic and confident.
                        Her passion and dedication for her work is truly 
                        remarkable and encouraging. It would be a great honor
                        to have her on board.
                        Yonela Ntsangani - Collegue
                    </p>
                </div>
                <div className='col-6 about'>
                    <img src="" alt="" />
                    <p></p>
                </div>
            </div>
            </Fragment>
        </div>
            
      
    )
}

About.defaultProps = {
    fullname:'Ntombekazi Sibetyu',
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