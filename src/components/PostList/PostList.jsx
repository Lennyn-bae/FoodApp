import React from "react";
import PostItem from "../PostItem/PostItem";

const PostList = ({ recipes, remove }) => {
    return (
        <div>
            <h1>List of recipes</h1>
            {recipes.map(recipe =>
                <PostItem remove={remove} recipe={recipe} key={recipe.id} />
            )}
        </div>
    )
};

export default PostList;