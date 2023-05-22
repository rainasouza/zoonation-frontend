import React, { useEffect } from "react";
import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { redirect, useNavigate } from "react-router-dom";
import { useAuthetication } from "../../hooks/useAuthetication";
import { useAuthValue } from "../../context/AuthContext";




function Login(){
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/home');}
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { user } = useAuthValue();

  const {login, error: authError, loading} = useAuthetication(); 

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    const user = {
      email,
      password
    }

    const res = await login(user);
    console.log(res)


   
} 
useEffect(() => {
  if (authError){
    setError(authError);
  }
}, [authError])

    return(
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand">ZooNation</a>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" onClick={navigateToHome} >Home</a>
                </li>
        
              </ul>
            </div>
          </div>
        </nav>
        <br></br>

        <div class="container">
        <form class="row g-3" onSubmit={handleSubmit}>
        <div class="col-sm-5">
            <label>Email:</label>
            <input type="email" class="form-control" name="email" required placeholder="Email do Usuário" value={email} onChange={(e) =>setEmail(e.target.value)}/>
          </div>
          <div class="col-sm-5">
            <label>Senha:</label>
            <input type="password" class="form-control" name="password" required placeholder="Mínimo de 6 Dígitos" value={password} onChange={(e) =>setPassword(e.target.value)}/>
          </div>
          
          <div class="col-12">
          {!loading && !user && <button className="btn btn-outline-dark">Login</button>}
          {loading && <button className="btn btn-outline-dark" disabled >Aguarde...</button>}
          {user && <button className="btn btn-outline-dark" onClick={navigateToHome}> Acesse os animais </button>}
          {error && <p className="error">{error}</p>}
          
          </div>
        </form>
        </div>




      </div>
        
    )
}
  

  

export default Login;