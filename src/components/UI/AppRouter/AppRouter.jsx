
import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../../../pages/Main";
import Recipe from "../../../pages/Recipe";
import Recipes from "../../../pages/Recipes";

const AppRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
    );
}

export default AppRouter;

