import React from 'react';
import ProgressBar from './ProgressBar';
import './portfolio.css';
import img from './images/website.png';
import img2 from './images/contact-keeper.png';
import img3 from './images/it-logger.png';
import img4 from './images/github.png'

const Portfolio = () => {
    
    return (
        <div className='portfolio-content' >
            <h1>SKILLS</h1>
            <ProgressBar />
            <br></br>
            <div>
              <h2>My Projects</h2>
                <div className='row'>
                    <div className='col-6'>
                        <img className='card-img' 
                        src={img2} alt='contact-keeper'>

                        </img>
                          <h4>Contact keeper app</h4>
                          <p>A React App for keeping contacts of a user. A registered 
                              user can log in and view their contacts, filter through them, 
                              add a new contact, update a contact or delete a contact. 
                          </p>
                          <p>
                          <a href="https://github.com/NtombekaziSibetyu/Contact-Keeper" 
                              className="">Github link</a>
                          </p>
                    </div>
                    <div className='col-6'>
                        <img className='card-img' 
                        src={img} alt='website'></img>
                          <h4>Company employees profile website</h4>
                          <p>A website that displays company employees profiles 
                             with an option to create a new profile
                          </p> 
                          <p><a href="https://github.com/NtombekaziSibetyu/webDesignProject"
                             className="">Github link</a>
                          </p>                     
                    </div>
                </div>
                <div className='row'>
                  <div className='col-6'>
                    <img className='card-img' 
                    src={img4}
                    alt='gith-search'></img>
                      <h4>Github searcher App</h4>
                      <p>
                         A React App that enables a user to search for the github user profile
                      </p>
                      <p><a href="" 
                      className="https://github.com/NtombekaziSibetyu/search-github-users">
                        Github link</a>   
                      </p>
                  </div>
                  <div className='col-6'>
                    <img className='card-img' 
                    src={img3} alt='it-logger'
                    ></img>
                    <h4>Technicians Log System</h4>
                        <p>
                          A React log system App for technicians that enables adding 
                          system logs, updating and deleting them.
                          You can also add or delete the technicians 
                        </p>
                        <p><a href="https://github.com/NtombekaziSibetyu/IT-Logger" className="">
                          Github link</a>
                        </p>
                  </div>
                </div>
              </div>
          </div>
  )
}



export default Portfolio;
