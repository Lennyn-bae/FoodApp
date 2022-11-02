import React from "react";
import "../../styles/PostItem.css";

const PostItem = (props) => {
    return (
        <div className="post">
            <h1 className="post__title" >{props.recipe.title}</h1>
            <p>
                {props.recipe.body}
            </p>
            <button onClick={() => props.remove(props.recipe)} className="post__delete-button">Delete</button>
        </div>
    )
};

export default PostItem;