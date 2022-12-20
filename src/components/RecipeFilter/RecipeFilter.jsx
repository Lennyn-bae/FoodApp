import React from "react";
import MySelect from "../UI/MySelect/MySelect";
import "./RecipeFilter.scss";

const RecipeFilter = ({filter, setFilter}) => {

    return (
        <div className="recipe__filters">
            <input
                placeholder="Find a meal for today"
                value={filter.query}
                className="recipe__search"
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Sort by"
                className="recipe__sorting"
                options={[
                    { value: 'title', name: "By name" },
                    { value: 'description', name: "By description" }
                ]}
            />
        </div>
    )
};

export default RecipeFilter;