import { useNavigate } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.min.js";
import styles from './Profile.module.css'
//hooks
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";



const Profile = () =>{
    const navigate = useNavigate();

    
    const navigateToHome = () => {
        navigate('/home');
    }


    const {deleteDocument} = useDeleteDocument("animals");



    const {user} = useAuthValue();
    const uid = user.uid;
    const {documents: animals} = useFetchDocuments("animals",uid);

    return(
      
        <div className={styles.bodyprofile}>
          <div className={styles.nav}>
          <nav className="navbar navbar-expand-lg navbar-light">
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
        </div>
        <br></br>
        <br></br>
        <div className={styles.box}>

        <br></br>
        
        <div >
        <br></br>
     
          {animals && animals.map((animal) =>
              <div key = {animal.id} className={styles.wrapper}>
                <h3><b>Animal Cadastrado: </b>{animal.name}</h3>
                <button onClick={() => deleteDocument(animal.id)} className={styles.meubotao}> Deletar </button>
                
              </div>
            )
            }
            </div>
            <br></br>
        </div>
        </div>
    )
};
export default Profile;
