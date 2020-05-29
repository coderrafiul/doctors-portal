import React from 'react';
import './ServiceCard.css'
import { Link } from 'react-router-dom';

const ServiceCard = (props) => {
    const{treatment, schedule, spaces}= props.service;
    return (
        <div>
            <div className="card serviceCard" style={{width: 20+ 'rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{treatment}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{schedule}</h6>
                    <p className="card-text">{spaces} spaces available</p>
                    <Link to={'/form'}>
                    <button onClick={()=>props.handleAppointment(props.service)} className= 'btn-banner'>Book Appointment</button>
                    </Link>
                </div>
            </div>
            
        </div>
    );
};

export default ServiceCard;