import React from "react";

const PostPreview = (props) => {
    return (
        <div>
            <h1>{props.recipe.title}</h1>
            <p>{props.recipe.description}</p>
         
        </div>
    )
};

export default PostPreview;