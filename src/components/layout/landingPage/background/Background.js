import React from 'react';
import PropTypes from 'prop-types';
import './Background.css';
import ReactTypingEffect from 'react-typing-effect';


const Background = ({ text }) => {
    return (
        <div className='page'>
            
        <div className='block text-center'> 
            <ReactTypingEffect
            className='typewriter h1'  speed='200' eraseDelay='150' typingDelay='150' cursor='|'
            text={text} />
            
            <h5 className='card-text card-text-center'>HTML5\ CSS | Bootstrap | JavaScript | React | Nodejs | Python | MySQL | VueJS</h5>
            </div>  

    </div>
    )
}

Background.defaultProps = {
    text: ['Aspiring Web Developer']
}
Background.propTypes = {
    text: PropTypes.array.isRequired
}


export default Background
