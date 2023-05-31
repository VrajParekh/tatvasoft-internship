import axios from "axios";
import { toast } from "react-toastify";

const request = axios.create({
  baseURL: "https://book-e-sell-node-api.vercel.app/",
  timeout: 12400000,
  responseType: "json",
});
