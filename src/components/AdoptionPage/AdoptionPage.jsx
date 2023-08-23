import React from "react";
import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useNavigate, Link } from "react-router-dom";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import PostDetail from "./PostDetail/PostDetail";
import PostModal from "./PostDetail/PostModal";


const AdoptionPage = () => {

    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/home');}


    const [query, setQuery] = useState("");
    const {documents: animals, loading} = useFetchDocuments("animals");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

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

        {loading && <p> Carregando...</p>}

            

        {Array.isArray(animals) && animals.map((animal) => <PostDetail key={animal.id} animal={animal}></PostDetail>)}

        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              {Array.isArray(animals) && animals.map((animal) => <PostModal key={animal.id} animal={animal}></PostModal>)}

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        </div>



            

            
          
            
    )
}

export default AdoptionPage;