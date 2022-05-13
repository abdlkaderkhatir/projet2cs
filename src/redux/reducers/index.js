import { combineReducers } from "redux";
import operationsReducer from "./operations";
import patientReducer from "./patients"


export const reducers = combineReducers({
    operationsReducer,
    patientReducer,
})