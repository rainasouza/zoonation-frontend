import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from "react-router-dom";
import styles from './AdoptionForm.module.css';
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
  const navigateToAbout = () =>{
    navigate('/about');
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
    if( !city || !contact || !image){
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
      <div className={styles.bodyform} >
        <div className={styles.nav}>
        <nav className="navbar navbar-expand-lg navbar-light">
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

        <br></br>
        <br></br>

        <div className={styles.box}> 
        <br></br>
      <form onSubmit={handleSubmit}>
        <div className={styles.formulariocontainer}>
          <label><b>Nome do animal:</b></label>
          <input 
              type="text" 
              name="nameOfAnimal" 
              placeholder="Nome Do Animal"
              onChange={(e) => setName(e.target.value)}
              value={name}
              defaultValue="indefinido"
              />
          <div className={styles.info}>Caso não tenha, coloque indefinido.</div>
        </div>

        <div className={styles.formulariocontainer}>
          <label><b>Idade:</b></label>
          <input 
            type="text" 
            name="ageOfAnimal" 
            placeholder="1 mês, 3 meses..."
            onChange={(e) => setAge(e.target.value)}
            value={age}
            />
        </div>

        <div className={styles.formulariocontainer}>
          <label><b>Raça:</b></label>
          <input 
              type="text" 
              name="raceOfAnimal" 
              placeholder="Indefinida, labrador..."
              onChange={(e) => setRace(e.target.value)}
              value={race}
              />
        </div>

        <div className={styles.formulariocontainer}>
          <label><b>Porte:</b></label>
            <input 
            type="text" 
            name="porteOfAnimal" 
            placeholder="Pequeno, médio ou grande."
            onChange={(e) => setPorte(e.target.value)}
            value={porte}
            />
        </div>

        <div className={styles.formulariocontainer}>
          <label><b>Cidade:</b></label>
            <input 
            type="text" 
            name="cityOfAnimal" 
            placeholder="Cidade que o animal reside."
            onChange={(e) => setCity(e.target.value)}
            value={city}
            />
        </div>

        <div className={styles.formulariocontainer}>
          <label><b>Contato:</b></label>
          <input 
            type="text" 
            name="contactOfAnimal" 
            placeholder="Whatsapp ou Email"
            onChange={(e) => setContact(e.target.value)}
            value={contact}
            />
          <div className={styles.info}>Forneça para melhor contato.</div>
        </div>

        <div className={styles.formulariocontainer}>
          <label><b>Imagem</b></label>
          <input 
                  type="text" 
                  name="imageOfAnimal" 
                  placeholder="Obrigatório"
                  onChange={(e) => setImage(e.target.value)}
                  value={image}
                  />
          <div className={styles.info}>Coloque o endereço de imagem!</div>
          </div>
          <br></br>
        

        <div>
          
          {!response.loading && <button className={styles.meubotao}>Enviar</button>}
          {response.loading &&(
            <button className="btn btn-outline-dark" disabled >
              Aguarde...
            </button>)}
          {formError && <p className="error">{formError}</p>}
          </div>
          </form>
          
        
        </div>
        </div>
        );
    };
    

export default AdoptionForm;