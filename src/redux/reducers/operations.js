import * as actionType from "../actionTypes";
const operationsReducer = (state = 
  
  [
  // {
  //   id: 1,
  //   startAt: "2022-05-04T08:00:00.000Z",
  //   endAt: "2022-05-04T09:00:00.000Z",
  //   summary: "Prvi pregled",
  //   color: "#336cfb",
  //   calendarID: "work",
  // },

  // {
  //   id: 2,
  //   startAt: "2022-05-04T08:00:00.000Z",
  //   endAt: "2022-05-04T09:00:00.000Z",
  //   summary: "Prvi pregled",
  //   color: "#336cfb",
  //   calendarID: "work",
  // },
  // {
  //   id: 3,
  //   startAt: "2022-05-04T08:00:00.000Z",
  //   endAt: "2022-05-04T09:00:00.000Z",
  //   summary: "Prvi pregled",
  //   color: "#336cfb",
  //   calendarID: "work",
  // },
]

, action) => {
    switch (action.type) {
      case actionType.GET_OPERATIONS:
        return action.data;
      case actionType.CREATE_OPERATION:
        console.log(action);
        return [...state, action.formData];
      case actionType.UPDATE_OPERATION:
        return  console.log(action);
        // return state.map((operation) =>
        //   operation.zakazaniPregledId !== action.id ? operation : action.data
        // );
      default:
        return state;
    }
  };
  
  export default operationsReducer;