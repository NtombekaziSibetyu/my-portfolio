import React from 'react'
import './ProgressBar.css'

class ProgressBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        progress:{
            html: '90',
            css: '70',
            bootstrap: '60',
            python:'80',
            mysql:'90',
            js:'60',
            react:'50'
        }
      };
    }
     
      render() {
        const progress = {
          width: this.state.progress + "%"
        }
        return (
        <div className='skill-bar'>
            <div className='row'>
                <div className='col-6'>
                    <h5>HTML</h5>
                    <div className="progress">
                    <div className="progress-bar" role="progressbar" 
                    style={{ width: `${this.state.progress.html}%`}} aria-valuenow={progress.css} aria-valuemin="0" 
                    aria-valuemax="100">{ this.state.progress.html + "%" }</div>
                    </div>
                </div>
                <div className='col-6'>
                    <h5>CSS</h5>
                    <div className="progress">
                    <div className="progress-bar" role="progressbar" 
                    style={{ width: `${this.state.progress.css}%`}} aria-valuenow={progress.css} aria-valuemin="0" 
                    aria-valuemax="100">{ this.state.progress.css + "%" }</div>
                    </div>
                </div>
                <div className='col-6'>
                    <h5>Bootstrap</h5>
                    <div className="progress">
                    <div className="progress-bar" role="progressbar" 
                    style={{ width: `${this.state.progress.bootstrap}%`}} aria-valuenow={progress.bootstrap} aria-valuemin="0" 
                    aria-valuemax="100">{ this.state.progress.bootstrap + "%" }</div>
                    </div>
                </div>

                <div className='col-6'>
                    <h5>Python</h5>
                    <div className="progress">
                    <div className="progress-bar" role="progressbar" 
                    style={{ width: `${this.state.progress.python}%`}} aria-valuenow={progress.python} aria-valuemin="0" 
                    aria-valuemax="100">{ this.state.progress.python + "%" }</div>
                    </div>
                </div>
                <div className='col-6'>
                    <h5>MySQL</h5>
                    <div className="progress">
                    <div className="progress-bar" role="progressbar" 
                    style={{ width: `${this.state.progress.mysql}%`}} aria-valuenow={progress.mysql} aria-valuemin="0" 
                    aria-valuemax="100">{ this.state.progress.mysql + "%" }</div>
                    </div>
                </div>
                <div className='col-6'>
                    <h5>JavaScript</h5>
                    <div className="progress">
                    <div className="progress-bar" role="progressbar" 
                    style={{ width: `${this.state.progress.js}%`}} aria-valuenow={progress.js} aria-valuemin="0" 
                    aria-valuemax="100">{ this.state.progress.js + "%" }</div>
                    </div>
                </div>
                <div className='col-6'>
                    <h>React</h>
                    <div className="progress">
                    <div className="progress-bar" role="progressbar" 
                    style={{ width: `${this.state.progress.react}%`}} aria-valuenow={progress.react} aria-valuemin="0" 
                    aria-valuemax="100">{ this.state.progress.react + "%" }</div>
                    </div>
                </div>
            </div>
        </div>
          )
        }
      }

export default ProgressBar;
      