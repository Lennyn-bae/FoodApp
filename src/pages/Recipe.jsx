
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useFetching } from "../hooks/useFetching";
import RecipeService from "../API/RecipeService";
import RecipeItem from "../components/RecipeItem/RecipeItem";



const Recipe = () => {
    const params = useParams();

    const [recipe, setRecipe] = useState(null);
    const [fetchRecipeById, isLoading] = useFetching(async () => {
        const response = await RecipeService.getById(params.id);
        setRecipe(response.data)
    })



    useEffect(() => {
        fetchRecipeById()
    }, [])


    return (
        <>
            {isLoading
                ?
                <p>Loading</p>
                : recipe && <RecipeItem recipe={recipe}></RecipeItem>
                // <section className="recipe">

                //     <h1 className="recipe__title">{recipe.title}</h1>
                //     {/* <p>{recipe.description}</p> */}
                //     <div className="recipe__image-container">
                //         <img src={food} alt="food" className="recipe__image" />
                //     </div>


                //     <div className="recipe__info">
                //         <p>
                //             <span className="recipe__difficulty">{recipe.difficulty}</span>
                //             <span className="recipe__time">{recipe.time}</span>
                //         </p>
                //         <h3 className="recipes__ingrediets-title">Ingredients</h3>
                //         <ul className="recipe__ingredients">
                //             {recipe.ingredients && recipe.ingredients.map((item, index) =>
                //                 <li key={index} className="recipe__ingredient">{item.title}</li>
                //             )}
                //         </ul>
                //         <p className="recipe__steps">
                //             {recipe.steps}
                //         </p>
                //     </div>

                //     {/* <button onClick={() => remove(recipe)} className="post__delete-button">Delete</button> */}
                // </section>
            }
        </>
    );
}

export default Recipe;
