
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useFetching } from "../hooks/useFetching";
import RecipeService from "../API/RecipeService";
import RecipeItem from "../components/RecipeItem/RecipeItem";



const Recipe = (remove) => {
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
                : recipe
                &&
                <RecipeItem recipe={recipe} remove={remove}></RecipeItem>

            }
        </>
    );
}

export default Recipe;
