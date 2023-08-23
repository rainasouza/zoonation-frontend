import { useNavigate, Link, useActionData } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Profile.css"
import Signup from "../Signup/Signup";

//hooks
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useAuthetication } from "../../hooks/useAuthetication";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";



const Profile = () =>{
    const navigate = useNavigate();
    



    const navigateToHome = () => {
        navigate('/home');
    }
    const navigateToProfile = () => {
        navigate('/profile');
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const { logout } = useAuthetication();

    const {deleteDocument} = useDeleteDocument("animals");



    const {user} = useAuthValue();
    const uid = user.uid;
    const {documents: animals, loading} = useFetchDocuments("animals", null,uid);

    return(
      
        <div>
          

<nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand">ZooNation</a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <a className="nav-link active" aria-current="page" onClick={navigateToHome} >Home</a>
              <a className="nav-link active" aria-current="page" onClick={navigateToProfile} >Profile</a>


              {user && (
                <li className="nav-item">
                  <button className="btn btn-outline-success" aria-current="page" onClick={logout}>Sair</button>
                </li>
              )}
              </ul>
            </div>
          </div>
        </nav>
        <br></br>


            {animals && animals.map((animal) =>
            <div key = {animal.id} className="wrapper">
              <h3>{animal.name}</h3>

                
     
            <button onClick={() => deleteDocument(animal.id)} className="btn btn-outline-dark"> Excluir </button>
              
            
            </div>)};
        </div>
    )
};
export default Profile;
