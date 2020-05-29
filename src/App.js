import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Components/Banner/Banner';
import Appointment from './Components/Appointment/Appointment';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppointmentForm from './Components/AppointmentForm/AppointmentForm';
import department from './Data/OurServices';
import DoctorsAppointments from './Components/DoctorsOnly/DoctorsAppointments';
import DoctorsDashboard from './Components/DoctorsOnly/DoctorsDashboard';



function App() {

  const[card, setCard]= useState(department);
  const[date, setaDate]= useState(new Date());
  const [appointment, setAppointment]= useState(null);
  const[patientsInfo, setPatientsInfo]= useState([]);

  console.log(card)
  
  return (
    
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path='/'>
                        <Banner></Banner>
                        
                    </Route>
                    <Route path='/appointment'>
                    <Appointment setAppointment={setAppointment} card={card} date={date} setaDate={setaDate}></Appointment> 
                    </Route>
                    <Route path= '/form'>
                      <AppointmentForm appointment={appointment} card={card} date={date}></AppointmentForm>
                    </Route>
                    <Route path='/doctors/appointments'>
                      <DoctorsAppointments patientsInfo={patientsInfo} setPatientsInfo={setPatientsInfo}></DoctorsAppointments>
                    </Route>
                    <Route path='/doctors/dashboard'>
                      <DoctorsDashboard patientsInfo={patientsInfo}></DoctorsDashboard>
                    </Route>
                </Switch>
            </div>
        </Router>
   
  );
}

export default App;
