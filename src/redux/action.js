/** @format */

import axios from "axios";
import { GET_ALL_DATA } from "./constants";

export const getAllData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      const result = await response.data;
      dispatch({ type: GET_ALL_DATA, payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};
