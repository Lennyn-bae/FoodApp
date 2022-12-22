import React from "react";
import "./RecipePreview.scss";
import food from "../../assets/images/food.png";
import { ReactComponent as IconOpen } from "../../assets/icons/open.svg";
import { Link } from "react-router-dom";

const RecipePreview = (props) => {

    return (
        <div className={props.className}>
            <div className="recipe__image-container">
                <img src={food} alt="food" className="recipe__image" />
                <Link to={`/recipes/${props.recipe.id}`}  className="recipe-preview-card__link">
                    <IconOpen className="recipe-preview-card__icon-open" />
                </Link>
            </div>   
            <h1 className="recipe-preview-card__title">{props.recipe.title}</h1>
            <p className="recipe-preview-card__description">{props.recipe.description}</p>
            
            {/* <button onClick={()=> props.remove(props.recipe)}>Delete</button> */}
        </div>
    )
};

export default RecipePreview;