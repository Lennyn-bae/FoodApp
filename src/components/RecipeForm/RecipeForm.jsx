import React, { useState } from "react";
import { ReactComponent as IconLightning } from "../../assets/icons/lightning.svg";
import { ReactComponent as IconPlus } from "../../assets/icons/plus.svg";
import "./RecipeForm.scss";

const RecipeForm = ({ create }) => {

    const [level, setLevel] = useState("easy")
    const [category, setCategory] = useState("fish")

    const [ingredients, setIngredients] = useState([])

    const [recipe, setRecipe] = useState({
        title: '',
        description: '',
        ingredients: [],
        time: '',
        serving: '',
        category: category,
        difficulty: level,
        steps: ''
    })


    const [inputValue, setInputValue] = useState('');
    const [quant, setQuant] = useState('');


    const handleIngredients = (e) => {
        e.preventDefault()
        const newItem = {
            title: inputValue,
            quantity: quant
        };

        const newItems = [...ingredients, newItem];
        setIngredients(newItems);
        setRecipe({ ...recipe, ingredients: newItems });
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

                <input
                    type="text"
                    value={recipe.title}
                    onChange={e =>
                        setRecipe({ ...recipe, title: e.target.value })}
                    id="title"
                    className="recipe__form-input recipe__form-title"
                    placeholder="Title"
                    required
                />

                <input
                    id="time"
                    type="text"
                    value={recipe.time}
                    className="recipe__form-input recipe__form-time"
                    placeholder="Cooking time"
                    required
                    onChange={e =>
                        setRecipe({ ...recipe, time: e.target.value })}
                />

            </div>
            <input
                id="description"
                type="text"
                value={recipe.description}
                className="recipe__form-input"
                placeholder="Description"
                onChange={e =>
                    setRecipe({ ...recipe, description: e.target.value })}
            />
            <input
                id="serving"
                type="text"
                value={recipe.serving}
                className="recipe__form-input recipe__form-serving"
                placeholder="Serving... How many?"
                onChange={e =>
                    setRecipe({ ...recipe, serving: e.target.value })}
            />
            <h4 className="recipe__category-title">Category</h4>
            <div className="recipe__category-wrapper">
                <label htmlFor="fish" className="recipe__category-label">
                    <input
                        type="radio"
                        id="fish"
                        name="category"
                        value="fish"
                        className="recipe__category-input"
                        checked={category === "fish"}
                        onChange={changeCategory}
                    />
                    <span className="recipe__category-name">
                        fish
                    </span>
                </label>
                <label htmlFor="meat" className="recipe__category-label">
                    <input
                        type="radio"
                        id="meat"
                        name="category"
                        value="meat"
                        className="recipe__category-input"
                        checked={category === "meat"}
                        onChange={changeCategory}
                    />
                    <span className="recipe__category-name">
                        meat
                    </span>
                </label>
                <label htmlFor="baking" className="recipe__category-label">
                    <input
                        type="radio"
                        id="baking"
                        name="category"
                        value="baking"
                        className="recipe__category-input"
                        checked={category === "baking"}
                        onChange={changeCategory}
                    />
                    <span className="recipe__category-name">
                        baking
                    </span>
                </label>
            </div>

            <h4 className="recipe__part-title" htmlFor="ingredients">Ingredients</h4>
            <div className="recipe__ingredients">
                <input
                    id="ingredients-title"
                    type="text"
                    value={inputValue}
                    placeholder="Ingredient title"
                    className="recipe__form-input recipe__form-title"
                    required
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <input
                    id="ingredients-quantity"
                    type="text"
                    value={quant}
                    required
                    onChange={(event) => setQuant(event.target.value)}
                    className="recipe__form-input recipe__form-quantity"
                    placeholder="How much"
                />
                <button className="recipe__button-plus" onClick={handleIngredients}>
                    <IconPlus className="recipe__button-plus-icon" />
                </button>
            </div>
            {ingredients.length
                ?
                <div className="recipe__products-wrapper">
                    <div className="recipe__added-products">
                        {ingredients.map((item, index) => (
                            <div className="recipe__product-wrapper" key={index}>
                                <span className="recipe__product-name">{item.title} -</span>
                                <span className="recipe__product-quantity"> {item.quantity}</span>
                            </div>
                        ))}
                    </div>
                </div>
                :
                null
            }
            <h4 className="recipe__part-title" htmlFor="steps">Steps</h4>
            <textarea
                id="steps"
                name="steps"
                rows={6}
                value={recipe.steps}
                required
                className="recipe__form-text"
                placeholder="First of all..."
                onChange={e =>
                    setRecipe({ ...recipe, steps: e.target.value })} >
            </textarea>

            <h4 className="recipe__difficulty-title">Difficulty</h4>
            <div className="recipe__difficulty-wrapper">
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
            <button className="recipe__button-create" onClick={addNewRecipe}>Create</button>
        </form>
    )
};

export default RecipeForm;