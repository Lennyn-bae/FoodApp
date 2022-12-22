import axios from "axios";
import React, { useEffect, useState } from "react";
import RecipeService from "../API/RecipeService";
import RecipeForm from "../components/RecipeForm/RecipeForm";
import RecipeList from "../components/RecipesList/RecipesList";
import RecipeCreationModal from "../components/UI/RecipeCreationModal/RecipeCreationModal";
import { ReactComponent as IconEdit } from "../assets/icons/edit.svg";
import { useFetching } from "../hooks/useFetching";
import { useRecipes } from "../hooks/useRecipes";



function Recipes() {

    const [recipes, setRecipes] = useState([])

    const [filter, setFilter] = useState({
        sort: '',
        query: ''
    })

    const [modal, setModal] = useState(false)
    
    const [fetchRecipes, isLoading] = useFetching(async () => {
        const allRecipes = await RecipeService.getAll()
        setRecipes(allRecipes.data)
    })


    useEffect(() => {
        fetchRecipes()
    }, [])

    const sortedAndSearchedRecipes = useRecipes(recipes, filter.sort, filter.query);

    const createRecipe = (newRecipe) => {
        axios
            .post('http://localhost:3004/recipes', {
                title: newRecipe.title,
                description: newRecipe.description,
                time: newRecipe.time,
                serving: newRecipe.serving,
                difficulty: newRecipe.difficulty,
                ingredients: newRecipe.ingredients,
                steps: newRecipe.steps
            })
        setRecipes([...recipes, newRecipe])
        setModal(false)
    }

    const removeRecipe = (recipe) => {
        axios
            .delete(`http://localhost:3004/recipes/${recipe.id}`)
            .then(() => {
                console.log("Recipe was deleted!");
            });
        setRecipes(recipes.filter(rec => rec.id !== recipe.id))
    }


    return (
        <section className="App">
            <RecipeCreationModal visible={modal} setVisible={setModal}>
                <RecipeForm create={createRecipe} />
            </RecipeCreationModal>
            {isLoading
                ? <h1>Loading</h1>
                : <RecipeList recipes={sortedAndSearchedRecipes} remove={removeRecipe} filter={filter} setFilter={setFilter} />
            }
            <button
                className="recipe__button-add"
                onClick={() => setModal(true)}>
                Add a recipe
                <IconEdit className="recipe__button-add-icon" />
            </button>
        </section>
    );
}

export default Recipes;
