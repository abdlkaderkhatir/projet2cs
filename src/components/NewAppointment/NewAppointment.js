import React, { useState ,memo} from "react";
import { FormSelect } from "react-bootstrap";
import "./styles.css";

const NewAppointment = (props) => {
  const {
    // avatarUrl,
    userName,
    userTitle,
    // doctorId,
    createNewAppointment,
    date,
    setNewAppointmentVisible,
    // patients,
  } = props;

  const [comment, setComment] = useState("");
  const [isComment, setIsComment] = useState(false);
  const [examinationType, setVal] = useState("");
  const [patientId, setPatientId] = useState("");

  const handleChange = (e) => setComment(e.target.value);

  const dateString = date.toLocaleString();
  return (
    <div className="new-appointment-container">
      <div className="new-appointment-header">
        <p className="header-paragraph familyFix">Ajouter un nouvel avis</p>
        <hr className="break-line" />
        <div className="new-appointment-doctor">
          <div className="doctor-container">
            {/* <div className="avatar-container">
              <img className="user-avatar" src={avatarUrl} alt={userName} />
            </div> */}
            <div className="name-container ">
              <p className="user-name familyFix">{userName}</p>
              <p className="user-title familyFix">{userTitle}</p>
            </div>
          </div>
          <div className="btn-container">
            <button
              onClick={() => setIsComment(!isComment)}
              className="comment-btn familyFix"
            >
              {!isComment ? "Ajouter un commentaire" : "Supprimer le commentaire"}
            </button>
          </div>
        </div>
      </div>
      {isComment && (
        <textarea
          style={{ width: "60%" }}
          placeholder="Commenter"
          onChange={handleChange}
          name="surname"
          type="text"
        />
      )}
      <div className="new-appointment-body familyFix">
        <div className="dropdown1">
          <p className="reason-p familyFix">Raison de l'examen</p>
          <FormSelect
            aria-label="select type of medical examination"
            onChange={(e) => setVal(e.target.value)}
          >
             <option> Sélectionner </option>
             <option value = "preview"> Aperçu </option>
             <option value="control"> Contrôle </option>
             <option value="operation"> Opération </option>
             <option value="visit"> Visite </option>
          </FormSelect>
        </div>
        <div className="dropdown2">
          <p className="patient-p familyFix">Patient</p>
          <FormSelect
            aria-label="select patient"
            onChange={(e) => {
              setPatientId(e.target.value);
            }}
            defaultValue=""
          >
            <option value="" disabled>
              Izaberi
            </option>
            {/* {patients.map((patient) => {
              return (
                <option key={patient.lbp} value={patient.lbp}>
                  {patient.ime} {patient.prezime}
                </option>
              );
            })} */}
          </FormSelect>
        </div>
        <div className="dropdown3">
          <p className="date-p familyFix">date d'examen</p>
          <p>{dateString}</p>
        </div>
      </div>
      <div className="new-appointment-buttons">
        <button
          className="my-close-btn"
          onClick={() => setNewAppointmentVisible(false)}
        >
          Close
        </button>
        <button
          className="my-save-btn"
          onClick={() =>
            createNewAppointment(patientId, date, examinationType, comment)
          }
        >
          Sauvegarde le
        </button>
      </div>
    </div>
  );
};

export default memo(NewAppointment);
