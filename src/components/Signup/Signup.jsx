import React from "react";
import {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from "react-router-dom";
import "./Signup.module.css";
import { useAuthetication } from "../../hooks/useAuthetication";



function Signup(){

  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/home');}
  const [displayName, setDisplayName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const {createUser, error: authError, loading} = useAuthetication(); 

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    const user = {
      displayName,
      email,
      password
    }
    if (password !== confirmPassword){
      setError("As senhas precisam ser iguais.")
      return
    }

    const res = await createUser(user)
    console.log(res);
  


} 







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
            <label>Nome:</label>
            <input type="text" class="form-control" name="displayName" required placeholder="Nome do Usuário" value={displayName} onChange={(e) =>setDisplayName(e.target.value)}/>
          </div>
        <div class="col-sm-5">
            <label>Telefone:</label>
            <input type="text" class="form-control" name="contact" required placeholder="Contato do Usuário" value={contact} onChange={(e) =>setContact(e.target.value)}/>
        </div>
          <div class="col-sm-5">
            <label>Email:</label>
            <input type="email" class="form-control" name="email" required placeholder="Email do Usuário" value={email} onChange={(e) =>setEmail(e.target.value)}/>
          </div>
          <div class="col-sm-5">
            <label>Senha:</label>
            <input type="password" class="form-control" name="password" required placeholder="Mínimo de 6 Dígitos" value={password} onChange={(e) =>setPassword(e.target.value)}/>
          </div>
          <div class="col-sm-10">
            <label>Confirme sua Senha:</label>
            <input type="password" class="form-control" name="confirmPassword" required placeholder="Mínimo de 6 Dígitos"value={confirmPassword} onChange={(e) =>setConfirmPassword(e.target.value)}/>
          </div>
          <div class="col-12">
          {!loading && <button className="btn btn-outline-dark">Criar Conta</button>}
          {loading && <button className="btn btn-outline-dark" disabled >Aguarde...</button>}
          {error && <p className="error">{error}</p>}
          </div>
        </form>
        </div>

      </div>
    )
}

export default Signup;