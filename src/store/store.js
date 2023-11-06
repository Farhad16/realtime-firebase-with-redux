// src/store.js
import { createStore } from "redux";

// Initial state
const initialState = {
  user: null,
};

// Reducer function
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "CLEAR_USER":
      return { ...state, user: null };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(userReducer);

export default store;
