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
    const [porte, setPorte] = useState("");
    const [city, setCity] = useState("");
    const [image, setImage] = useState("");
    const [plusInfo, setPlusinfo] = useState("");
    const [formError, setFormError] = useState("");
    const {user} = useAuthValue();
    const {insertDocument, response} = useInsertDocument("animals");

  

    const navigateToHome = () => {
        navigate('/home');}

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
    if( !city || !race || !image){
      setFormError("Preencha os campos de nome, cidade e imagem do animal!");
    }

    if(formError) return;

    insertDocument({
      name,
      age,
      race,
      porte,
      city,
      image,
      plusInfo,
      uid: user.uid,
      createdBy: user.displayName
    })
    navigateToAdopt();
    };

    return (
        <div >
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

<div>
        <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-sm-5">
            <label className="fonte-texto">Nome</label>
            <input 
            type="text" 
            className="form-control" 
            name="nameOfAnimal" 
            placeholder="Tudo bem se ele não possuir um!"
            onChange={(e) => setName(e.target.value)}
            value={name}
            />
          </div>

          <label>
            <span>
            <div >
            <label className="fonte-texto">Idade</label>
            <input 
            type="text" 
            className="form-control" 
            name="ageOfAnimal" 
            placeholder="Ex: 1 mês, 1 ano..."
            onChange={(e) => setAge(e.target.value)}
            value={age}
            />
          </div>
            </span>
          </label>

        <div >
        <label>
            <span>
            <div>
            <label className="fonte-texto">Raça</label>
            <input 
            type="text" 
            className="form-control" 
            name="raceOfAnimal" 
            placeholder="Ex: labrador, indefinida..."
            onChange={(e) => setRace(e.target.value)}
            value={race}
            />
          </div>
            </span>
          </label>

          <div>
          <label>
            <span>
            <div className="col-sm-5">
            <label className="fonte-texto">Porte</label>
            <input 
            type="text" 
            className="form-control" 
            name="porteOfAnimal" 
            placeholder="Pequeno, médio ou grande."
            onChange={(e) => setPorte(e.target.value)}
            value={porte}
            />
          </div>
            </span>
          </label>
          </div> 

          </div>
          <div>
          <label>
            <span>
            <div className="col-sm-5">
            <label className="fonte-texto">Cidade</label>
            <input 
            type="text" 
            className="form-control" 
            name="cityOfAnimal" 
            placeholder="Ex: Montadas, Esperança..."
            onChange={(e) => setCity(e.target.value)}
            value={city}
            />
          </div>
            </span>
          </label>
          </div>

          <div>
          <label>
            <span>
            <div className="col-sm-5">
            <label className="fonte-texto">Foto do Animal!</label>
            <input 
            type="text" 
            className="form-control" 
            name="imageOfAnimal" 
            placeholder="Anexe aqui o link de endereço da imagem."
            onChange={(e) => setImage(e.target.value)}
            value={image}
            />
          </div>
            </span>
          </label>
          </div> 

          <div>
          <label>
            <span>
            <div className="col-sm-5">
            <label className="fonte-texto">Informações adicionais</label>
            <textarea  
            className="form-control" 
            name="plusInfoOfAnimal" 
            placeholder="Fale mais sobre o pet"
            onChange={(e) => setPlusinfo(e.target.value)}
            value={plusInfo}
            />
          </div>
            </span>
          </label>

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