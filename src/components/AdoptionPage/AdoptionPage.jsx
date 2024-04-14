import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useNavigate} from "react-router-dom";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import PostDetail from "./PostDetail/PostDetail";
import { useAuthValue } from "../../context/AuthContext";
import styles from '../Home/Home.module.css'
import useFetchImages from "../../hooks/useFetchImages";


const AdoptionPage = () => {
  const { images } = useFetchImages();
   const {user} = useAuthValue();

    const navigate = useNavigate();

    const navigateToAbout = () =>{
      navigate('/about');
    }

    const navigateToHome = () => {
        navigate('/home');}


    const navigateToProfile = () => {
      navigate('/profile');
  }

    const {documents: animals} = useFetchDocuments("animals");

    return(
      <div>
        
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
            <br></br>
            <br></br>

        <br></br>
        </div>
        <br></br>



        {Array.isArray(animals) && animals.map(animal => (
            <PostDetail key={animal.id} animal={animal} image={images.find(image => image.includes(animal.id))} />
          ))}
          


        </div>
            
    )
}

export default AdoptionPage;