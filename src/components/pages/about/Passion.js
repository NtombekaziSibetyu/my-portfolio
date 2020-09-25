import React from 'react';
import './passion.css'

const Passion = () => {
    
    const showSlides = () => {
        let slideIndex = 0;
        
        const slides = document.getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
          slides[i].style = {display : 'none'};
          slideIndex++;
          if (slideIndex > slides.length) {slideIndex = 1}
         slides[slideIndex-1].style = {display :"block"};
        }
        
      }
      setTimeout(showSlides, 2000);
    return (
        <div className='' >
        <div className="slideshow-container">
          <div className='mySlides fade'>
              <img src='https://indianfolk.com/wp-content/uploads/2018/10/Movie.jpg'>
                  </img>            
              <div className='text'>caption1</div>
          </div>
          <div className='mySlides fade'>
              <img src='https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'/>
              <div className='text'>caption1</div>
          </div>
          <div className='mySlides fade'>
              <img src='https://images.unsplash.com/photo-1562232573-0305012a8818?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'/>
              <div className='text'>caption1</div>
          </div>
        </div>
        <br></br>
        ​<div style={{ textAlign : 'center'}}>
            <span class="dot"></span> 
            <span class="dot"></span> 
            <span class="dot"></span> 
        </div>
    </div>
    )
}

export default Passion;
