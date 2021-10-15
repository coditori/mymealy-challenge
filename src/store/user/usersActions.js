import axios from "axios";

const BaseUrl =
  process.env.REACT_APP_API_PROTOCOL +
  "://" +
  process.env.REACT_APP_API_HOST +
  ":" +
  process.env.REACT_APP_API_PORT;

function getUsersAction(users) {
  return {
    type: "GET_USERS",
    payload: users,
  };
}

export function fetchUsers() {
  return function (dispatch) {
    return axios.get(`${BaseUrl}/users`).then(({ data }) => {
      dispatch(getUsersAction(data));
    });
  };
}
