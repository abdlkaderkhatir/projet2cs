import "./styles.css";
import { format } from "date-fns";
// import { updateAppointment } from "../../redux/actions/appointments";
import { useDispatch } from "react-redux";



const SingleAppointment = ({ appointment }) => {
  const dispatch = useDispatch();
  console.log(appointment);
  const {id,startAt,patientId, date,salle,operationType,doctors,Anistisistes,cordinateur} = appointment;

  let age = format(new Date(), "yyyy") - format(2000, "yyyy");
  let appointTime = format(new Date(startAt), "HH:mm");
  let appointDate = format(new Date(startAt), "dd:MM:yyyy");


 

  return (
    <div key={id} >
      <div className="d-flex">
        <div className="appTime">
          {appointTime} {appointDate}
        </div>
        <div className="customContainer">
          <div className="flex-row">
            <span className="text-dark text1">
              khatir Abdelkader
            </span>
            <span className="text2">
                age :22ans
            </span>
          </div>

        </div>
        <div className="details" >
         <div className="text3"> operation details :</div>  
          <p> </p>
        </div>
      </div>
    </div>
  );
};

export default SingleAppointment;
