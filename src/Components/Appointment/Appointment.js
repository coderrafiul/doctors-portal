import React from 'react';
import MaskGroup1 from '../../images/MaskGroup1.png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Appointment.css'
import ServiceCard from '../ServiceCard/ServiceCard';
import Header from '../Header/Header';


const Appointment = (props) => {

    const setAppointment= props.setAppointment;

    const handleAppointment= (service)=>{
        setAppointment(service)
    }

    const card= props.card

  

  const date= props.date;
  const setaDate= props.setaDate;
  
  const  onChange = date =>{
      setaDate(date)
  };

    
    return (
        <div className='top-banner'>
                <Header></Header>
           <div className="container">
               <div className="row">
                   <div className="col-md-6">
                        <div className="appointment">
                            <h3>APPOINTMENT</h3>
                            <div>
                              <Calendar  onChange={onChange} value={date}/>
                            </div>
                        </div>
                   </div>
                   <div className="col-md-6">
                            <img id="mask1" src={MaskGroup1} alt="patient's chair"/>
                   </div>
               </div>

           </div> 
           <div>
               {console.log(date)}
               <div className="date">
               <h3>Available appointments on-  {date.toDateString()}</h3>
               </div>
               <div className="container">
                   <div className="row d-flex justify-content-between">
                    {
                        card.map(service=> <ServiceCard key={service.id} handleAppointment={handleAppointment} service={service}></ServiceCard>)
                    }
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Appointment;