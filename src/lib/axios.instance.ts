import axios from "axios";
import Env from "./env";

export const axiosInstance = axios.create({
  baseURL: Env.BACKEND_URL,
  timeout: 10 * 60 * 1000,
});
