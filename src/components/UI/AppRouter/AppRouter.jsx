
import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../../../pages/About";
import Main from "../../../pages/Main";
import Recipes from "../../../pages/Recipes";
import RecipeItem from "../../RecipeItem/RecipeItem";


const AppRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:id" element={<RecipeItem />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}

export default AppRouter;

