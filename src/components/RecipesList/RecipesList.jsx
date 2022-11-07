import React from "react";
import RecipeItem from "../RecipeItem/RecipeItem";

const RecipeList = ({ recipes, remove }) => {
    return (
        <div>
            <h1>Recipes book</h1>
            {recipes.map(recipe =>
                <RecipeItem remove={remove} recipe={recipe} key={recipe.id} />
            )}
        </div>
    )
};

export default RecipeList;