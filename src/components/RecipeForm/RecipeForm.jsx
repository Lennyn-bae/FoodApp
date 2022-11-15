import React, {useState} from "react";
import cl from "./RecipeForm.module.css";

const RecipeForm = ({create}) => {

    const [level, setLevel] = useState("easy")
    const [ingredient, setIngredient] = useState({
        title: '',
        quatity: ''
    })

    const [recipe, setRecipe] = useState({
        title: '',
        description: '',
        ingredients: [{
            title: '',
            quantity: ''
        }],
        time: '',
        difficulty: ''
    })

    function changeCheckbox(event) {
        setLevel(event.target.value);
        setRecipe({ ...recipe, difficulty: event.target.value })

    }

    const addNewRecipe = (e) => {
        e.preventDefault()
        const newRecipe = {
            ...recipe, id: Date.now()
        }
        create(newRecipe)
        setRecipe({
            title: '',
            description: '',
            ingredients: [{
                title: '',
                quantity: ''
            }],
            time: '',
            difficulty: ''
        })
    }

    const addIngredient = (e) => {
        e.preventDefault()
      
        setIngredient({
            title: '',
            quantity: ''
        })
        setRecipe({ ...recipe, ingredients: e.target.value  })
    }
console.log(recipe)

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
                id="ingredients"
                type="text"
                value={recipe.ingredients.title}
                onChange={e =>
                    setRecipe({ ...recipe, ingredients: e.target.value })}
            />
            <button onClick={addIngredient}>Plus</button>
           
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
                    <div >
                        <input type="radio" id="easy" name="difficulty" value="easy" checked={level === "easy"} onChange={changeCheckbox} />
                            <label htmlFor="easy">easy</label>
                    </div>
                    <div>
                        <input type="radio" id="medium" name="difficulty" value="medium" checked={level === "medium"} onChange={changeCheckbox} />
                            <label htmlFor="medium">medium</label>
                    </div>
                    <div>
                        <input type="radio" id="hard" name="difficulty" value="hard" checked={level === "hard"} onChange={changeCheckbox} />
                            <label htmlFor="hard">hard</label>
                    </div>
                </div>
            </div>
            <label htmlFor="">Category</label>
            <div>
                <div>
                    <div>
                        <input type="radio" id="desserts" />
                        <label htmlFor="desserts">desserts</label>
                    </div>
                    <div>
                        <input type="radio" id="fish" />
                        <label htmlFor="fish">fish</label>
                    </div>
                    <div>
                        <input type="radio" id="meat" />
                        <label htmlFor="meat">meat</label>
                    </div>
                </div>
            </div>
        
            <button onClick={addNewRecipe}>Add a recipe</button>
        </form>
    )
};

export default RecipeForm;