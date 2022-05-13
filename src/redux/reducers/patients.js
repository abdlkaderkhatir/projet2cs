import * as actionType from "../actionTypes";
const patientReducer = (state = [
  {
    id: "1",
    Nom: "abdelkader",
    Nomduparent: "bouhdjar",
    nomdefamille: "khatir",
    datedenaissance : "2000-03-03",
    Lieudenaissance: "sidi bel abbes",
    paysCitoyennete : " Algerie",
    adresse: "40 log n29",
    Lieuderesidence: "Hammam bou hjar",
    // paysAppartements : "",
    Numeroducontact: "07928382020",
    email: "a.khatir@Gmail.com",
    uidGardien : "1HSI38939",
    nomdugardien: "fatima",
    Situationfamiliale: "SINGLE",
    etatcivil : "IN_MARRIAGE",
    nombreEnfants : 0,
    DiplomedePreparationProfessionnelle: "HIGH",
    Occupation: "",
    genre :"masculin",
    dateDecesdudeces : "",
 },
  {
    id: "2",
    Nom: "abdelkader",
    Nomduparent: "bouhdjar",
    nomdefamille: "khatir",
    datedenaissance : "2000-03-03",
    Lieudenaissance: "sidi bel abbes",
    paysCitoyennete : " Algerie",
    adresse: "40 log n29",
    Lieuderesidence: "Hammam bou hjar",
    // paysAppartements : "",
    Numeroducontact: "07928382020",
    email: "a.khatir@Gmail.com",
    uidGardien : "1HSI38939",
    nomdugardien: "fatima",
    Situationfamiliale: "SINGLE",
    etatcivil : "IN_MARRIAGE",
    nombreEnfants : 0,
    DiplomedePreparationProfessionnelle: "HIGH",
    Occupation: "",
    genre :"masculin",
    dateDecesdudeces : "",
 },
  {
    id: "3",
    Nom: "abdelkader",
    Nomduparent: "bouhdjar",
    nomdefamille: "khatir",
    datedenaissance : "2000-03-03",
    Lieudenaissance: "sidi bel abbes",
    paysCitoyennete : " Algerie",
    adresse: "40 log n29",
    Lieuderesidence: "Hammam bou hjar",
    // paysAppartements : "",
    Numeroducontact: "07928382020",
    email: "a.khatir@Gmail.com",
    uidGardien : "1HSI38939",
    nomdugardien: "fatima",
    Situationfamiliale: "SINGLE",
    etatcivil : "IN_MARRIAGE",
    nombreEnfants : 0,
    DiplomedePreparationProfessionnelle: "HIGH",
    Occupation: "",
    genre :"masculin",
    dateDecesdudeces : "",
 },

], action) => {
  switch (action.type) {
    case actionType.GET_PATIENTS:
      return state;
    case actionType.UPDATE_PATIENT:
      return state.map((patient) =>
        patient.lbz !== action.data.lbz ? patient : action.data
      );
    case actionType.DELETE_PATIENT:
      return [
        ...state,
        state.filter((patient) => (patient.id !== action.id ? patient : false)),
      ];
    default:
      return state;
  }
};

export default patientReducer;
