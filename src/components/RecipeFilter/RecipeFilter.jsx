import React from "react";
import MySelect from "../UI/MySelect/MySelect";

const PostFilter = ({filter, setFilter}) => {

    return (
        <div>
            <input
                placeholder="Search"
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Sort by"
                options={[
                    { value: 'title', name: "By name" },
                    { value: 'description', name: "By description" }
                ]}
            />
        </div>
    )
};

export default PostFilter;