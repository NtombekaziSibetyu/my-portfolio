import React from 'react'
import './testimonial.css'

const Testimonial = () => {
    
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxv4bEu759dFKdLiPabEv52dyJQfytMjlWVA&usqp=CAU" alt="First slide"/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>.SLIDE.</h5>
                    <p>slide1</p>
                </div>
            </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5rEgBKfOgkdhsjqnWOBi3FXzOYZup7T5_2g&usqp=CAU" alt="Second slide"/>
      <div class="carousel-caption d-none d-md-block">
            <h5>.SLIDE.</h5>
            <p>slide1</p>
        </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTje4ywow4VPhN3DcP4LSW4GvmUg-T1WJJog&usqp=CAU" alt="Third slide"/>
        <div class="carousel-caption d-none d-md-block">
            <h5>..SLIDE.</h5>
            <p>slide1</p>
        </div>
    </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
    </div>
    )
              
    
}

export default Testimonial;