import React from "react";
import styles from '../../Home/Home.module.css'

const PostDetail = ({ animal, image}) => {

  return (
    <div className={styles.body}>
      <div className={styles.images}>
        <br></br>
    
        <div>
        <img key={animal.id} src={image} alt={`Image ${animal.id}`}  width= "100px" />


        <br></br>


        <h1>{animal.name}</h1>
        <h4>{animal.age}</h4>

        <button
          type="button"
          className={styles.meubotao}
          data-bs-toggle="modal"
          data-bs-target={`#${animal.id}`}>
          Informações         
        </button>
        <br></br>
        <br></br>
        <div className={styles.modal}>
          <div class="modal fade" id={animal.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id={animal.id}> <b> Me chamo: </b>{animal.name}   </h1>
                </div>
                <div class="modal-body">
                  <p><b> Minha idade aproximadamente: </b>{animal.age}</p>
                  <p><b>Minha raça: </b>{animal.race}</p>
                  <p><b>Meu porte: </b>{animal.porte}</p>
                  <p><b>Onde resido: </b>{animal.city}</p>
                  <p><b>Entre em contato através de: </b>{animal.contact}</p>
                  <p><b>Cadastrado por: </b>{animal.createdBy}</p>
                </div>
                <div class="modal-footer">
                  <button type="button" className={styles.meubotao} data-bs-dismiss="modal">Fechar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

            
        </div>

        


    </div>
  );
};

export default PostDetail;
