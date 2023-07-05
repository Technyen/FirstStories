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


 
  export function loginUser(email, password){
    axios
    .post(`${baseURL}/login`,{
      email:email,
      password:password
    })
    .then(response =>
      console.log (response.data)
    )
    .catch(error =>{
      if (error.response.status ==401) {
        console.log("password incorrect")
        
      } else if (error.response.status ==404){
        console.log("email incorrect")
        
      }else{
        console.log("unknown error")
      }
    })
   
  }

 