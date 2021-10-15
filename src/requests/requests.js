import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import moment from "jalali-moment";

console.log(process.env);

const BaseUrl =
  process.env.REACT_APP_API_PROTOCOL +
  "://" +
  process.env.REACT_APP_API_HOST +
  ":" +
  process.env.REACT_APP_API_PORT;

export const addUser = ({ name, phoneNumber, age, email }) => {
  return axios
    .post(`${BaseUrl}/users`, {
      id: uuidv4(),
      name,
      phoneNumber,
      age,
      email,
      date: moment().locale("fa").format("YYYY/MM/D"),
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getUser = ({ id }) => {
  return axios.get(`${BaseUrl}/users/${id}`).catch((error) => {
    console.log(error);
  });
};

export const updateUser = ({ id, name, phoneNumber, age, email }) => {
  return axios
    .put(`${BaseUrl}/users/${id}`, {
      name,
      phoneNumber,
      age,
      email,
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteUser = ({ id }) => {
  return axios.delete(`${BaseUrl}/users/${id}`).catch((error) => {
    console.log(error);
  });
};
