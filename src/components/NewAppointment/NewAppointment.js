// import { TextField } from "@material-ui/core";
import { Autocomplete, Button, TextField } from "@mui/material";
import React, { useState, memo } from "react";
// import { FormSelect } from "react-bootstrap";
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

  const patients=[
    {id:1,nom:"Abdelkdader"},
    {id:2,nom:"Mohamed"},
    {id:3,nom:"Amin"},
    {id:4,nom:"Boubaker"},
  ];
  const doctors=[
    {id:1,nom:"Dr khaled"},
    {id:2,nom:"Dr Monir"},
    {id:3,nom:"Dr Yassin"},
    {id:4,nom:"Dr Hichem"},
  ];
  const type =[
    {id:1,type:"penkeriase"},
    {id:2,type:"le colon"},
    {id:3,type:"l'utérus"},
    {id:4,type:"le sein"},
  ];

  const salles=[
    {id:1,nom:"S1"},
    {id:2,nom:"S2"},
    {id:3,nom:"S3"},
    {id:4,nom:"S4"},
    {id:5,nom:"S5"},
  ];


  const [comment, setComment] = useState("");
  const [isComment, setIsComment] = useState(false);
  const [examinationType, setVal] = useState("");
  const [patientId, setPatientId] = useState("");
  const [doctorsId,setDoctorsId]=useState([])
  const [salleId,setSalleId]=useState("");
  const [typeOp,SetTypeOp]=useState("");
  const [AnistisistesId,setAnistisitesId]=useState([]);
  const [corrdinateurId,setCorrdinateurId]=useState("");
  const handleChange = (e) => setComment(e.target.value);

  const handleChangeMultipleD=(e,v)=>{
    v.map(e=>setDoctorsId([...doctorsId, e.id]))
  }
  const handleChangeMultipleA=(e,v)=>{
    v.map(e=>setAnistisitesId([...AnistisistesId, e.id]))
  }

  const dateString = date.toLocaleString();
  console.log(date.toLocaleString());
  console.log(date.toISOString());
  return (
    <div className="new-appointment-container">
      <div className="new-appointment-header">
        <p className="header-paragraph familyFix">Ajouter Operation</p>
        {/* <div className="new-appointment-doctor">
          <div className="doctor-container"> */}
        {/* <div className="avatar-container">
              <img className="user-avatar" src={avatarUrl} alt={userName} />
            </div> */}
        {/* <div className="name-container ">
              <p className="user-name familyFix">{userName}</p>
              <p className="user-title familyFix">{userTitle}</p>
            </div>
          </div> */}
        {/* <div className="btn-container">
            <button
              onClick={() => setIsComment(!isComment)}
              className="comment-btn familyFix"
            >
              {!isComment ? "Ajouter un commentaire" : "Supprimer le commentaire"}
            </button>
          </div> */}

        {/* {/* </div> */}
      </div>
      {/* {isComment && (
        <textarea
          style={{ width: "60%" }}
          placeholder="Commenter"
          onChange={handleChange}
          name="surname"
          type="text"
        />
      )} */}

      <div className="new-appointment-body familyFix">

        <Autocomplete
          className="dropdown1"
          disablePortal
          id="combo-box-demo"
          options={patients}
          getOptionLabel={(option) => option.nom}
          sx={{ width: 400 }}
          onChange={(e, v) =>setPatientId(v.id)}
          renderInput={(params) => <TextField
            {...params} label="Patient" />}
        />
        <Autocomplete
          className="dropdown"
          disablePortal
          id="combo-box-demo"
          options={type}
          getOptionLabel={(option) => option.type}
          sx={{ width: 400 }}
          onChange={(e, v) => SetTypeOp(v.type)}
          renderInput={(params) => <TextField
            {...params} label="Type d'operation" />}
        />

        <Autocomplete
          className="dropdown1"
          disablePortal
          id="combo-box-demo"
          options={salles}
          getOptionLabel={(option) => option.nom}
          sx={{ width: 400 }}
          onChange={(e, v) => setSalleId(v.id)}
          renderInput={(params) => <TextField
            {...params} label="Salle" />}
        />

        <Autocomplete
          multiple
          id="tags-outlined"
          options={doctors}
          sx={{ width: 400 }}
          getOptionLabel={(option) => option.nom}
          // defaultValue={[doctors[2]]}
          filterSelectedOptions
          onChange={handleChangeMultipleD}
          renderInput={(params) => (
            <TextField
              {...params}
              label="doctors"
              placeholder="Ajouter doctor"
              
            />
          )}
        />

        <Autocomplete
          className="dropdown1"
          multiple
          id="tags-outlined"
          sx={{ width: 400 }}
          options={doctors}
          getOptionLabel={(option) => option.nom}
          // defaultValue={[doctors[1]]}
          onChange={handleChangeMultipleA}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="Anistisists"
              placeholder="Ajouter Anistisiste"
              fullWidth
            />
          )}
        />



        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={doctors}
          getOptionLabel={(option) => option.nom}
          sx={{ width: 400 }}
          onChange={(e, v) => setCorrdinateurId(v.id)}
          renderInput={(params) => <TextField
            {...params} label="Cordinateur"/>}
        />






        {/* <div className="dropdown1">
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
        </div> */}
        {/* <div className="dropdown2">
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
            </option> */}
        {/* {patients.map((patient) => {
              return (
                <option key={patient.lbp} value={patient.lbp}>
                  {patient.ime} {patient.prezime}
                </option>
              );
            })} */}
        {/* </FormSelect>
        </div> */}
        <div className="dropdown3">
          <p className="date-p familyFix">date d'operation</p>
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
            createNewAppointment(patientId, date,salleId,typeOp,doctorsId,AnistisistesId,corrdinateurId)
          }
        >
          Sauvegarde le
        </button>
      </div>
    </div>
  );
};

export default memo(NewAppointment);
