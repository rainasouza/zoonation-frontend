import React from "react";
import {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from "react-router-dom";
import styles from '../Home/Home.module.css'
import { useAuthetication } from "../../hooks/useAuthetication";
import { useAuthValue } from "../../context/AuthContext";

function Signup(){

  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/home');}
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const {createUser, error: authError, loading} = useAuthetication(); 
  const { user } = useAuthValue();

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
    useEffect(() => {
      if (authError){
        setError(authError);
      }
    }, [authError])

    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-light">
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
        <br></br>
        
<div className={styles.body}>
    <div className={styles.box}>
        <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Crie uma única vez</h1>
        <p class="col-lg-10 fs-4"> e tenha acesso aos pets! </p>
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <form class="p-4 p-md-5 bg-body-tertiary" onSubmit={handleSubmit}>

          <div class="form-floating mb-3">
            <input type="text" class="form-control" name = "displayName" value={displayName} onChange={(e) => setDisplayName(e.target.value)} required placeholder="Nome do Usuário"/>
            <label for="floatingInput">Nome</label>
          </div>

          <div class="form-floating mb-3">
            <input type="email" class="form-control" name = "email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email"/>
            <label for="floatingInput">Email</label>
          </div>

          <div class="form-floating mb-3">
            <input type="password" class="form-control" name = "password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Senha"/>
            <label for="floatingInput">Senha (mínimo de 6 dígitos)</label>
          </div>

          <div class="form-floating mb-3">
            <input type="password" class="form-control" name = "confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required placeholder="Senha"/>
            <label for="floatingInput">Confirme sua senha</label>
          </div>

          <div class="col-12">
          {!loading && !user && <button className={styles.meubotao} >Criar Conta</button>}
          {loading && !user && <button className="btn btn-outline-dark" disabled >Aguarde...</button>}
          {user && !loading && navigateToHome()}
          {error && <p className="error">{error}</p>}
          </div>
        </form>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    )
}

export default Signup;