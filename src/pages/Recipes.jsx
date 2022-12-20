import axios from "axios";
import React, { useEffect, useState } from "react";
import RecipeService from "../API/RecipeService";
import RecipeFilter from "../components/RecipeFilter/RecipeFilter";
import RecipeForm from "../components/RecipeForm/RecipeForm";
import RecipeList from "../components/RecipesList/RecipesList";
import RecipeCreationModal from "../components/UI/RecipeCreationModal/RecipeCreationModal";
import { useFetching } from "../hooks/useFetching";
import { useRecipes } from "../hooks/useRecipes";



function Recipes() {

    const [recipes, setRecipes] = useState([])

    const [filter, setFilter] = useState({
        sort: '',
        query: ''
    })


    const [totalCount, setTotalCount] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const [modal, setModal] = useState(false)
    // const [isRecipesLoading, setIsRecipesLoading] = useState(false)


    const [fetchRecipes, isLoading] = useFetching(async () => {
        const allRecipes = await RecipeService.getAll(limit, page)
        setRecipes(allRecipes.data)
        setTotalCount(allRecipes.headers['x-total-count'])
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

            <RecipeFilter filter={filter} setFilter={setFilter} />

            {isLoading
                ? <h1>Loading</h1>
                : <RecipeList recipes={sortedAndSearchedRecipes} remove={removeRecipe} />
            }

            <button className="recipe__button-add"  onClick={() => setModal(true)}>Add a recipe</button>
        </section>
    );
}

export default Recipes;
