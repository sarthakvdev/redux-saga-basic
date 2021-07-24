import Axios from "axios";

export function requestGetUser() {
  return Axios.request({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/users"
  });
}
