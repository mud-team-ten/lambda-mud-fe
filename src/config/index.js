import axios from "axios";
require("dotenv").config();

const endpoint =
  process.env.REACT_APP_BASE_ENDPOINT || "http://localhost:3000/";

export const config = {
  api: endpoint,

  axiosHeaders: function() {
    return axios.create({
      baseURL: this.api,
      headers: {
        Authorization: `${localStorage.getItem("key")}`
      }
    });
  }
};
