import React, { useEffect, useState } from 'react'
import CustomCalendar from '../../../components/CustomCalendar/CustomCalendar'
import NewAppointment from '../../../components/NewAppointment/NewAppointment'
import {getSidebarLinks } from "../../../commons/sidebarLinks";
import Sidebar from "../../../components/Sidebar/Sidebar"
import { useDispatch, useSelector } from 'react-redux';
import { createOperation } from '../../../redux/actions/operations';
import './Admin.css'
export default function AdminHomePage() {
  const dispatch = useDispatch();
    const [date, setDate] = useState(new Date());
    const [newAppointmentVisible, setNewAppointmentVisible] = useState(false);
    const [deleteAppointmentVisible, setDeleteAppointmentVisible] =useState(false);
    // const [selectedDoctor, setSelectedDoctor] = useState({});
    const operations = useSelector((state) => state.operationsReducer);
    console.log(operations);
    const [appointmentIdDelete, setAppointmentIdDelete] = useState(1);
    const [events, setEvents] = useState([
      // {
      //   id: 1,
      //   startAt: "2022-05-04T08:00:00.000Z",
      //   endAt: "2022-05-04T09:00:00.000Z",
      //   summary: "Prvi pregled",
      //   color: "#336cfb",
      //   calendarID: "work",
      // },
    ]);
   
  
    useEffect(() => {
      if (operations.length > 0) {
        setEvents(
          operations.map((operation) => {
            // const date = new Date(operation.datumIVremePregleda);
            return {
              id: operation.id,
              startAt: operation.startAt,
              endAt: operation.endAt,
              summary: operation.summary,
              color: "#336cfb",
              calendarID: "work",
            };
          })
        );
      }
    },[operations]);
  
    // eslint-disable-next-line no-extend-native
    Date.prototype.addHours = function (h) {
      this.setTime(this.getTime() + h * 60 * 60 * 1000);
      return this;
    };
  
   
  
    const createNewAppointment = (patientId, date, examinationType, note) => {
      const newEvent = {
        id: events.length + 1,
        startAt: date.toISOString(),
        endAt: date.addHours(1).toISOString(),
        summary: note,
        
      };
      setNewAppointmentVisible(false);
      // setEvents([...events, newEvent]);
      dispatch(
        createOperation({
          id: events.length + 1,
          startAt: date.toISOString(),
          endAt: date.addHours(1).toISOString(),
          summary:note + examinationType,
          color: "#336cfb",
          calendarID: "work",
        })
      );
    };
  
    const deleteAppointment = () => {
        setDeleteAppointmentVisible(false);
      
    };
  
  return (
    
    <div className="page-container">
       
        <Sidebar  links={getSidebarLinks("admin", 1)} />
       
      <div className='others'>
      <div className="calendar" style={{ height: "84vh", width:"80vw" }}>
        <CustomCalendar
          events={events}
          setDate={setDate}
          setNewAppointmentVisible={setNewAppointmentVisible}
          setDeleteAppointmentVisible={setDeleteAppointmentVisible}
          setAppointmentIdDelete={setAppointmentIdDelete}
        />
      </div>
      {newAppointmentVisible && 
        <NewAppointment
          // avatarUrl={"nikolaSlika 1.jpg"}
          userName={`Dr.`}
          userTitle={"Kardiolog"}
          doctorId={1}
          createNewAppointment={createNewAppointment}
          setNewAppointmentVisible={setNewAppointmentVisible}
          date={date}
          // patients={patients}
        />
      }
   
    </div>
    </div>
    
  )
}
