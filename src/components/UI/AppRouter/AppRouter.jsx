
import React from "react";
import { Routes, Route } from "react-router-dom";
import Recipe from "../../../pages/Recipe";
import Recipes from "../../../pages/Recipes";

const AppRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<Recipes />} />
            <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
    );
}

export default AppRouter;

