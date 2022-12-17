import React from "react";
import "./RecipePreview.scss";
import { Link } from "react-router-dom";

const RecipePreview = (props) => {

    return (
        <div className={props.className}>
            <h1 className="recipe-preview-card__title">{props.recipe.title}</h1>
            <p className="recipe-preview-card__description">{props.recipe.description}</p>
            <Link to={`/recipes/${props.recipe.id}`}>Open</Link>
            {/* <button onClick={()=> props.remove(props.recipe)}>Delete</button> */}
        </div>
    )
};

export default RecipePreview;