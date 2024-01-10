

type IObjectKeys = {
    [key: string]: string | null
}


export type IDrink = IObjectKeys & {
    idDrink: string
    strDrink: string
    strDrinkThumb: string


}


export type ICoctailData = IDrink & IObjectKeys & {
    strAlcoholic: string
    strDrink: string
    strGlass: string
    strIngredient1: null | string
    strIngredient2: null | string
    strIngredient3: null | string
    strIngredient4: null | string
    strIngredient5: null | string
    strIngredient6: null | string
    strIngredient7: null | string
    strIngredient8: null | string
    strIngredient9: null | string
    strIngredient10: null | string
    strIngredient11: null | string
    strIngredient12: null | string
    strIngredient13: null | string
    strIngredient14: null | string
    strIngredient15: null | string
    strInstructions: string

}

export type IDetailData = ICoctailData & IDrink & IObjectKeys & {
    idIngredient: null | string
    strIngredient: null | string
    strDescription: null | string
    strType: null | string
    strAlcohol: null | string
}