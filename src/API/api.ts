import axios from "axios";


const instanse = axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/',

})

export const coctailsAPI = {
    getAllCoctails() {
        return instanse.get('filter.php?c=Cocktail')
    },
    getByName(value: string) {
        return instanse.get(`search.php?s=${value}`)
    },
    getById(id: string) {
        return instanse.get(`lookup.php?i=${id}`)
    },
    getByAlc(alc: string) {
        return instanse.get(`filter.php?a=${alc}`)
    },
    getByIngredients(name: string) {
        return instanse.get(`search.php?i=${name}`)
    },

}