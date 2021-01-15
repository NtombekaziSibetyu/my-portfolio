import React from 'react';
import './portfolio.css';
import img from './images/website.png';
import img2 from './images/contact-keeper.png';
import img3 from './images/it-logger.png';
import img4 from './images/github.png'
import img5 from './images/final.png'
import img6 from './images/weather.png'

const Portfolio = () => {
    
    return (
        <div className='portfolio-content' >
            
            <div>
              <h2>My Projects</h2>
                <div className="cards">
                  <div className='card'>
                    <h4>Contact Keeper App</h4>
                    < a href='' target='_blank' rel="noopener noreferrer">   
                    <img className='project-img' 
                    src={img2} alt='contact-keeper'>
                    </img>
                    </a>
                    
                    <p>The app lets a user login and add a contact, view contacts, update contacts and delete contacts</p>
                    <p>
                    <a href="https://github.com/NtombekaziSibetyu/Contact-Keeper"  
                          target='_blank' rel="noopener noreferrer" >
                          GitHub  
                      </a>
                    </p>
                  </div> 
                  
                  <div className='card'>
                    <h4>Company Employees Profiles website</h4>
                    <img className='project-img' 
                      src={img} alt='website'></img>
                      <p>A website that displays company employees profiles 
                        
                      </p> 
                      <p><a href="https://github.com/NtombekaziSibetyu/webDesignProject"
                        target='_blank' rel="noopener noreferrer">GitHub</a>
                      </p>
                  </div>

                  <div className='card'>
                    <h4>Github Searcher App</h4>
                    <a href='' target='_blank' rel="noopener noreferrer">
                    <img className='project-img' 
                    src={img4} 
                    alt='gith-search'></img>
                    </a>
                    
                    <p>
                      A React App that enables a user to search for the github user
                      by typing a user name and in return get the profile information of the user 
                    </p>
                    <p><a href='https://github.com/NtombekaziSibetyu/search-github-users' 
                    target='_blank' rel="noopener noreferrer">
                      GitHub</a></p>
                  </div>

                  <div className='card'>
                    <h4> Log System App</h4>
                    <a href="https://gracious-visvesvaraya-f4d7f5.netlify.app" 
                        target='_blank' rel="noopener noreferrer" >
                      <img className='project-img' 
                        src={img3} alt='it-logger'></img>  </a>
                    
                      <p>
                        A React log system App for technicians that enables adding 
                        system logs, updating and deleting them.The App also enables adding and deleting 
                        technicians.
                        <br></br> 
                        <a href='https://github.com/NtombekaziSibetyu/IT-Logger'
                         target='_blank'
                         rel="noopener noreferrer">GitHub</a>
                      </p>  
                  </div>

                  <div className='card'>
                    <h4> Booking  App</h4>
                    <a href="https://rocky-beyond-49433.herokuapp.com/"
                         target='_blank'  rel="noopener noreferrer">
                      <img className='project-img' 
                          src={img5} alt='clinic-booker'
                        ></img>    
                    </a>
                    
                    <p>
                      A React booking App for booking clinic visits,
                      lets a user register and login to book the date and time,
                      The user can also cancel an appointment
                    </p>
                    <p>
                    <a href='https://github.com/NtombekaziSibetyu/final-project' 
                    target='_blank' rel="noopener noreferrer">GitHub</a>
                    </p>
                  </div>
                  
                  <div className="card">
                    <h4> Weather Widget</h4>
                    <a href="https://ntombekazi-weather-widget.netlify.app/"
                          target='_blank' rel="noopener noreferrer">
                      <img className='project-img' 
                            src={img6} alt='weather widget' 
                            href='https://ntombekazi-weather-widget.netlify.app/'
                      ></img>       
                    </a>
                  
                    <p>
                      A weather widget that shows the weather forecast at you current location for the
                      current day and for thr next five days
                    </p>
                    <p>
                    <a href='https://github.com/NtombekaziSibetyu/weather-widget'
                     target='_blank' rel="noopener noreferrer">GitHub</a>
                    </p>
                  </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                          
                    </div>
                    <div className='col-6'>
                                                
                    </div>
                </div>
                <div className='row'>
                  <div className='col-6'>
                    
                  </div>
                  <div className='col-6'>
                        
                  </div>
                </div>
                <div className="row">
                  <div className='col-6'>
                    
                  </div>
                  <div className="col-6">
                  
                </div>
                </div>
                
              </div>
              
          </div>
  )
}



export default Portfolio;
