import React, { useEffect } from "react";
import "./RecipeItem.scss";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import RecipeService from "../../API/RecipeService";

const RecipeItem = () => {

    const params = useParams();

    const [recipe, setRecipe] = useState(null);
    const [fetchRecipeById, isLoading, error] = useFetching(async () => {
        const response = await RecipeService.getById(params.id);
        setRecipe(response.data)
    })

    useEffect(() => {
        fetchRecipeById()
    },[])

  console.log(recipe.title)
    return (

        <div>
            {isLoading
                ? <p>Loading</p>
                : <div className="post">
                    
                    {/* <h1 className="post__title">{recipe.title}</h1>
                    <p>{recipe.description}</p>
                    <p>
                        {recipe.steps}
                    </p>
                    <p>{recipe.difficulty}</p>
                    <ul>{recipe.ingredients && recipe.ingredients.map((item, index) =>
                        <li key={index}>{item.title}</li>
                    )}
                    </ul>
                    <p>{recipe.time}</p>
                    <button onClick={() => recipe.remove(recipe)} className="post__delete-button">Delete</button> */}
                </div>
            }
        </div>
    )
};

export default RecipeItem;