import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js";
import styles from './About.module.css';
import { useNavigate } from "react-router-dom";

function About(){

    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/home');
      }

    return(
        <div className={styles.bodyabout}>
    
          <div className={styles.nav}>
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
              </ul>
            </div>
          </div>
        </nav>
        </div>
        
        <br></br>
        <br></br>

        <div className={styles.text}>
            
                <p>
                Inicialmente gostaria de agradecer a Deus, à Eufrázia, Ronan, Raiana, Zequinha e Neguinha, minha família, que me formaram capaz de ajudar quem precisa, seja racional ou não. À minha madrinha e ao meu padrinho, que plantaram em mim o amor pelos animais (em especial, cada cachorro que chegaram a ter). E por último, à Pedro Emanoel e aos meus amigos, que não desistiram de mim quando precisei priorizar este projeto. Eu amo vocês!
                </p>
                <p>O ZooNation nasceu quando minha cadelinha, Neguinha, pariu 9 filhotes. Eu e minha irmã ficamos responsáveis por doar cada filhote, o que demorou meses para realizar. A ideia de unir a tecnologia à necessidade se deu devido a um trabalho de conclusão de curso, onde tive a oportunidade de tornar concreta a ajuda para quem, normalmente, não é visto. 
                </p>
                <p>Se você tem a oportunidade de ajudar qualquer animal, não desperdice.</p>
                <p>Caso saiba de algum animal sofrendo abuso, denuncie pelo telefone 0800 61 8080 (gratuitamente) ou pelo email para linhaverde.sede@ibama.gov.br.
                </p>
                <br></br>
                <br></br>

            </div>

        </div>
            
            
            
            
            
            
            
        
        
    );

    
};

export default About;