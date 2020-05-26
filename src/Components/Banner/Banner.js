import React from 'react';
import './Banner.css'
import MaskGroup1 from '../../images/MaskGroup1.png'
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className="top-banner">
     
           <div className="container">
               <div className="row">
                   <div className="col-md-6">
                        <div className="appointment">
                            <h1>Your New Smile Starts Here</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium blanditiis eveniet accusamus nulla itaque? Cupiditate accusamus iure tempora deserunt alias optio cum enim distinctio illo!</p>
                            <br/>
                            <Link to="/appointment">
                            <button className='btn btn-primary'>GET APPOINTMENT</button>
                            </Link>
                        </div>
                   </div>
                   <div className="col-md-6 mask1">
                            <img src={MaskGroup1} alt="patient's chair"/>
                   </div>
               </div>
           </div> 
        </div>
    );
};

export default Banner;