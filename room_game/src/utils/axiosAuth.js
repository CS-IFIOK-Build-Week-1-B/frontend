import axios from "axios";

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");
  return axios.create({
    baseURL: "https://lambda-mud-cseu3.herokuapp.com/api/adv/welcome",
    headers: {
      Authorization: token,
    },
  });
};
