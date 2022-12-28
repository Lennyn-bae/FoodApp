import React, { useState, useMemo } from "react";
import RecipeFilter from "../RecipeFilter/RecipeFilter";
import RecipePreview from "../RecipePreview/RecipePreview";
import cooking from "../../assets/images/cooking.svg";
import "./RecipesList.scss";


const RecipeList = ({ recipes, remove, filter, setFilter }) => {

    const [selectedCategory, setSelectedCategory] = useState("");

    function getFilteredList() {
        if (!selectedCategory) {
            return recipes;
        }
        return recipes.filter((item) => item.category === selectedCategory);
    }
    var filteredList = useMemo(getFilteredList, [selectedCategory, recipes]);

    function handleCategoryChange(event) {
        setSelectedCategory(event.target.value);
    }

    return (
        <>
            <div className="recipes__desktop-intro">
                <div>
                    <h1 className="recipes__book">Recipes book</h1>
                    <p className="recipes__book-desc">Every day find a way to make a new exciting meal</p>
                </div>
                <div className="recipes__desktop-image-container">
                    <img src={cooking} alt="food" className="recipes__desktop-image" />
                </div>
            </div>

            <div className="recipes">
                <div className="recipes__categories desktop">
                    <h3>Categories</h3>
                    <select
                        name="category-list"
                        id="category-list"
                        defaultValue={selectedCategory}
                        onChange={handleCategoryChange}
                        className="recipes__categories-container"
                        size={5}
                    >
                        <option value="" className="recipes__categories-item">All at once</option>
                        <option value="fish" className="recipes__categories-item">Fish</option>
                        <option value="meat" className="recipes__categories-item">Meat</option>
                        <option value="baking" className="recipes__categories-item">Baking</option>
                    </select>
                </div>
                <div className="recipes__filters-and-previews">
                    <RecipeFilter filter={filter} setFilter={setFilter} />
                    <div className="recipes__categories mobile">
                        <h3 className="recipes__categories-title">Categories</h3>
                        <div className="recipes__categories-scroll">
                            <select
                                name="category-list"
                                id="category-list"
                                defaultValue={selectedCategory}
                                onChange={handleCategoryChange}
                                className="recipes__categories-container"
                                size={5}
                            >
                                <option value="" className="recipes__categories-item">All at once</option>
                                <option value="fish" className="recipes__categories-item">Fish</option>
                                <option value="meat" className="recipes__categories-item">Meat</option>
                                <option value="baking" className="recipes__categories-item">Baking</option>
                            </select>
                        </div>
                    </div>
                    <div className="recipes__container snaps-inline">
                        {filteredList.length
                            ? filteredList.map(recipe =>
                                <RecipePreview recipe={recipe} key={recipe.id} remove={remove} className="recipes__item" />
                            )
                            : <p>There are no such recipies!</p>
                        }
                    </div>
                </div>

            </div>
        </>
    )
};

export default RecipeList;