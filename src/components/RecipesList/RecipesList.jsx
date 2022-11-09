import React from "react";
import RecipeItem from "../RecipeItem/RecipeItem";
import cl from "./RecipesList.module.css";

const RecipeList = ({ recipes, remove }) => {
    return (
        <>
            <h1 className={cl.title}>Recipes book</h1>
            <div className={cl.recipes}>
                {recipes.map(recipe =>
                    <RecipeItem remove={remove} recipe={recipe} key={recipe.id} />
                )}
            </div>
        </>
    )
};

export default RecipeList;