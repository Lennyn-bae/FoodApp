import axios from "axios";

export default class RecipeService {
    static async getAll() {
        const response = await axios.get('http://localhost:3004/recipes')
        return response
    }

    static async getById(id) {
        const response = await axios.get(`http://localhost:3004/recipes/` + id)
        return response
    }

}
