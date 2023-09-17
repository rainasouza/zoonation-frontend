import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";


const PostDetail = ({animal}) => {
    
    return(
        <div>
            <img src = {animal.image} alt={animal.name} />
            <h2>{animal.name}</h2>
            <p>{animal.createdBy}</p>

            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${animal.id}`}>
              Launch demo modal
            </button>
            <div class="modal fade" id={animal.id}  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id={animal.id} >Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">

                  <h2>{animal.name}</h2>
                  <p>{animal.createdBy}</p>                  

                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
        
    );
};
export default PostDetail;