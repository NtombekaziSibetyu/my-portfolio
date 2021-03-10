import React from 'react';
import './Education.css'
import certificate from './Scancertif.pdf'

const Education = () => {
    
    return(
       <section className="">
           <div className="edu-container">
                <div className="edu-header text-center">
                <h1 >
                        EDUCATION
                </h1>
                </div>
                <p className="line" />
           <div className="timeline">
          
            <ul>
                <li>
                    <div className='time'>
                        <span>Aug 2020</span>
                    </div>
                    <div className="content">
                    <h3> <strong>Fullstack Web Development</strong></h3>
                    <h4>Life Choices Coding Academy</h4>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    
                    </div>
                </li>
                <li>
                    <div className='time'>
                        <span>Apr 2019</span>
                    </div>
                    <div className="content">
                    <h3> <strong>BSc Biotechnology</strong></h3>
                    <h4> University of Western Cape</h4>
                
                    <p>View Certificate PDF 
                        <a href={certificate} target='_blank'
                                rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/office/30/4a90e2/pdf.png" alt="certif"/>
                        </a>.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                   
                    </div>
                </li>
                <li>
                    <div className='time'>
                        <span>Dec 2014</span>
                    </div>
                    <div className="content">
                    <h3><strong>Matric</strong></h3>
                    <h4> COSAT (Center Of Science And Technology)</h4>  
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    </div>
                </li>
            </ul>
           </div>
           </div>
            
    
        </section>
    )
}

export default Education;