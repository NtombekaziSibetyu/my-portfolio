import React from 'react';
import './Education.css'
import certificate from './Scancertif.pdf'

const Education = () => {
    
    return(
       <section className="">
           <div className="edu-container">
                <div className="edu-header text-center">
                <h3 >
                        EDUCATION
                </h3>
                </div>
                <p className="line" />
           <div class="timeline">
          
            <ul>
                <li>
                    <div class='time'>
                        <span>Aug 2020</span>
                    </div>
                    <div class="content">
                    <h3> <strong>Fullstack Web Development</strong></h3>
                    <h5>Life Choices Coding Academy</h5>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    
                    </div>
                </li>
                <li>
                    <div class='time'>
                        <span>Apr 2019</span>
                    </div>
                    <div class="content">
                    <h3> <strong>BSc Biotechnology</strong></h3>
                    <h5> University of Western Cape</h5>
                
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
                    <div class='time'>
                        <span>Dec 2014</span>
                    </div>
                    <div class="content">
                    <h3><strong>Matric</strong></h3>
                    <h5> COSAT (Center Of Science And Technology)</h5>  
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    </div>
                </li>
                
            </ul>
           </div>
           </div>
            
    {/* previous */}
             {/* <div className='edu-container'>
            <div className="inner-container">
            <br></br>
                <h3>
                    EDUCATION
                </h3>
                <div>
                    <h4>2020  </h4>
                    <h5> <strong>Fullstack Web Development</strong></h5>
                    <h5>Life Choices Coding Academy</h5>
                    <p></p>
                </div>
                <div>
                    <h4>2018</h4>
                    <h5> <strong>BSc Biotechnology</strong></h5>
                    <h5> University of Western Cape</h5>
                
                    <p>View Certificate PDF 
                        <a href={certificate} target='_blank'
                                rel="noopener noreferrer">
                                    <img src="https://img.icons8.com/office/30/4a90e2/pdf.png" alt="certif"/>
                        </a>.
                    </p>
                </div>
                <div>
                    <h4 >2014</h4>
                    <h5><strong>Matric</strong></h5>
                    <h5> COSAT (Center Of Science And Technology)</h5>  
                </div>

            </div>
        </div>   */}
        </section>
    )

}

export default Education;