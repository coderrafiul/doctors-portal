import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="header">
            <nav>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Dental Services</a>
                <a href="">Review</a>
                <a href="">Blog</a>
                <a href="">Contact</a>
            </nav>
        </div>
           <div className="container">
               <div className="row">
                   <div className="col-md-8">
                        <div className="appointment">
                            <h1>Your New Smile Starts Here</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium blanditiis eveniet accusamus nulla itaque? Cupiditate accusamus iure tempora deserunt alias optio cum enim distinctio illo!</p>
                            <br/>
                            <button className='btn btn-primary'>GET APPOINTMENT</button>
                        </div>
                   </div>
                   <div className="col-md-4">

                   </div>
               </div>
           </div> 
        </div>
    );
};

export default Banner;