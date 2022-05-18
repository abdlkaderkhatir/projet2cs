import React from "react";
import SingleAppointment from "../SingleAppointment/SingleAppointment";
import "./styles.css";

const ScheduledAppointments = ({ appointments }) => {
  return (
    <div>
      <div className="title">Les operation d'aujourd'hui</div>
      {appointments.map((appointment) => {
       const date=new Date(appointment.startAt).toISOString().substring(0, 10);
       console.log(date);
       const  currentdate=new Date().toISOString().substring(0, 10);
       
        if(date !==  currentdate)  {
          
        }else{
          return (
            <SingleAppointment
              appointment={appointment}
            />
          );
        }
      })}
    </div>
  );
};

export default ScheduledAppointments;
