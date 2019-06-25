import axios from "axios";
import { PEXELS_API_BASE_URL, PEXELS_API_KEY } from "../constants";

// To check if location is in northern or southern hemisphere and decide the season
export const getSeason = (lat, month) => {
  return month > 2 && month < 9 ? "Summer" : "Winter";
};

export const getImageApiInstance = () => {
  const axiosInstance = axios.create({
    baseURL: PEXELS_API_BASE_URL,
    timeout: 10000,
    headers: { Authorization: PEXELS_API_KEY }
  });
  return axiosInstance;
};
