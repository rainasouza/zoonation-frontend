import React, { useEffect } from "react";
import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { redirect, useNavigate } from "react-router-dom";
import { useAuthetication } from "../../hooks/useAuthetication";
import { useAuthValue } from "../../context/AuthContext";
import styles from './Login.module.css';

function Login(){
  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate('/signup')
  }
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
      <div className={styles.bodylogin}>
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


        <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Entre com sua conta Google</h1>
        <p class="col-lg-10 fs-4"> e acesse os animais para adoção.</p>
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <form class="p-4 p-md-5bg-body-tertiary" onSubmit={handleSubmit}>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput"  name = "email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com"/>
            <label for="floatingInput">Email</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" required placeholder="Mínimo de 6 Dígitos" value={password} onChange={(e) =>setPassword(e.target.value)} />
            <label for="floatingPassword">Senha (6 caracteres)</label>
          </div>



          {!loading && !user && <button  className={styles.meubotao} type="submit"> Entrar </button>}


          {loading && !user && <button className="btn btn-outline-dark" disabled >Aguarde...</button>}
          {user && !loading && navigateToHome()}
          {error && <p className="error">{error}</p>}

          <hr class="my-4"/>
        </form>
      </div>
    </div>
  </div>
        

      </div>
        
    )
}
  

  

export default Login;