
import axios from "axios";
import React from "react";

const baseURL = "https://localhost:7078/Users";

export default function App() {
  // const [post, setPost] = React.useState(null);

  // React.useEffect(() => {
  //   axios.get(`${baseURL}/1`).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  function createUser() {
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
  return (
    <div>
      <h1>CUENTOS INFANTILES</h1>
      <p>Crear Cuentos</p>
      <button onClick={createUser}>Registrarse</button>
    </div>
  );
}