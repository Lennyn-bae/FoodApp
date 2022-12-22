import React from "react";
import RecipeFilter from "../RecipeFilter/RecipeFilter";
import RecipePreview from "../RecipePreview/RecipePreview";
import "./RecipesList.scss";

const RecipeList = ({ recipes, remove, filter, setFilter }) => {

    return (
        <>
            <h1 className="recipes-book">Recipes book</h1>
            <RecipeFilter filter={filter} setFilter={setFilter} />
            <div className="recipes">
                <div className="recipes__container snaps-inline">
                    {recipes.map(recipe =>
                        <RecipePreview recipe={recipe} key={recipe.id} remove={remove} className="recipes__item" />
                    )}
                </div>
            </div>
        </>
    )
};

export default RecipeList;