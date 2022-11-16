import React from "react";
import "./RecipeItem.scss";

const PostItem = (props) => {
    return (
        <div className="post">
            <h1 className="post__title">{props.recipe.title}</h1>
            <p>{props.recipe.description}</p>
            <p>
                {props.recipe.steps}
            </p>
            <p>{props.recipe.difficulty}</p>
            <ul>{props.recipe.ingredients && props.recipe.ingredients.map((item, index) => 
                <li key={index}>{item.title}</li>
                 )}
            </ul>
            <p>{props.recipe.time}</p>
            <button onClick={() => props.remove(props.recipe)} className="post__delete-button">Delete</button>
        </div>
    )
};

export default PostItem;