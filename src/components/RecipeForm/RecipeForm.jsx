import React, { useState } from "react";
import "./RecipeForm.scss";

const RecipeForm = ({ create }) => {

    const [level, setLevel] = useState("easy")
    const [category, setCategory] = useState("meat")

    const [ingredients, setIngredients] = useState([])

    const [recipe, setRecipe] = useState({
        title: '',
        description: '',
        ingredients: [],
        time: '',
        difficulty: level,
        category: category,
        steps: ''
    })


    const [inputValue, setInputValue] = useState('');
    const [quant, setQuant] = useState(1);


    const handleIngredients = (e) => {
        e.preventDefault()
        const newItem = {
            title: inputValue,
            quantity: quant
        };

        const newItems = [...ingredients, newItem];
        setIngredients(newItems);
        setRecipe({ ...recipe, ingredients: newItems })
    };


    const changeDifficultyLevel = (e) => {
        setLevel(e.target.value);
        setRecipe({ ...recipe, difficulty: e.target.value })

    }

    const changeCategory = (e) => {
        setCategory(e.target.value);
        setRecipe({ ...recipe, category: e.target.value })

    }

    const addNewRecipe = (e) => {
        e.preventDefault()
        const newRecipe = {
            ...recipe, id: Date.now()
        }
        create(newRecipe)
    }

    return (
        <form className="recipe__form">
            <label htmlFor="title" className="recipe__title">Title</label>
            <input
                type="text"
                value={recipe.title}
                onChange={e =>
                    setRecipe({ ...recipe, title: e.target.value })}
                id="title"
                className="recipe__form-input"
            />
            <label htmlFor="description">Descriprion</label>
            <input
                id="description"
                type="text"
                value={recipe.description}
                className="recipe__form-input"
                onChange={e =>
                    setRecipe({ ...recipe, description: e.target.value })}
            />


            <label htmlFor="ingredients">Ingredients</label>
            <input
                id="ingredients-title"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <input
                id="ingredients-quantity"
                type="text"
                value={quant}
                onChange={(event) => setQuant(event.target.value)}
                className='add-item-input'
                placeholder='How much'
            />
            <div className='item-list'>
                {ingredients.map((item, index) => (
                    <div className='item-container' key={index}>
                        <span>{item.title}</span>
                        <div className='quantity'>
                            <span>{item.quantity}</span>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={handleIngredients}>Plus</button>


            <label htmlFor="steps">Steps</label>
            <textarea
                id="steps"
                name="steps"
                value={recipe.steps}
                className="recipe-form__input"
                onChange={e =>
                    setRecipe({ ...recipe, steps: e.target.value })} >
            </textarea>
            <label htmlFor="time">Time</label>
            <input
                id="time"
                type="text"
                value={recipe.time}
                className="recipe__form-input"
                onChange={e =>
                    setRecipe({ ...recipe, time: e.target.value })}
            />

            <h3 className="recipe__difficulty-title">Difficulty</h3>
            <div className="recipe__difficulty-wrapper">
                <div className="recipe__difficulty-easy">
                    <label htmlFor="easy" className="recipe__difficulty-label">
                        <input
                            type="radio"
                            id="easy"
                            name="difficulty"
                            value="easy"
                            className="recipe__difficulty-input"
                            checked={level === "easy"}
                            onChange={changeDifficultyLevel}
                        />
                        <span className="recipe__difficulty-name">easy</span>
                    </label>
                </div>
                <div className="recipe__difficulty-medium">
                    <label htmlFor="medium" className="recipe__difficulty-label">
                        <input
                            type="radio"
                            id="medium"
                            name="difficulty"
                            value="medium"
                            className="recipe__difficulty-input"
                            checked={level === "medium"}
                            onChange={changeDifficultyLevel}
                        />
                        <span className="recipe__difficulty-name">medium</span>
                    </label>
                </div>
                <div className="recipe__difficulty-hard">
                    <label htmlFor="hard" className="recipe__difficulty-label">
                        <input
                            type="radio"
                            id="hard"
                            name="difficulty"
                            value="hard"
                            className="recipe__difficulty-input"
                            checked={level === "hard"}
                            onChange={changeDifficultyLevel}
                        />
                        <span className="recipe__difficulty-name">hard</span>
                    </label>
                </div>
            </div>

            <label htmlFor="category" className="recipe__category-title">Category</label>
            <div>
                <div>
                    <div>
                        <input type="radio" id="desserts" value="desserts" checked={category === "desserts"} onChange={changeCategory} />
                        <label htmlFor="desserts">desserts</label>
                    </div>
                    <div>
                        <input type="radio" id="fish" value="fish" checked={category === "fish"} onChange={changeCategory} />
                        <label htmlFor="fish">fish</label>
                    </div>
                    <div>
                        <input type="radio" id="meat" value="meat" checked={category === "meat"} onChange={changeCategory} />
                        <label htmlFor="meat">meat</label>
                    </div>
                </div>
            </div>

            <button onClick={addNewRecipe}>Add a recipe</button>
        </form>
    )
};

export default RecipeForm;