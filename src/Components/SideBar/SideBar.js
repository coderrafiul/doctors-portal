import React from 'react';
import './SideBar.css'
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className='list-unstyled'>
                <Link to='/doctors/dashboard'>
                    <li>Dashboard</li>
                </Link>
                <Link to='/doctors/appointments'>
                    <li>Appointment</li>
                </Link>
                <Link to='/doctors/dashboard'>
                    <li>Patients</li>
                </Link>
                <Link to='/doctors/dashboard'>
                    <li>Description</li>
                </Link>
                <Link to='/doctors/dashboard'>
                    <li>Settings</li>
                </Link>

            </ul>

            <a href="/">Log out</a>
        </div>    
    
    )};

export default SideBar;