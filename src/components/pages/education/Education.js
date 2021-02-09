import React from 'react';
import './Education.css'
import certificate from './Scancertif.pdf'

const Education = () => {
    return(
        <div className='edu-container'>
            <div className="inner-container">
            <br></br>
                <h3>
                    EDUCATION
                </h3>
                <h4><strong>Other  </strong></h4>
                <h5>Life Choices Coding Academy</h5>
                <h5>Course  :  Fullstack Web Development</h5>
                <h5>Year  :  2020</h5>
                
                <h4><strong>Tertiary  </strong></h4>
                <h5>Institution : University of Western Cape</h5>
                <h5>Qualification : BSc Biotechnology</h5>
                <h5>Year  :  2018</h5>
                <p>Open Certificate PDF file 
                    <a href={certificate} target='_blank'
                            rel="noopener noreferrer">
                                <img src="https://img.icons8.com/office/30/4a90e2/pdf.png" alt="certif"/>
                     </a>.</p>
                
                <h4 ><strong>Matric </strong></h4>
                <h5>Year  :  2014</h5>
                <h5>School  : COSAT </h5>  
            </div>
        </div> 
    )

}

export default Education;