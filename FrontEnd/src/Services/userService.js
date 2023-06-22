import axios from "axios";


const baseURL = "https://localhost:7078/Users";
export function createUser(name,email,password) {

    axios
      .post(baseURL, {
      name:name,
      email:email,
      password:password
      })
      .then(response => {
       console.log(response.data);
      });
  }


 