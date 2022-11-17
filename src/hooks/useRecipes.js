import {useMemo} from "react";

export const useSortedRecipes = (recipes, sort) => {
    const sortedRecipes = useMemo(() => {
        if (sort) {
            return [...recipes].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return recipes;
    }, [sort, recipes])

    return sortedRecipes;
}

export const useRecipes = (posts, sort, query) => {
    const sortedRecipes = useSortedRecipes(posts, sort)
    const sortedAndSearchedRecipes = useMemo(() => {
        return sortedRecipes.filter(recipe => recipe.title.toLowerCase().includes(query))
    }, [query, sortedRecipes])

    return sortedAndSearchedRecipes;
}