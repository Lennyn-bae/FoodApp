
import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../../../pages/About";
import Main from "../../../pages/Main";
import Recipe from "../../../pages/Recipe";
import Recipes from "../../../pages/Recipes";

const AppRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:id" element={<Recipe />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}

export default AppRouter;

