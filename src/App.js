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
import department from './Data/OurServices'
import Header from './Components/Header/Header';
import DoctorsOnly from './Components/DoctorsOnly/DoctorsOnly';



function App() {

  const[card, setCard]= useState(department);
  const[date, setaDate]= useState(new Date());
  const [appointment, setAppointment]= useState(null);

  console.log(card)
  
  return (
    
        <Router>
            <div className="App">
              <Header></Header>
            
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
                    <Route path='/doctors'>
                      <DoctorsOnly></DoctorsOnly>
                    </Route>
                </Switch>
            </div>
        </Router>
   
  );
}

export default App;
