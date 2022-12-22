import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconBack } from "../../assets/icons/back.svg";
import { ReactComponent as IconLevel } from "../../assets/icons/level.svg";
import { ReactComponent as IconTime } from "../../assets/icons/clock.svg";
import { ReactComponent as IconServing } from "../../assets/icons/serving.svg";
import food from "../../assets/images/food.png";
import "./RecipeItem.scss";

const RecipeItem = (recipe, remove) => {
    const recipeItem = recipe.recipe;

    return (
        <section className="recipe">
            <div className="recipe__item-intro">
                <Link to={`/`} className="recipe__item-back">
                    <IconBack className="recipe__back-icon"/>
                </Link>
                <h1 className="recipe__title">{recipeItem.title}</h1>
            </div>
            <div className="recipe__item-image recipe__image-container">
                <img src={food} alt="food" className="recipe__image" />
            </div>
            <div className="recipe__info">
                <div className="recipe__short-info">
                    <span className="recipe__serving recipe__icon">
                        <IconServing></IconServing>
                        {recipeItem.serving}
                    </span>
                    <span className="recipe__difficulty recipe__icon">
                        <IconLevel></IconLevel>
                        {recipeItem.difficulty}
                    </span>
                    <span className="recipe__time recipe__icon">
                        <IconTime></IconTime>
                        {recipeItem.time}
                    </span>
                </div>
                <h3 className="recipe__ingredients-title">Ingredients</h3>
                <ul className="recipe__item-ingredients">
                    {recipeItem.ingredients && recipeItem.ingredients.map((item, index) =>
                        <li key={index} className="recipe__ingredient">
                            <span>{item.title}</span> 
                            <span>{item.quantity}</span> 
                        </li>
                    )}
                </ul>
                <p className="recipe__steps">
                    {recipeItem.steps}
                </p>
            </div>

           
        </section>


    )
};

export default RecipeItem;