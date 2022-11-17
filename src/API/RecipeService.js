import axios from "axios";

export default class RecipeService {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('http://localhost:3004/recipes', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response
    }

    static async getById(id) {
        const response = await axios.get(`http://localhost:3004/recipes/` + id)
        return response
    }

}

// export function createNewRecipe(title) {
//     const response = axios.post('http://localhost:3004/recipes', {
//         id: Date.now(),
//         title: title,
//         description: "Short description"
//     })
//     return response
// }

// axios.post('http://localhost:3004/recipes', {
//     id: Date.now(),
//     title: "Big Night Pizza",
//     description: "Short description",
// })
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });