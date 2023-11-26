import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
import styles from './PostDetail.module.css'


const PostDetail = ({animal}) => {
    
    return(
      <div className={styles.body}>

        <div className={styles.images}>
          <br></br>

            <img src = {animal.image} alt={animal.name} />
            <h2>{animal.name}</h2>
            <p>{animal.age}</p>
  
      
            <button type="button" className={styles.meubotao} data-bs-toggle="modal" data-bs-target={`#${animal.id}`}>
              Informações
            </button>
            <br></br>
            <br></br>
            <div className={styles.modal}>
            <div class="modal fade" id={animal.id}  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id={animal.id}> Cadastrado por: {animal.createdBy}   </h1>
                  </div>
                  <div class="modal-body">

                  <p><b> Me chamo: </b>{animal.name}</p>
                  <p><b> Minha idade aproximadamente: </b>{animal.age}</p> 
                  <p><b>Minha raça: </b>{animal.race}</p>
                  <p><b>Meu porte: </b>{animal.porte}</p>
                  <p><b>Onde resido: </b>{animal.city}</p>
                  <p><b>Entre em contato através de: </b>{animal.contact}</p>

                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </div>
        <br></br>
        <br></br>

        </div>

      
        
    );
};
export default PostDetail;