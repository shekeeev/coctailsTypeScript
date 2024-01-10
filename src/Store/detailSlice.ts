import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { coctailsAPI } from "../API/api"
import { AxiosError } from "axios"
import { ICoctailData, IDetailData } from "./Modules"











type CoctailSlice = {
    detail: ICoctailData | null | IDetailData
    loading: boolean
    error: null | string | undefined

}

const initialState: CoctailSlice = {
    detail: null,
    error: null,
    loading: false

}


export const fetchByDetailCoctails = createAsyncThunk<ICoctailData, string, { rejectValue: string }>(
    'details/fetchByDetailCoctails',
    async (id, { rejectWithValue }) => {
        try {
            const res = await coctailsAPI.getById(id)
            // console.log(res);
            if (res.status !== 200) {
                throw new Error('Server error')
            }
            const data = res.data.drinks[0]
            return data as ICoctailData
        } catch (error) {
            if (error instanceof AxiosError) {
                const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                return rejectWithValue(message);
            }
            // unhandled non-AxiosError goes here
            throw error
        }
    }

)





export const fetchByDetailIngredient = createAsyncThunk<IDetailData, string, { rejectValue: string }>(
    'details/fetchByDetailIngredient',
    async (name, { rejectWithValue }) => {
        try {
            const res = await coctailsAPI.getByIngredients(name)
            console.log(res);
            if (res.status !== 200) {
                throw new Error('Server error')
            }
            const data = res.data.ingredients[0]
            return data as IDetailData
        } catch (error) {
            if (error instanceof AxiosError) {
                const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                return rejectWithValue(message);
            }

            throw error
        }
    }

)












// export const fetchByNameGlasses = createAsyncThunk<void, void, { rejectValue: string }>(
//     'coctails/fetchByNameGlasses',
//     async (_, { rejectWithValue }) => {
//         try {
//             const res = await coctailsAPI.getByGlasses()
//             console.log(res);
//             if (res.status !== 200) {
//                 throw new Error('Server error')
//             }
//             return res.data.drinks
//         } catch (error) {
//             if (error instanceof AxiosError) {
//                 const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
//                 return rejectWithValue(message);
//             }
//             // unhandled non-AxiosError goes here
//             throw error
//         }
//     }

// )








const detailSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(fetchByDetailCoctails.pending, (state) => {
            state.loading = true
            state.error = null
        })

        addCase(fetchByDetailCoctails.fulfilled, (state, action) => {
            state.detail = action.payload
            state.loading = false

        })

        addCase(fetchByDetailCoctails.rejected, (state, action) => {

            state.loading = false
            if (action.payload?.includes('404')) {
                state.error = 'No Broouuuu,No coctails!'
            } else {
                state.error = action.payload
            }
        })




        addCase(fetchByDetailIngredient.pending, (state) => {
            state.loading = true
            state.error = null
        })

        addCase(fetchByDetailIngredient.fulfilled, (state, action) => {
            state.detail = action.payload
            state.loading = false

        })

        addCase(fetchByDetailIngredient.rejected, (state, action) => {

            state.loading = false
            if (action.payload?.includes('404')) {
                state.error = 'No Broouuuu,No coctails!'
            } else {
                state.error = action.payload
            }
        })






    }

})

export default detailSlice.reducer