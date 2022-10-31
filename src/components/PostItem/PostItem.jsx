import React from "react";

const PostItem = (props) => {
    return (
        <div>
            <h1>{props.recipe.title}</h1>
            <p>
                {props.recipe.body}
            </p>
            <button onClick={() => props.remove(props.recipe)} >Delete</button>
        </div>
    )
};

export default PostItem;