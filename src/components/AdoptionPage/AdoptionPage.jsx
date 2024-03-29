import React from "react";
import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useNavigate, Link } from "react-router-dom";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import PostDetail from "./PostDetail/PostDetail";
import { useAuthetication } from "../../hooks/useAuthetication";
import { useAuthValue } from "../../context/AuthContext";
import styles from './AdoptionPage.module.css';


const AdoptionPage = () => {

   const {user} = useAuthValue();

    const navigate = useNavigate();

    const navigateToAbout = () =>{
      navigate('/about');
    }

    const navigateToHome = () => {
        navigate('/home');}

    const { logout } = useAuthetication();

    const navigateToProfile = () => {
      navigate('/profile');
  }

    const {documents: animals, loading} = useFetchDocuments("animals");

    return(
      <div>
        
          <div className={styles.bodyadpt}>
          <div className={styles.nav}>
            <div>
            <nav className="navbar navbar-expand-lg navbar-light" >
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand">ZooNation</a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" onClick={navigateToHome} >Home</a>
                </li>

                {user && (
                      <li className="nav-item">
                        <a class="nav-link active" aria-current="page" onClick={navigateToProfile} >Perfil</a>
                      </li>
                    )}

                    <li className="nav-item">
                        <a class="nav-link active" aria-current="page" onClick={navigateToAbout} >Sobre</a>
                      </li>



              </ul>
            </div>
          </div>
        </nav>
            </div>
            </div>

            
            <br></br>
            <br></br>
        {Array.isArray(animals) && animals.map((animal) =><PostDetail key={animal.id} animal={animal}></PostDetail>)}
        <br></br>
        
        </div>
        </div>
            
    )
}

export default AdoptionPage;