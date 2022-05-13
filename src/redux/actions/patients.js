import {
  DELETE_PATIENT,
  GET_PATIENTS,
} from "../actionTypes";


export const getPatients = () => async (dispatch) => {
  try {

    dispatch({ type: GET_PATIENTS,});
  } catch (error) {
    console.log(error);
  }
};

export const getPatient = (lbp) => async (dispatch) => {
  try {
    
  } catch (error) {
    console.log(error);
  }
};

export const searchPatients = (searchValue) => async (dispatch) => {
  try {
    
  } catch (error) {
    console.log(error);
  }
};

export const createPatient = (formData) => async (dispatch) => {
  try {

  } catch (error) {
    console.log(error);
  }
};

export const updatePatient = (formData, lbp) => async (dispatch) => {
  try {
   
  } catch (error) {
    console.log(error);
  }
};

export const deletePatient = (lbp) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PATIENT, lbp });
  } catch (error) {
    console.log(error);
  }
};
