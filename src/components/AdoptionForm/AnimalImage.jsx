import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import styles from '../Home/Home.module.css';
import "bootstrap/dist/js/bootstrap.min.js";
import { imageDb } from "../../firebase/config";
import { getDownloadURL, listAll, ref, uploadBytes, getBlob } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import useFetchImages from "../../hooks/useFetchImages";
import PostDetail from "../AdoptionPage/PostDetail/PostDetail";
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'


const AnimalImage = () => {

    const { animalId } = useParams();

    const navigate = useNavigate();
    const navigateToAdopt = () => {
        navigate('/toadopt');
    }
    const navigateToHome = () => {
        navigate('/home');}
    const navigateToProfile = () => {
      navigate('/profile');
    }
    const navigateToAbout = () =>{
      navigate('/about');
    }

    const {user} = useAuthValue();
    const {documents: animals} = useFetchDocuments("animals");


    const [img,setImg] =useState('')
    const [imgUrl,setImgUrl] =useState([])

    const handleClick = () => {
      if (img !== null) {
          const imgRef = ref(imageDb, `files/${animalId}`);
          uploadBytes(imgRef, img).then(snapshot => {
              getDownloadURL(snapshot.ref).then(url => {
                  setImgUrl(prevUrls => [...prevUrls, url]);  
              }
            );
          });
      }
      navigateToAdopt();
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const result = await listAll(ref(imageDb, "files"));
        const urls = await Promise.all(result.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          return url;
        }));
        setImgUrl(urls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

//useEffect com o Promise.all 
//para esperar todas as URLs serem recuperadas antes de atualizar o estado imgUrl. 
//cada URL de imagem é adicionada apenas uma vez ao array imgUrl, 
//evitando a duplicação das imagens.
  return (
    <div>

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

    <div className={styles.formulariocontainer}>
    <input 
      type="file" 
      onChange={(e) => setImg(e.target.files[0])} />
    <br></br>
    {img &&<button onClick={handleClick} className={styles.meubotao}>Upload</button>}
    </div>
    <br></br>
</div>
  



)
}

export default AnimalImage;