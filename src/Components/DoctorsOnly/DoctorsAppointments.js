import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './DoctorsAppointments.css'
import SideBar from '../SideBar/SideBar';


const DoctorsAppointments = (props) => {
    const[date, setaDate]= useState(new Date());
    // const[patientsInfo, setPatientsInfo]= useState([]);
    const  onChange = date =>{
        setaDate(date)
    };

    const patientsInfo= props.patientsInfo;
    const setPatientsInfo= props.setPatientsInfo;

    useEffect(()=>{
        fetch('https://glacial-headland-23319.herokuapp.com/appointments')
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
                       
                        <div className="doc-appointment">
                            <h3>Appointments</h3>
                            <div className="row doc-appointment">

                                <div className="col-md-5 calendar">
                                    
                                    <Calendar  onChange={onChange} value={date}/>
                                    
                                </div>
                                <div className="col-md-5 app-table">
                                <div className="card table" style={{width: 100+'%'}}>
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
                                                        <select className='btn-banner' name="action" id="">
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
        </div>
    );
};

export default DoctorsAppointments;