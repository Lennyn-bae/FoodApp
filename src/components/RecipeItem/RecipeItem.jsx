import React from "react";
import food from "../../assets/images/food.png";
import "./RecipeItem.scss";
// import { useParams } from "react-router-dom";
// import { useState } from "react";
// import { useFetching } from "../../hooks/useFetching";
// import RecipeService from "../../API/RecipeService";

const RecipeItem = (recipe, remove) => {
    const recipeItem = recipe.recipe;

    return (

       <section className="recipe">

                    <h1 className="recipe__title">{recipeItem.title}</h1>
                    {/* <p>{recipe.description}</p> */}
                    <div className="recipe__image-container">
                        <img src={food} alt="food" className="recipe__image" />
                    </div>


                    <div className="recipe__info">
                        <p>
                            <span className="recipe__difficulty">{recipeItem.difficulty}</span>
                            <span className="recipe__time">{recipeItem.time}</span>
                        </p>
                        <h3 className="recipes__ingrediets-title">Ingredients</h3>
                        <ul className="recipe__ingredients">
                            {recipeItem.ingredients && recipeItem.ingredients.map((item, index) =>
                                <li key={index} className="recipe__ingredient">{item.title}</li>
                            )}
                        </ul>
                        <p className="recipe__steps">
                            {recipeItem.steps}
                        </p>
                    </div>

                    {/* <button onClick={() => remove(recipe)} className="post__delete-button">Delete</button> */}
                </section>


    )
};

export default RecipeItem;