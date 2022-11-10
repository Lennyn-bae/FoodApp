import React, {useState} from "react";
import cl from "./RecipeForm.module.css";

const RecipeForm = ({create}) => {

    const [recipe, setRecipe] = useState({
        title: '',
        description: '',
        ingredients: ''
    })

    const addNewRecipe = (e) => {
        e.preventDefault()
        const newRecipe = {
            ...recipe, id: Date.now()
        }
        create(newRecipe)
        setRecipe({
            title: '',
            description: '',
            ingredients: ''
        })
    }


    return (
        <form className={cl.recipe_form}>
            <label htmlFor="title">Title</label>
            <input
                type="text"
                value={recipe.title}
                onChange={e =>
                    setRecipe({ ...recipe, title: e.target.value })}
                id="title"
            />
            <label htmlFor="description">Descriprion</label>
            <input
                id="description"
                type="text"
                value={recipe.description}
                onChange={e =>
                    setRecipe({ ...recipe, description: e.target.value })}
            />
            <label htmlFor="ingredients">Ingredients</label>
            <input
                type="text"
                value={recipe.ingredients}
                onChange={e =>
                    setRecipe({ ...recipe, ingredients: e.target.value })}
            />
            <label htmlFor="steps">Steps</label>
            <textarea id="steps" name="steps">
            </textarea>
            <label htmlFor="time">Time</label>
            <input
                id="time"
                type="text"
                value={recipe.time}
                onChange={e =>
                    setRecipe({ ...recipe, time: e.target.value })}
            />
            <label htmlFor="difficulty">Difficulty</label>
            <div>
                <div>
                    <div>
                        <input type="radio" id="easy"/>
                            <label htmlFor="easy">easy</label>
                    </div>
                    <div>
                        <input type="radio" id="medium"/>
                            <label htmlFor="medium">medium</label>
                    </div>
                    <div>
                        <input type="radio" id="hard"/>
                            <label htmlFor="hard">hard</label>
                    </div>
                </div>
            </div>
        
            <button onClick={addNewRecipe}>Add a recipe</button>
        </form>
    )
};

export default RecipeForm;