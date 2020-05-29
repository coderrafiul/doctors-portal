import React from 'react';
import './Banner.css'
import MaskGroup1 from '../../images/MaskGroup1.png'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';


const Banner = () => {
    return (
        <div className="top-banner" >
                <Header></Header>
           <div className="container">
                    
               <div className="row">
                   <div className="col-md-6">
                        <div className="appointment">
                            <h1>Your New Smile <br/> Starts Here</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium blanditiis eveniet accusamus nulla itaque? Cupiditate accusamus iure tempora deserunt alias optio cum enim distinctio illo!</p>
                            <br/>
                            <Link to="/appointment">
                            <button className='btn-banner'>GET APPOINTMENT</button>
                            </Link>
                        </div>
                   </div>
                   <div className="col-md-6 mask1">
                            <img id="mask1" src={MaskGroup1} alt="patient's chair"/>
                   </div>
               </div>
           </div> 
           <div className="container  d-flex justify-content-between card-banner">
           <div className="card serviceCard bannerCard1" style={{width: 22+ 'rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Opening hours</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>

            <div className="card serviceCard bannerCard2" style={{width: 22+ 'rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Visit our location</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>

            <div className="card serviceCard bannerCard3" style={{width: 22+ 'rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Contact us now</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Banner;