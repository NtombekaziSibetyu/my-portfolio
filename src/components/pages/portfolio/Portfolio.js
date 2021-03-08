import React from 'react';
import './portfolio.css';
import img from './images/website.png';
import img2 from './images/contact-keeper.png';
import img3 from './images/it-logger.png';
import img4 from './images/github.png'
import img5 from './images/vue-contact-keeper.png'
import img6 from './images/weather.png'


const Portfolio = () => {
    return (
        <section>
          <div className='portfolio-content' id="portfolio" >
            
            <div>
              <div className="text-center">
              <h3><strong>MY PROJECTS</strong></h3>
              <p className="separator" />
              </div>
                <div className="cards">
                  <div className="card-container">
                    <div className='card'>
                      <div className="front">
                        < a href='https://nameless-shore-47202.herokuapp.com/' target='_blank' rel="noopener noreferrer">   
                        <img className='project-img' 
                        src={img2} alt='contact-keeper'>
                        </img>
                        </a>
                      </div>
                      <div className="back">
                        <h4>Contact Keeper App</h4>

                        <p>The app lets a user login and add a contact, view contacts, update contacts and delete contacts

                        </p>
                        <div><img src="https://img.icons8.com/ios-filled/20/000000/update-tag.png" alt="tag"/> React | JavaScript | Nodejs | MongoDB
                        </div>
                        <p><a className="link" href="https://github.com/NtombekaziSibetyu/Contact-Keeper"  
                              target='_blank' rel="noopener noreferrer" >
                                <i className="fab fa-github" aria-hidden="true"></i>
                          </a> |   
                          <a className="link" href="https://nameless-shore-47202.herokuapp.com/"  
                              target='_blank' rel="noopener noreferrer" >
                              Live Link <i className="fas fa-external-link-alt" />
                          </a></p>
                      </div>
                    </div> 
                  </div>
                  
                  <div className="card-container">
                    <div className='card'>
                      <div className="front">
                        <a href="https://contact-keeper-27934.web.app/"
                            target='_blank'  rel="noopener noreferrer">
                          <img className='project-img' 
                              src={img5} alt='vue contact keeper'
                            ></img>    
                        </a>
                      </div>
                      <div className="back">
                      <h4> Vue Web  App</h4>
                        <p>
                          A vue web App for keeping contacts. User can save, edit and delete contact
                        </p>
                        <div><img src="https://img.icons8.com/ios-filled/20/000000/update-tag.png" alt="tag"/> Vue | Vuetify | CSS | Firebase </div>
                        <p>
                        <a className="link" href='https://github.com/NtombekaziSibetyu/vue-contactKeeper' 
                        target='_blank' rel="noopener noreferrer">
                         <i className="fab fa-github" aria-hidden="true"></i></a> |
                         <a className="link" href='https://contact-keeper-27934.web.app/' 
                        target='_blank' rel="noopener noreferrer">Live Link <i className="fas fa-external-link-alt" /> </a>
                        </p>
                        
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-container">
                    <div className="card">
                      <div className="front">
                        <a href="https://ntombekazi-weather-widget.netlify.app/"
                              target='_blank' rel="noopener noreferrer">
                          <img className='project-img' 
                                src={img6} alt='weather widget' 
                          ></img>       
                        </a>
                      </div>
                      <div className="back">
                        <h4> Weather Widget</h4>
                        <p>
                          A weather widget that shows the weather forecast at you current location for the
                          current day and for thr next five days
                        </p>
                        <div><img src="https://img.icons8.com/ios-filled/20/000000/update-tag.png" alt="tag"/> HTML | JavaScript | CSS3</div>
                        <p>
                        <a className="link" href='https://github.com/NtombekaziSibetyu/weather-widget'
                        target='_blank' rel="noopener noreferrer">
                          <i className="fab fa-github" aria-hidden="true"></i>
                          </a> | 
                        <a className="link" href='https://ntombekazi-weather-widget.netlify.app/'
                        target='_blank' rel="noopener noreferrer">Live Link <i className="fas fa-external-link-alt" /></a>
                        </p>
                      </div>
                    </div>
                  </div>
                 
                  <div className="card-container">
                    <div className='card'>
                      <div className="front">
                        <a href='https://awesome-kilby-c8de8a.netlify.app' target='_blank' rel="noopener noreferrer">
                        <img className='project-img' 
                        src={img4} 
                        alt='gith-search'></img>
                        </a>
                      </div>
                      <div className="back">
                      <h4>Github Searcher App</h4>
                      <p>
                          A React App that enables a user to search for the github user
                          by typing a user name and in return get the profile information of the user 
                        </p>
                        <div><img src="https://img.icons8.com/ios-filled/20/000000/update-tag.png" alt="tag"/> React | JavaScript | Nodejs</div>
                        <p>
                          <a className="link" href='https://github.com/NtombekaziSibetyu/search-github-users' 
                        target='_blank' rel="noopener noreferrer">
                         <i className="fab fa-github" aria-hidden="true"></i>
                         </a>  |  <a className="link" href='https://react-github-user-finder.netlify.app/' 
                        target='_blank' rel="noopener noreferrer">
                         Live Link</a><i className="fas fa-external-link-alt" /></p> 
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-container">
                    <div className='card'>
                      <div className="front">
                        <a href="https://laughing-bardeen-23629b.netlify.app" 
                            target='_blank' rel="noopener noreferrer" >
                          <img className='project-img' 
                            src={img3} alt='it-logger'></img>  </a>
                      </div>
                      <div className="back">
                      <h4> Log System App</h4>
                        <p>
                            A React log system App for technicians that enables adding 
                            system logs, updating and deleting them.The App also enables adding and deleting 
                            technicians.

                            <div><img src="https://img.icons8.com/ios-filled/20/000000/update-tag.png" alt="tag"/> React | Materialize | CSS | Javascipt | Node</div>
                            <br></br> 
                            <a className="link" href='https://github.com/NtombekaziSibetyu/IT-Logger'
                            target='_blank'
                            rel="noopener noreferrer">
                              <i className="fab fa-github" aria-hidden="true"></i>
                              </a> | 
                            <a className="link" href='https://youthful-perlman-f9f594.netlify.app'
                            target='_blank'
                            rel="noopener noreferrer">Live Link <i className="fas fa-external-link-alt" /></a>
                          </p>  
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-container">
                    <div className='card'>
                      <div className="front">
                        <a href="https://github.com/NtombekaziSibetyu/webDesignProject"  target='_blank' rel="noopener noreferrer">
                        <img className='project-img' 
                          src={img} alt='website'></img>
                        </a>
                       
                      </div>
                      <div className="back">
                        <h4>Company Employees Profiles website</h4>

                        <p>A website that displays company employees profiles  and an about page </p> 
                        <div><img src="https://img.icons8.com/ios-filled/20/000000/update-tag.png" alt="tag"/> HTML | CSS | BOOTSTRAP</div>
                          <p><a className="link" href="https://github.com/NtombekaziSibetyu/webDesignProject"
                            target='_blank' rel="noopener noreferrer">
                              <i className="fab fa-github" aria-hidden="true"></i></a>   |
                              <a className="link" href="https://first-web-dev-project.netlify.app"
                            target='_blank' rel="noopener noreferrer">Live Link <i className="fas fa-external-link-alt" /></a>
                          </p>
                         
                      </div>
                    </div>
                  </div>
                  
                </div>
                
              </div>
          </div>
        </section>
  )
}



export default Portfolio;
