import axios from "axios";


const baseURL = "https://localhost:7078/Users";
export function createUser(name, email, password) {

    axios
      .post(`${baseURL}/create`, {
      name:name,
      email:email,
      password:password
      })
      .then(response => 
       console.log(response.data)
      );
  }


 
  export  function loginUser(email, password){
     return axios
    .post(`${baseURL}/login`,{
      email:email,
      password:password
    })
    .then(response =>{
      return null;
    })
    .catch(error =>{
      if (error.response.status ==401) {
        return "password incorrect";
        
      } else if (error.response.status ==404){
        return "email incorrect";
        
      }else{
       return "unknown error";
      }
    })
   
  }

 