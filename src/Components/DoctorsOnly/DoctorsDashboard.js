import React, { useState, useEffect } from 'react';
import SideBar from '../SideBar/SideBar';
import './DoctorsDashboard.css'

const DoctorsDashboard = (props) => {
   
    const patientsInfo= props.patientsInfo;

    const formattedNumber = ("0" + patientsInfo.length).slice(-2);

    let srNo= 1;

    return (
        <div>
             <div className="container-fluid">
                    <div className="row">
                        <SideBar></SideBar>
                            <div className="col-md-10">
                               <div className= 'summary d-flex justify-content-between'>
                                    <div className="card summary-card pending-app" style={{width: 18+'rem'}}>
                                        <div className="card-body d-flex justify-content-center align-items-center">
                                            <h5 className="card-title">{formattedNumber}</h5>
                                            <h6 className="card-subtitle mb-2" style={{marginLeft: 20+ 'px'}}>Pending<br/>Appointments</h6>
                                        </div>
                                    </div>

                                    <div className="card summary-card today-app" style={{width: 18+'rem'}}>
                                        <div className="card-body d-flex justify-content-center align-items-center">
                                            <h5 className="card-title">{formattedNumber}</h5>
                                            <h6 className="card-subtitle mb-2" style={{marginLeft: 20+ 'px'}}>Today's<br/>Appointments</h6>
                                        </div>
                                    </div>

                                    <div className="card summary-card total-app" style={{width: 18+'rem'}}>
                                        <div className="card-body d-flex justify-content-center align-items-center">
                                            <h5 className="card-title">{formattedNumber}</h5>
                                            <h6 className="card-subtitle mb-2" style={{marginLeft: 20+ 'px'}}>Total<br/>Appointments</h6>
                                        </div>
                                    </div>

                                    <div className="card summary-card total-pat" style={{width: 18+'rem'}}>
                                        <div className="card-body d-flex justify-content-center align-items-center">
                                            <h5 className="card-title">{formattedNumber}</h5>
                                            <h6 className="card-subtitle" style={{marginLeft: 20+ 'px'}}>Total<br/>Patients</h6>
                                        </div>
                                    </div>
                               </div>
                                <div className="doc-dashboard">

                                    <table className="table" style={{width: 95 +'%'}}>
                                        <thead>
                                            <tr>
                                                <th>Sr. No</th>
                                                <th>Date</th>
                                                <th>Time</th>
                                                <th>Name</th>
                                                <th>Contact</th>
                                                <th>Prescription</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                patientsInfo.map(info=>
                                                    <tr>
                                                        <td>{srNo++}</td>
                                                        <td>{info.date}</td>
                                                        <td>{info.time}</td>
                                                        <td>{info.name}</td>
                                                        <td>{info.PhoneNumber}</td>
                                                        <td>
                                                            <button className='btn-banner'>View</button>
                                                        </td>
                                                        <td>
                                                        <select className='btn-banner' name="action" id="">
                                                            <option value="Pending">Pending</option>
                                                            <option value="Approved">Approved</option>
                                                            <option value="Cancelled">Cancelled</option>
                                                        </select>
                                                        </td>
                                                    </tr>
                                                    )
                                            }
                                        </tbody>
                                    </table>
                                    
                                </div>
                                            
                            </div>
                    </div>
            </div>
      
            
           
        </div>
    );
};

export default DoctorsDashboard;