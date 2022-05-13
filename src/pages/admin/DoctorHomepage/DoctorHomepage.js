import React, { useEffect } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Header from "../../../components/Header/Header";
import GeneralStats from "../../../components/GeneralStats/GeneralStats";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
// import { getAppointments } from "../../../redux/actions/appointments";
// import { getPatients } from "../../../redux/actions/patients";
import ScheduledAppointments from "../../../components/ScheduledAppointments/ScheduledAppointments";
import { FaUserInjured } from "react-icons/fa";
import { GiMedicalDrip, GiMedicalPack } from "react-icons/gi";
// import { resetUser } from "../../../redux/actions/auth";
import { useNavigate } from "react-router";
import { getSidebarLinks } from "../../../commons/sidebarLinks";

const DoctorHomepage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const appointments = useSelector((state) => state.operationsReducer);

 

  const headerProps = {
    // avatarUrl: "nikolaSlika 1.jpg",
    welcomeMsg: "Dobro jutro",
    userName: "Dr. Paun",
    userTitle: "Kardiolog",
  };

  const generalStatsProps = [
    {
      image: <GiMedicalPack size="45px" />,
      text: "appoitments",
      number: "34",
    },
    {
      image: <FaUserInjured size="45px" />,
      text: "nombre patient",
      number: "10",
    },
    {
      image: <GiMedicalDrip size="45px" />,
      text: "Operation",
      number: "10",
    },
  ];

  return (
    <>
      <div className="sidebar-link-container">
        <Sidebar links={getSidebarLinks("admin", 2)} />
      </div>
      <div style={{ marginLeft: "15%" }}>
        <Header
          avatarUrl={headerProps.avatarUrl}
          welcomeMsg={headerProps.welcomeMsg}
          userName={headerProps.userName}
          userTitle={headerProps.userTitle}
          day={format(new Date(), "d")}
          date={format(new Date(), "d MMMM, yyyy")}
        />

        <div className="components">
          <GeneralStats
            image={generalStatsProps[0].image}
            text={generalStatsProps[0].text}
            number={generalStatsProps[0].number}
          />
          <GeneralStats
            image={generalStatsProps[1].image}
            text={generalStatsProps[1].text}
            number={generalStatsProps[1].number}
          />
          <GeneralStats
            image={generalStatsProps[2].image}
            text={generalStatsProps[2].text}
            number={generalStatsProps[2].number}
          />
        </div>
        {appointments.length  > 0 && (
          <ScheduledAppointments appointments={appointments} />
        )}
      </div>
    </>
  );
};

export default DoctorHomepage;
