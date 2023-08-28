import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";




const PostModal = ({animal}) => {

    return(
        
        <div>
            <h2>{animal.name} </h2>
            <p>{animal.createdBy}</p>


            



        </div>
    );
};
export default PostModal;