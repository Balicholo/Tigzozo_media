import axios from "axios";

require('dotenv').config();

const baseURL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_API_URL
    : process.env.NEXT_PUBLIC_API_URL;

export default axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json"
  },
});

export const httpFormData = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "multipart/form-data",
  },
});
