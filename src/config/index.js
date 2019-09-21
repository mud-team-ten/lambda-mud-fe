import axios from "axios";
require("dotenv").config();

const config = {
  endpoint: process.env.REACT_APP_BASE_ENDPOINT || "http://localhost:3000/",

  axiosHeaders: function() {
    console.log(this.endpoint, localStorage.getItem("key"));
    return axios.create({
      baseURL: this.endpoint,
      headers: {
        Authorization: `Token ${localStorage.getItem("key")}` || null
      }
    });
  }
};

export default config;
