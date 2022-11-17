import axios from "axios";
import React, { useEffect, useState } from "react";
import RecipeService from "../API/RecipeService";
import RecipeFilter from "../components/RecipeFilter/RecipeFilter";
import RecipeForm from "../components/RecipeForm/RecipeForm";
import RecipeList from "../components/RecipesList/RecipesList";
import MyModal from "../components/UI/MyModal/MyModal";
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

    // async function fetchRecipes() {
    //     setIsRecipesLoading(true)
    //     const allRecipes = await RecipeService.getAll(limit, page)
    //     setRecipes(allRecipes.data)
    //     setTotalCount(allRecipes.headers['x-total-count'])
    //     setIsRecipesLoading(false)

    // }

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
                difficulty: newRecipe.difficulty,
                ingredients: newRecipe.ingredients
            })

        setRecipes([...recipes, newRecipe])
        setModal(false)
    }

    const removeRecipe = (recipe) => {
        axios
            .delete(`http://localhost:3004/recipes/${recipe.id}`)
            .then(() => {
                alert("Post deleted!");
            });
        setRecipes(recipes.filter(p => p.id !== recipe.id))
    }

    return (
        <div className="App">
            {/* <button onClick={fetchRecipes}>Get Recipes</button> */}

            <button onClick={() => setModal(true)}>Create a recipe</button>

            <MyModal visible={modal} setVisible={setModal}>
                <RecipeForm create={createRecipe} />
            </MyModal>

            <RecipeFilter filter={filter} setFilter={setFilter} />

            {isLoading
                ? <h1>Loading</h1>
                : <RecipeList remove={removeRecipe} recipes={sortedAndSearchedRecipes} />
            }


        </div>
    );
}

export default Recipes;
