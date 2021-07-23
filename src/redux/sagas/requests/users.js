import Axios from "axios";

export function requestGetUser() {
  return Axios.request({
    method: "get",
    url: "https://my-json-server.typicode.com/atothey/demo/user"
  });
}
