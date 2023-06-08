import { createUser } from "./Services/userService";
import React from "react";



export default function App() {
  // const [post, setPost] = React.useState(null);

  // React.useEffect(() => {
  //   axios.get(`${baseURL}/1`).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  
  return (
    <div>
      <h1>CUENTOS INFANTILES</h1>
      <p>Crear Cuentos</p>
      <button onClick={createUser}>Registrarse</button>
    </div>
  );
}