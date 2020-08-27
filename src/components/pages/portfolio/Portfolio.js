import React from 'react';
import './portfolio.css';
import img from './images/website.png';
import img2 from './images/contact-keeper.png';
import img3 from './images/it-logger.png';
import img4 from './images/github.png'
import img5 from './images/final.png'

const Portfolio = () => {
    
    return (
        <div className='portfolio-content' >
            
            <div>
              <h2>My Projects</h2>
                <div className='row'>
                    <div className='col-6'>
                      <div className='card'>
                        <h4>Contact Keeper App</h4>
                        <img className='card-img' 
                        src={img2} alt='contact-keeper'>
                        </img>
                        <p>The app lets a user login and add a contact, view contacts, update and delete contacts</p>
                        <p>
                        <a href="https://github.com/NtombekaziSibetyu/Contact-Keeper"  
                              target='_blank' >
                              GitHub  
                          </a>
                        </p>
                      </div>     
                    </div>
                    <div className='col-6'>
                      <div className='card'>
                        <h4>Company Employees Profiles website</h4>
                        <img className='card-img' 
                          src={img} alt='website'></img>
                          <p>A website that displays company employees profiles 
                             with an option to create a new profile
                          </p> 
                          <p><a href="https://github.com/NtombekaziSibetyu/webDesignProject"
                            target='_blank'>GitHub</a>
                          </p>
                      </div>                          
                    </div>
                </div>
                <div className='row'>
                  <div className='col-6'>
                    <div className='card'>
                        <h4>Github Searcher App</h4>
                        <img className='card-img' 
                        src={img4} 
                        alt='gith-search'></img>
                        <p>
                         A React App that enables a user to search for the github user
                          and get the github user by typing a name and get their profile information
                        </p>
                        <p><a href='https://github.com/NtombekaziSibetyu/search-github-users' 
                        target='_blank' >
                          GitHub</a></p>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='card'>
                      <h4> Log System App</h4>
                      <img className='card-img' 
                          src={img3} alt='it-logger'
                        ></img>
                        <p>
                          A React log system App for technicians that enables adding 
                          system logs, updating and deleting them.The App also enables adding and deleting 
                          technicians.
                          <br></br> 
                          <a href="https://github.com/NtombekaziSibetyu/IT-Logger" 
                          target='_blank' >
                          GitHub</a>
                        </p>  
                    </div>      
                  </div>
                </div>
                <div className="row">
                <div className='col'>
                    <div className='card'>
                    <h4> Booking  App</h4>
                    <img className='card-img' 
                          src={img5} alt='clinic-booker'
                        ></img>
                        <p>
                          A React booking App for booking clinic visits,
                          lets a user register and login to book the date and time,
                          The user can also cancel an appointment
                        </p>
                        <p>
                        <a href="https://rocky-beyond-49433.herokuapp.com/"
                         target='_blank' >
                          Link</a>
                        </p>
                    </div>
                  </div>
                </div>
              </div>
              
          </div>
  )
}



export default Portfolio;
