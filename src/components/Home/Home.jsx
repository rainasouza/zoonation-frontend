import React from "react";
import './Home.module.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js";
import "./Home.module.css"
import dogLogo from "../../images/dog_logo.jpg"
import { useNavigate } from "react-router-dom";
import Signup from "../Signup/Signup";
import { useAuthetication } from "../../hooks/useAuthetication";
import { useAuthValue } from "../../context/AuthContext";


function Home() {
  const navigate = useNavigate();

  const navigateToAdoptionPage = () => {
    navigate('/toadopt');
  }
  const navigateToAdoptionForm = () => {
    navigate('/adoptions');
  }
  const navigateToSignup = () => {
    navigate('/signup')
  }
  const navigateToLogin = () => {
    navigate('/login')
  }
  const navigateToHome = () => {
    navigate('/home');
  }
  const navigateToProfile = () => {
    navigate('/profile');
}
  const { user } = useAuthValue();
  const { logout } = useAuthetication();

  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <a className="navbar-brand">ZooNation</a>
                  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {user && (
                      <li className="nav-item">
                        <a class="nav-link active" aria-current="page" onClick={navigateToProfile} >Perfil</a>
                      </li>
                    )}

                    {user && (
                      <li className="nav-item">
                        <a class="nav-link active" aria-current="page" onClick={logout} >Sair</a>
                      </li>
                    )}
                    </ul>
                  </div>
                </div>
              </nav>


        <br></br>

      {!user && (
          <div class="px-4 pt-5 my-5 text-center ">
          <h1 class="display-4 fw-bold text-body-emphasis">Zoonation</h1>
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">Nascemos com o objetivo de ajudar cães e gatos a encontrarem um lar para chamarem de seus! As patinhas que você observa ao visitar este site estão ansiosas para lhe conhecer.</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            {!user && (
            <button type="button" class="btn btn-outline-dark" onClick={navigateToLogin}>Entrar</button>
            )}
            {!user &&(
            <button type="button" class="btn btn-outline-secondary btn-lg px-4" onClick={navigateToSignup}>Cadastre-se</button>
            )}
            </div>
          </div>

        </div>)}

  
        {user &&(
              <div class="container col-xxl-8 px-4 py-5">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                  <div class="col-10 col-sm-8 col-lg-6">
                    <img src={dogLogo} alt="image" width="300" height="400" loading="lazy" />
                  </div>
                  <div class="col-lg-6">
                    <div class="lc-block mb-3">
                      <div editable="rich">
                        <h2 class="fw-bold display-5">ZooNation - Adoção Responsável: você já nos conhece?</h2>
                      </div>
                    </div>

                    <div class="lc-block mb-3">
                      <div editable="rich">
                        <p className="fonte-texto">Nascemos com o objetivo de ajudar cães e gatos a encontrarem um lar para chamarem de seus! As patinhas que você observa ao visitar este site estão ansiosas para lhe conhecer.
                        </p>
                      </div>
                    </div>
                    {!user && (
                      <div class="lc-block d-grid gap-2 d-md-flex justify-content-md-start">
                        <a type="button" class="btn btn-outline-dark" onClick={navigateToLogin}>Entrar</a>
                      </div>
                    )}

                    {user && (
                      <div class="lc-block d-grid gap-2 d-md-flex justify-content-md-start">
                        <a type="button" class="btn btn-outline-dark" onClick={navigateToAdoptionPage}>Deseja adotar?</a>
                        <a type="button" class="btn btn-outline-dark" onClick={navigateToAdoptionForm}>Deseja por para adoção?</a>
                      </div>)}

                  </div>
                </div>
              </div>
        )}



    </div>
  )
}

export default Home;