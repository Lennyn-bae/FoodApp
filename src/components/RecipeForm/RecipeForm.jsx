import React, { useState } from "react";
import { ReactComponent as IconLightning } from "../../assets/icons/lightning.svg";
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
            <div className="recipe__form-intro">
                <label htmlFor="title" className="recipe__title">Title</label>
                <input
                    type="text"
                    value={recipe.title}
                    onChange={e =>
                        setRecipe({ ...recipe, title: e.target.value })}
                    id="title"
                    className="recipe__form-input"
                />
       
                <label htmlFor="time">Time</label>
                <input
                    id="time"
                    type="text"
                    value={recipe.time}
                    className="recipe__form-input"
                    onChange={e =>
                        setRecipe({ ...recipe, time: e.target.value })}
                />
            </div>
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
            <div className="recipe__ingredients">
                <input
                    id="ingredients-title"
                    type="text"
                    value={inputValue}
                    className="recipe__form-input"
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <input
                    id="ingredients-quantity"
                    type="text"
                    value={quant}
                    onChange={(event) => setQuant(event.target.value)}
                    className="recipe__form-input recipe__form-quantity"
                    placeholder='How much'
                />
            </div>

            <div className="recipe__added-products">
                {ingredients.map((item, index) => (
                    <div className="recipe__product-wrapper" key={index}>
                        <span className="recipe__product-name">{item.title}</span>
                        <span className="recipe__product0quantity">{item.quantity}</span>
                    </div>
                ))}
            </div>
            <button onClick={handleIngredients}>Plus</button>


            <label htmlFor="steps">Steps</label>
            <textarea
                id="steps"
                name="steps"
                rows={6}
                value={recipe.steps}
                className="recipe__form-text"
                onChange={e =>
                    setRecipe({ ...recipe, steps: e.target.value })} >
            </textarea>


            <h3 className="recipe__difficulty-title">Difficulty</h3>
            <div className="recipe__difficulty-wrapper">
                <div className="recipe__difficulty">
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
                        <span className="recipe__difficulty-name">
                            {level === "easy"
                                ? <IconLightning className="recipe__difficulty-icon" />
                                : null
                            }
                            easy
                        </span>
                    </label>
                </div>
                <div className="recipe__difficulty">
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
                        <span className="recipe__difficulty-name">
                            {level === "medium"
                                ? <IconLightning className="recipe__difficulty-icon" />
                                : null
                            }
                            medium
                        </span>
                    </label>
                </div>
                <div className="recipe__difficulty">
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
                        <span className="recipe__difficulty-name">
                            {level === "hard"
                                ? <IconLightning className="recipe__difficulty-icon" />
                                : null
                            }
                            hard
                        </span>
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