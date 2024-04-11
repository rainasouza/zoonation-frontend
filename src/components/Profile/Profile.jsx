import { useNavigate } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.min.js";
import styles from '../Home/Home.module.css';
//hooks
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";
import { useAuthetication } from "../../hooks/useAuthetication";



const Profile = () =>{
    const navigate = useNavigate();

    
    const navigateToHome = () => {
        navigate('/home');
    }
    const { logout } = useAuthetication();


    const {deleteDocument} = useDeleteDocument("animals");

    const {user} = useAuthValue();
    const uid = user.uid;
    const {documents: animals} = useFetchDocuments("animals",uid);

    return(
      <div>
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

        <br></br><br></br>
        </div>

        
        <div >
        <br></br>
     
          {animals && animals.map((animal) =>
          <div className={styles.body}>

            <div key = {animal.id} className={styles.box}>
            <h2><b>Animal Cadastrado: </b>{animal.name}</h2>
          
                <button type="button" className={styles.meubotao} data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Deletar
                </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-sm">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Apagar Postagem</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    Você tem certeza que deseja apagar a postagem? Ao clicar no botão, a imagem e as informações serão permanentemente deletadas. 
                  </div>
                  <div class="modal-footer">
                    <button onClick={() => deleteDocument(animal.id)} className={styles.meubotao} type="button" data-bs-dismiss="modal" aria-label="Close"> Deletar </button>
                    
                  </div>
                </div>
              </div>
            </div>

              </div>
              </div>
              
            )
            }
          
            <br></br>
            </div>
            <br></br>
        </div>
    )
};
export default Profile;
