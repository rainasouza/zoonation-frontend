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


            



        </div>
    );
};
export default PostDetail;