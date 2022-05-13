import {
    GET_OPERATIONS,
    CREATE_OPERATION,
    DELETE_OPERATION,
    UPDATE_OPERATION,
  } from "../actionTypes";
//   import * as api from "../../api/index.js";
  
  export const getOperations = (lbz) => async (dispatch) => {
    try {
    //   const { data } = await api.fetchOperations({ lbz });
    //   dispatch({ type: GET_OPERATIONS, data });
    } catch (error) {
      console.log(error);
    }
  };
  
  export const createOperation = (formData) => async (dispatch) => {
    try {
    //   const { data } = await api.createOperation(formData);
      dispatch({ type: CREATE_OPERATION, formData });
    } catch (error) {
      console.log(error);
    }
  };
  
  export const updateOperation = (appointmentData) => async (dispatch) => {
    try {
    //   const { data } = await api.updateOperation(appointmentData);
      dispatch({
        type: UPDATE_OPERATION,
        // id: data.zakazaniPregledId,
        // data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  export const deleteOperation = (formData) => async (dispatch) => {
    try {
    //   const { data } = await api.deleteOperation(formData);
    //   dispatch({ type: DELETE_OPERATION, data });
    } catch (error) {
      console.log(error);
    }
  };
  