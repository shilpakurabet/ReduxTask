/** @format */

import { GET_ALL_DATA } from "./constants";

const initialState = {
  getAllData: [],
};
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DATA: {
      return {
        ...state,
        getAllData: action.payload,
      };
    }
    default:
      return state;
  }
};
