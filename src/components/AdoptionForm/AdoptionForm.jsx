import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from "react-router-dom";
import './AdoptionForm.module.css';
import "bootstrap/dist/js/bootstrap.min.js";
import { useAuthetication } from "../../hooks/useAuthetication";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import {useAuthValue} from "../../context/AuthContext";


const AdoptionForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [race, setRace] = useState("");
    const [porte, setPorte] = useState("");
    const [city, setCity] = useState("");
    const [image, setImage] = useState("");
    const [contact, setContact] = useState("");
    const [formError, setFormError] = useState("");
    const {user} = useAuthValue();
    const {insertDocument, response} = useInsertDocument("animals");

  

    const navigateToHome = () => {
        navigate('/home');}

    const { logout } = useAuthetication();

    const navigateToProfile = () => {
      navigate('/profile');
  }
    const navigateToAdopt = () => {
        navigate('/toadopt');}
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormError("");
      
    //validate image URL
    try{
      new URL(image);
    } catch (error){
      setFormError("A imagem precisa ser uma URL.");
    }

    //cheking the values
    if( !city || !contact || !image || !age){
      setFormError("Preencha os campos de nome, idade, cidade e imagem do animal!");
    }

    if(formError) return;

    insertDocument({
      name,
      age,
      race,
      porte,
      city,
      image,
      contact,
      uid: user.uid,
      createdBy: user.displayName
    })
    navigateToAdopt();
    };

    return (
        <div >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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

              </ul>
            </div>
          </div>
        </nav>
        <br></br>

<div>

        <form className="" onSubmit={handleSubmit}>

          
        <div class="container text-center">
          <div class=".col-4">
            <label className="">Nome</label>
            <input 
            type="text" 
            className="form-control col-md-4" 
            name="nameOfAnimal" 
            placeholder="Tudo bem se ele não possuir um!"
            onChange={(e) => setName(e.target.value)}
            value={name}
            />
          </div>
          </div>

          <label>
            <span>
            <div class="container text-center">
          <div class=".col-4">
            <label className="">Idade</label>
            <input 
            type="text" 
            className="form-control col-md-4" 
            name="ageOfAnimal" 
            placeholder="1 mês, 3 meses... (obrigatório)"
            onChange={(e) => setAge(e.target.value)}
            value={age}
            />
          </div>
          </div>
            </span>
          </label>

        <div>

          <label>
            <span>
            <div class="container text-center">
          <div class=".col-md-4">
            <label className="">Porte</label>
            <input 
            type="text" 
            className="form-control col-md-4" 
            name="porteOfAnimal" 
            placeholder="Opcional"
            onChange={(e) => setPorte(e.target.value)}
            value={porte}
            />
          </div>
          </div>
            </span>
          </label>

          <div>

          <label>
            <span>
            <div class="container text-center">
          <div class=".col-md-4">
            <label className="">Cidade</label>
            <input 
            type="text" 
            className="form-control col-md-4" 
            name="cityOfAnimal" 
            placeholder="Obrigatório"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            />
          </div>
          </div>
            </span>
          </label>
          </div> 
          </div>

          <div>

          <label>
            <span>
            <div class="container text-center">
          <div class=".col-md-4">
            <label className="">Contato</label>
            <input 
            type="text" 
            className="form-control col-md-4" 
            name="contactOfAnimal" 
            placeholder="Obrigatório"
            onChange={(e) => setContact(e.target.value)}
            value={contact}
            />
          </div>
          </div>
            </span>
          </label>
          </div>

          <div>

          <label>
            <span>
              <div class="container text-center">
              <div class=".col-md-4">
              <label className="">Imagem</label>
                <input 
                  type="text" 
                  className="form-control col-md-4" 
                  name="imageOfAnimal" 
                  placeholder="Obrigatório (endereço de imagem)"
                  onChange={(e) => setImage(e.target.value)}
                  value={image}
                  />
                </div>
                </div>
                  </span>
                </label>

          </div> 
          <div>
         

          <div>
          {!response.loading && <button className="btn btn-outline-dark">Enviar</button>}
          {response.loading &&(
            <button className="btn btn-outline-dark" disabled >
              Aguarde...
            </button>)}
          {formError && <p className="error">{formError}</p>}
          </div>

          </div> 
        </form>
        </div>
        </div>

        
        );
    };
    

export default AdoptionForm;