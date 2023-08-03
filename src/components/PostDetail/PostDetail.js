import { Link } from "react-router-dom";

const PostDetail = ({animal}) => {
    return(
        <div>
            <img src = {animal.image} alt={animal.title} />
            <h2>{animal.title}</h2>
            <p>{animal.createdBy}</p>


            <Link to ={`/animals/${animal.id}`} className="btn btn-outline">Ler</Link>/
        </div>
    );
};
export default PostDetail;