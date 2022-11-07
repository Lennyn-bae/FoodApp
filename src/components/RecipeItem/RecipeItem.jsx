import React from "react";
import cl from "./RecipeItem.module.css";

const PostItem = (props) => {
    return (
        <div className={cl.post}>
            <h1 className={cl.post__title}>{props.recipe.title}</h1>
            <p>
                {props.recipe.body}
            </p>
            <button onClick={() => props.remove(props.recipe)} className="post__delete-button">Delete</button>
        </div>
    )
};

export default PostItem;