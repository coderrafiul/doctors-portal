import React from 'react';
import { useForm } from 'react-hook-form';
import './AppointForm.css'

const AppointmentForm = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = patientDetails =>{
        patientDetails.treatment = props.appointment.treatment;
         
         fetch('http://localhost:4300/bookAppointments', {
                method: 'POST',
                body: JSON.stringify(patientDetails),
                headers: {
                "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(res=> res.json())
            .then(data=> {
            console.log(data)

            // Success
            const success = document.getElementById("successMessage");
            success.style.display= 'block';

            setTimeout(()=>{
                success.style.display= 'none'
            }, 5000)

        });

        };
    

    console.log(props.appointment)
  
  
    return (

    <div>
        <h3>{props.appointment.treatment}</h3>
       <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
   
          <select name="time" ref={register({ required: true })}>
              <option value= 'Select Time'>Select Time</option>
              <option value= '8.00 AM'>8.00 AM</option>
              <option value= '9.00 AM'>9.00 AM</option>

          </select>
          {/* <input name="time" ref={register({ required: true })} placeholder='Select Time' /> */}
          {errors.time && <span>This field is required</span>}

          <input name="name" ref={register({ required: true })} placeholder='Your Name' />
          {errors.name && <span>This field is required</span>}

          <input name="Phone number" ref={register({ required: true })} placeholder='Your Phone Number' />
          {errors.phone && <span>This field is required</span>}

          <input name="email" ref={register({ required: true })} placeholder='Your Email' />
          {errors.email && <span>This field is required</span>}

          <input name="date" ref={register({ required: true })} placeholder='dd/mm/yy' defaultValue={props.date.toLocaleDateString()} />
          {errors.date && <span>This field is required</span>}
          
          <input className="btn-submit" type="submit" />
        </form>

        <p style={{display: "none", color: "green"}} id="successMessage">Appointment booked successfully</p>
    </div>
    );
};

export default AppointmentForm;