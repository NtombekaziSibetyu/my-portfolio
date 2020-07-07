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
                    <img src="data:image/png;base64,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" 
                    alt="avatar" />
                    <p>
                        Ntombekazi is a polite and well behaved candidate who can be
                         a great asset to any development team. I enjoyed working with 
                         her throughout her studies at Lifechoices. Godwin Dzvapatsva 
                         (Head of Curriculum and Learning)
                    </p>
                </div>
                
                <div className='col-6 '>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSoWLykLuq09-gzjxeyGGKMzP04Z6gSN085OA&usqp=CAU" 
                    alt="avatar" />
                    <p >
                        Ntombekazi is what I believe to be a hard worker, 
                        she is great to work with and is very creative with 
                        every project she comes up with. 
                        Anam Majikijela - Collegue</p>
                </div>
                <div className='col-6 '>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdwc59rVEsuR61UFzzhjA4WWDcCQWER7Uahw&usqp=CAU" 
                    alt="profile"/>
                    <p >Ntombekazi is humble, charismatic and confident.
                        Her passion and dedication for her work is truly 
                        remarkable and encouraging. It would be a great honor
                        to have her on board.
                        Yonela Ntsangani - Collegue
                    </p>
                </div>
                <div className='col-6 '>
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