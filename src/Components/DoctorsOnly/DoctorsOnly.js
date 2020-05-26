import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useParams } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';

const DoctorsOnly = () => {
    const[date, setaDate]= useState(new Date());
    const[patientsInfo, setPatientsInfo]= useState([]);
    const[currentAppointments, setCurrentAppointments]= useState(null)
    const  onChange = date =>{
        setaDate(date)
    };

    useEffect(()=>{
        fetch('http://localhost:4300/appointments')
        .then(res=> res.json())
        .then(data=>{
            setPatientsInfo(data)
        })
    },[]);

    const selectedDate= date.toLocaleDateString();


    const selectedDateAppointments= patientsInfo.filter(info=> info.date === selectedDate)

 
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                   <SideBar></SideBar>
                    <div className="col-md-10">
                    <h3>Appointments</h3>
                        <div className="row">
                        
                            <div className="col-md-5">
                                <div>
                                <Calendar  onChange={onChange} value={date}/>
                                
                                </div>
                            </div>
                            <div className="col-md-5">
                            <div className="card" style={{width: 95+'%'}}>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                    <h6 className="card-title">Appointments</h6>
                                    <h6>{date.toDateString()}</h6>
                                    </div>
                                    <table style={{width: 100 +'%'}}>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Schedule</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                        {selectedDateAppointments.map(info=>

                                                <tr>
                                                <td>{info.name}</td>
                                                <td>{info.time}</td>
                                                <td>
                                                    <select name="action" id="">
                                                        <option value="not-visited">Not visited</option>
                                                        <option value="visited">Visited</option>
                                                    </select>
                                                </td>
                                                </tr>

                                                )}

                                        </tbody>
                                        
                                    </table>
                                    
                                </div>
                                </div>
                                
                            </div>
                        </div>
            
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorsOnly;