import axios from "axios";


const baseURL = "https://localhost:7078/Users";
export function createUser() {
    axios
      .post(baseURL, {
      
        name: "Abcde",
        email:"juang@123.com",
        password:"123456"
      })
      .then((response) => {
       console.log(response.data) ;
      });
  }