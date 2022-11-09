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
}