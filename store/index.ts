import { createStore } from "redux";

const initialState = {
  accepted: [],
  confirmation: [],
  getKeys: [],
  inProgress: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "POPULATE_STATE": {
      console.log(action.payload);
      return;
    }
    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

export default store;
