import React, {useState} from "react";

const RecipeForm = ({create}) => {

    const [recipe, setRecipe] = useState({
        title: '',
        body: ''
    })

    const addNewRecipe = (e) => {
        e.preventDefault()
        const newRecipe = {
            ...recipe, id: Date.now()
        }
        create(newRecipe)
        setRecipe({
            title: '',
            body: ''
        })
    }


    return (
        <form>
            <input
                type="text"
                value={recipe.title}
                onChange={e =>
                    setRecipe({ ...recipe, title: e.target.value })}
                placeholder="Title"
            />
            <input
                type="text"
                placeholder="Description"
                value={recipe.body}
                onChange={e =>
                    setRecipe({ ...recipe, body: e.target.value })}
            />
            <button onClick={addNewRecipe}>Add a recipe</button>
        </form>
    )
};

export default RecipeForm;