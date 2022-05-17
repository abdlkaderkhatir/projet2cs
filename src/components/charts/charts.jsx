import "./charts.css"
import React, { useEffect, useState } from 'react'
import CustomCalendar from '../../../components/CustomCalendar/CustomCalendar'
import NewAppointment from '../../../components/NewAppointment/NewAppointment'
import {getSidebarLinks } from "../../../commons/sidebarLinks";
import Sidebar from "../../../components/Sidebar/Sidebar"
import { useDispatch, useSelector } from 'react-redux';
import { createOperation } from '../../../redux/actions/operations';
import './Admin.css';
import { LineChart, Line } from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

export default function charts(){
    return(
        <div className="page-container">
       
        <Sidebar  links={getSidebarLinks("admin", 1)} />
       
      <div className='others'>
      
      const renderLineChart = (
  <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);
   
    </div>
    </div>
    )
}