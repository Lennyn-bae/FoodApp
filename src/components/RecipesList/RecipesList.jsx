import React from "react";
import RecipeItem from "../RecipeItem/RecipeItem";
import cl from "./RecipesList.module.css";

const RecipeList = ({ recipes, remove }) => {
    return (
        <div className={cl.recipes}>
            <h1 className={cl.title}>Recipes book</h1>
            {recipes.map(recipe =>
                <RecipeItem remove={remove} recipe={recipe} key={recipe.id} />
            )}
        </div>
    )
};

export default RecipeList;