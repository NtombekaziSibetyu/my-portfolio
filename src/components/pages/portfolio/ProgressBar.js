import React from 'react'
import './ProgressBar.css'

const ProgressBar = () => {
  return (
    <section>
      <div className="container-cards" id="skills">
        <div className="skill-text-center">
          <h3> <strong>COMPETENCIES</strong></h3>
          <p className="separator" />
          <h5>Following are the skills I have acquired since starting my journey in web development.</h5>
        </div>
        <div className="skill-cards">
          <div className="card-skill" >
              <div className="skill-icon">
               <img src="https://img.icons8.com/windows/100/26e07f/nodejs.png" alt="node"/> 
              </div>
              <p>NodeJS</p>
          </div>
          <div className="card-skill" >
               <div className="skill-icon" >
                <img src="https://img.icons8.com/plasticine/100/26e07f/react.png" alt="react"/>
               </div>
              <p>React</p>
          </div>

          <div className="card-skill" >
                <div className="skill-icon">
                  <img src="https://img.icons8.com/color/100/000000/python.png" alt="python"/> 
                </div>
                <p>Python</p>
          </div>
          <div  className="card-skill" >
              <div className="skill-icon">
                <img src="https://img.icons8.com/windows/100/26e07f/vuejs.png" alt="vue"/>
              </div>
              <p>Vue.js</p>
          </div>
          <div className="card-skill" >
            <div className="skill-icon">
              <img src="https://img.icons8.com/color/100/000000/mongodb.png" alt="mongodb"/>
            </div>
              <p>MongoDB</p>
          </div>
          <div className="card-skill" >
            <div className="skill-icon"> 
              <img src="https://img.icons8.com/ios-filled/100/000000/mysql.png" alt="sql"/>
            </div>
              <p>MySQL</p>
          </div>
            <div className="card-skill" >
                <div className="skill-icon">
                  <img src="https://img.icons8.com/color/100/000000/bootstrap.png" alt="bootsrap"/>
                </div>
                <p>Bootstrap</p> 
            </div>
            <div className="card-skill" >
              <div className="skill-icon">
                <img src="https://img.icons8.com/color/100/000000/firebase.png"alt="firebase"/>              
              </div>
                <p>Firebase</p>
            </div>
            <div className="card-skill" >
              <div className="skill-icon">
                <img src="https://img.icons8.com/color/100/000000/html-5.png" alt="html"/>
              </div> 
              <p>HTML</p>
          </div>
          <div  className="card-skill" >
              <div className="skill-icon">
                <img src="https://img.icons8.com/fluent/100/26e07f/github.png" alt="git"/>
              </div>
              <p>GIT</p>
          </div>

          <div className="card-skill" >
            <div className="skill-icon">
              <img src="https://img.icons8.com/color/100/000000/css3.png" alt="css"/>
            </div>
              <p>CSS</p>
          </div>

          <div className="card-skill">
              <div className="skill-icon" >
                <img src="https://img.icons8.com/color/100/000000/javascript.png" alt="js"/>
              </div>
              <p>JavaScript</p>
          </div>

        </div>
          
      </div>
    </section>
  )
}
export default ProgressBar;
      