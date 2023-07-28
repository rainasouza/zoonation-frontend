import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from "react-router-dom";
import './AdoptionForm.module.css';
import { useInsertDocument } from "../../hooks/useInsertDocument";
import {useAuthValue} from "../../context/AuthContext";


const AdoptionForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [race, setRace] = useState("");
    const [city, setCity] = useState("");
    const [image, setImage] = useState("");
    const [plusinfo, setPlusinfo] = useState("");
    const {user} = useAuthValue();

    const {insertDocument, response} = useInsertDocument("posts");

    const navigateToHome = () => {
        navigate('/home'); 
    }

    const handleSubmit = (e) => {
      e.preventDefaut();
      
    insertDocument({
      name,
      age,
      race,
      city,
      image,
      plusinfo,
      uid: user.uid,
    })
    }

    return (
        <div >
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
        <form class="row g-3">
        <div class="col-sm-5">
            <label for="inputName" class="fonte-texto">Nome</label>
            <input type="text" class="form-control" id="inputName" placeholder="Tudo bem se ele não possuir um!"/>
          </div>
        <div class="col-sm-5">
            <label for="inputAge" class="fonte-texto">Idade</label>
            <select id="inputAge" class="form-select">
              <option selected> 1-3 meses</option>
              <option> 3-6 meses </option>
              <option> 6-9 meses </option>
              <option> 9-12 meses </option>
              <option> 1+ ano </option>
            </select>
          </div>
          <div class="col-sm-5">
            <label for="inputRace" class="fonte-texto">Raça</label>
            <input type="text" class="form-control" id="inputRace" placeholder="Raça Não Definida, Labrador, Poodle..."/>
          </div>
          <div class="col-sm-5">
            <label for="inputCity" class="fonte-texto">Cidade</label>
            <select id="inputCity" class="form-select">
              <option selected>Campina Grande-PB</option>
              <option>Montadas-PB</option>
              <option>Lagoa Seca-PB</option>
              <option>Puxinanã-PB</option>
              <option>Esperança-PB</option>
              <option>Pocinhos-PB</option>
            </select>
          </div>
          <div class="mb-3">
          <label for="basic-url" class="form-label">Imagem do animal</label>
          <div class="input-group">
            <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4"/>
          </div>
          <div class="fonte-texto" id="basic-addon4">Coloque o link de endereço da imagem aqui!.</div>
          </div>
          <div class="col-sm-12">
            <label for="exampleFormControlTextarea1" class="fonte-texto">Deseja acrescentar mais informações sobre o(a) pequenino(a)? Nos deixe conhecer mais sobre personalidade dele(a)!</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="col-12">
            {!response.loading && <button type="submit" class="btn btn-outline-dark">Enviar</button>}
            {response.loading && (<button className="btn btn-outline-dark" disabled>Aguarde...</button>)}
            {response.error && <p className="error">{response.error}</p>};
          </div>
        </form>

        </div>
        </div>

        
        );
    };
    

export default AdoptionForm;