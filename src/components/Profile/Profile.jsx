import { useNavigate } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.min.js";
import styles from '../Home/Home.module.css';
// hooks
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import {useDeleteDocument} from "../../hooks/useDeleteDocument"

const Profile = () => {
    const navigate = useNavigate();
    
    const navigateToHome = () => {
        navigate('/home');
    }
    const { deleteDocument } = useDeleteDocument("animals");
    const { user } = useAuthValue();
    const uid = user.uid;
    const { documents: animals } = useFetchDocuments("animals", uid);

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
                                    <a className="nav-link active" aria-current="page" onClick={navigateToHome}>Home</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <br /><br />
            </div>
            
            <div>
                <br />
                {animals && animals.map((animal) => (
                    <div className={styles.body} key={animal.id}>
                        <div className={styles.box}>
                            <h2><b>Animal Cadastrado: </b>{animal.name}</h2>
                            <button type="button" className={styles.meubotao} data-bs-toggle="modal" data-bs-target={`#modal-${animal.id}`}>
                                Deletar
                            </button>
                            <div className="modal fade" id={`modal-${animal.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-sm">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Apagar Postagem</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            Você tem certeza que deseja apagar a postagem? Ao clicar no botão, a imagem e as informações serão permanentemente deletadas.
                                        </div>
                                        <div className="modal-footer">
                                            <button onClick={() => deleteDocument(animal.id)} className={styles.meubotao} type="button" data-bs-dismiss="modal">Deletar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <br />
            </div>
            <br />
        </div>
    );
};
export default Profile;
