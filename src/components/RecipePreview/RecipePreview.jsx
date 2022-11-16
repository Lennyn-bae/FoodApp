import React from "react";
import "./RecipePreview.scss";

const RecipePreview = (props) => {
    return (
        <div className="recipe-preview-card">
            <h1 className="recipe-preview-card__title">{props.recipe.title}</h1>
            <p className="recipe-preview-card__description">{props.recipe.description}</p>
         
        </div>
    )
};

export default RecipePreview;