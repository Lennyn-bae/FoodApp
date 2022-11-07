import React, { useEffect, useMemo, useState } from "react";
import RecipeService from "./API/RecipeService";
import RecipeFilter from "./components/RecipeFilter/RecipeFilter";
import RecipeForm from "./components/RecipeForm/RecipeForm";
import RecipeList from "./components/RecipesList/RecipesList";
import MyModal from "./components/UI/MyModal/MyModal";



function App() {

  const [recipes, setRecipes] = useState([
    { id: 1, title: 'AChocolate', body: 'MDecription' },
    { id: 2, title: 'DChocolate Milk', body: 'FDecription ttttttttttttttt' },
    { id: 3, title: 'Chocolate Dark', body: 'Decription ggggggggggggggggg' }
  ])

  const [filter, setFilter] = useState({
    sort: '',
    query: ''
  })
  const [totalCount, setTotalCount] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [modal, setModal] = useState(false)
  const [isRecipesLoading, setIsRecipesLoading] = useState(false)


  async function fetchRecipes() {
    setIsRecipesLoading(true)
    const allRecipes = await RecipeService.getAll(limit, page)
    setRecipes(allRecipes.data)
    setTotalCount(allRecipes.headers['x-total-count'])
    setIsRecipesLoading(false)
   
  }

  useEffect(() => {
    fetchRecipes()
  }, [])

  const sortedRecipes = useMemo(() => {
    if (filter.sort) {
      return [...recipes].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return recipes;
  }, [filter.sort, recipes])

  const sortedAndSearchedRecipes = useMemo(() => {
    return sortedRecipes.filter(recipe => recipe.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedRecipes])



  const createRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe])
    setModal(false)
  }

  const removeRecipe = (recipe) => {
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

      {isRecipesLoading
        ? <h1>Loading</h1>
        : <RecipeList remove={removeRecipe} recipes={sortedAndSearchedRecipes} />
      }


    </div>
  );
}

export default App;
