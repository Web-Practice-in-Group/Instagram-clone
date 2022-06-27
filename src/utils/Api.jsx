import axios from "axios";

export default (route = "") => {
  let url = "";
  if (route == "1") {
    url = "https://jsonplaceholder.typicode.com/";
  } else {
    url = "https://jsonplaceholder.typicode.com/";
  }

  return axios.create({
    baseURL: url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
