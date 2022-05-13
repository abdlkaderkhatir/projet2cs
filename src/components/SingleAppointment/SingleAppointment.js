import "./styles.css";
import { format } from "date-fns";
// import { updateAppointment } from "../../redux/actions/appointments";
import { useDispatch } from "react-redux";


const SingleAppointment = ({ appointment }) => {
  const dispatch = useDispatch();
  const { startAt, summary, id } = appointment;

  let age = format(new Date(), "yyyy") - format(2000, "yyyy");
  let appointTime = format(new Date(startAt), "HH:mm");
  let appointDate = format(new Date(startAt), "dd:MM:yyyy");


 

  return (
    <div
      key={id}
    >
      <div className="d-flex flex-row align-items-center ">
        <div className="appTime">
          {appointTime} {appointDate}
        </div>
        <div className="customContainer">
          <div className="d-flex flex-row justify-content-around appointment">
            <span className="text-dark text1">
              khatir
        
            </span>
            <span className="text2">
              Starost: 22
              
               , Pol: Homme
             
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAppointment;
