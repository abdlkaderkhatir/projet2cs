import React from "react";
import SingleAppointment from "../SingleAppointment/SingleAppointment";
import "./styles.css";

const ScheduledAppointments = ({ appointments }) => {
  return (
    <div>
      <div className="title">Les malades d'aujourd'hui</div>
      {appointments.map((appointment) => {
       const date=new Date(appointment.startAt).toISOString().substring(0, 10);
       const  currentdate=new Date().toISOString().substring(0, 10);
        if(date !==  currentdate)  {
           
        }else{
          return (
            <SingleAppointment
              appointment={appointment}
              key={appointment.id}
            />
          );
        }
      })}
    </div>
  );
};

export default ScheduledAppointments;
