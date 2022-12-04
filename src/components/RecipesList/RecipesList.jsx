import React from "react";
// import RecipeItem from "../RecipeItem/RecipeItem";
import RecipePreview from "../RecipePreview/RecipePreview";
import "./RecipesList.scss";

const RecipeList = ({ recipes, remove }) => {
    return (
        <>
            <h1 className="title">Recipes book</h1>
            <div className="recipes">
                <div className="recipes__container snaps-inline">
                        {recipes.map(recipe =>
                            // <RecipeItem remove={remove} recipe={recipe} key={recipe.id} />
                            <RecipePreview recipe={recipe} key={recipe.id} className="recipes__item" />
                        )}
                </div>
            </div>
        </>
    )
};

export default RecipeList;