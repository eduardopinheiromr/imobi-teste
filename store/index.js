import { createStore } from "redux";

import {
  validateTime,
  getDay,
  getTime,
  editAlarm,
  toggleByAlarmId,
  deleteAlarmById,
} from "../utils";

const initialState = {
  hasAlarms: false,
  alarms: [],
};

let lastId = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ALARM": {
      const { name, date, weatherCondition } = action.payload;
      const newState = { ...state };
      newState.hasAlarms = true;
      newState.alarms.push({
        id: ++lastId,
        name,
        time: getTime(date, validateTime),
        day: getDay(date, validateTime),
        date,
        weatherCondition,
        active: true,
      });
      console.log("alarm was added", newState);
      return newState;
    }
    case "EDIT_ALARM": {
      let newState = { ...state };
      newState.alarms = editAlarm(newState, action.payload);
      console.log(newState);
      return newState;
    }
    case "TOGGLE_ALARM": {
      const { id } = action.payload;
      let newState = { ...state };
      newState.alarms = toggleByAlarmId(newState, id);
      return newState;
    }
    case "DELETE_ALARM": {
      const { id } = action.payload;
      let newState = { ...state };
      newState.alarms = deleteAlarmById(newState, id);
      if (newState.alarms.length === 0) {
        newState.hasAlarms = !state.hasAlarms;
        console.log("alarm was deleted @@@@@@@@", newState);
        return newState;
      }
      console.log("alarm was deleted", newState);
      return newState;
    }
    case "TOGGLE_LIST": {
      const newState = { ...state };
      newState.hasAlarms = false;
      return newState;
    }
    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

export default store;
