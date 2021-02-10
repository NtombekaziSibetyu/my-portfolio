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
                <h4>2020  </h4>
                <h5> <strong>Fullstack Web Development</strong></h5>
                <h5>Life Choices Coding Academy</h5>
                <p></p>
                <h4>2018</h4>
                <h5> <strong>BSc Biotechnology</strong></h5>
                <h5> University of Western Cape</h5>
               
                <p>View Certificate PDF 
                    <a href={certificate} target='_blank'
                            rel="noopener noreferrer">
                                <img src="https://img.icons8.com/office/30/4a90e2/pdf.png" alt="certif"/>
                     </a>.</p>
                
                <h4 >2014</h4>
                <h5><strong>Matric</strong></h5>
                <h5> COSAT (Center Of Science And Technology)</h5>  
            </div>
        </div> 
    )

}

export default Education;