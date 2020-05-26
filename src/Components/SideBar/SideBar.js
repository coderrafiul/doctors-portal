import React from 'react';
import './SideBar.css'

const SideBar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className='list-unstyled'>
                <li>Dashboard</li>
                <li>Appointment</li>
                <li>Patient</li>
                <li>Description</li>
                <li>Settings</li>
            </ul>
        </div>    
    
    )};

export default SideBar;