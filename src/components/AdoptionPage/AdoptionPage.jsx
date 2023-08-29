import React from "react";
import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useNavigate, Link } from "react-router-dom";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import PostDetail from "./PostDetail/PostDetail";


const AdoptionPage = () => {

    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/home');}

    const {documents: animals, loading} = useFetchDocuments("animals");

    return(
        <div>
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
              </ul>
            </div>
          </div>
        </nav>
        <br></br>
            </div>

            

        {Array.isArray(animals) && animals.map((animal) =><PostDetail key={animal.id} animal={animal}></PostDetail>)}
        </div>
            
    )
}

export default AdoptionPage;