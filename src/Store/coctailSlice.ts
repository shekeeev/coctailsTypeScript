import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { coctailsAPI } from "../API/api"
import { AxiosError } from "axios"
import { ICoctailData, IDrink } from "./Modules"



type CoctailSlice = {
    list: IDrink[]
    loading: boolean
    error: null | string | undefined
}

const initialState: CoctailSlice = {
    list: [],
    error: null,
    loading: false

}


export const fetchByAllCoctails = createAsyncThunk<IDrink[], void, { rejectValue: string }>(
    'coctails/fetchByAllCoctails',
    async (_, { rejectWithValue }) => {
        try {
            const res = await coctailsAPI.getAllCoctails()
            // console.log(res);
            if (res.status !== 200) {
                throw new Error('Server error')
            }
            return res.data.drinks
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

export const fetchByName = createAsyncThunk<IDrink[], string, { rejectValue: string }>(
    'coctails/fetchByName',
    async (value, { rejectWithValue }) => {
        try {
            const res = await coctailsAPI.getByName(value)
            console.log(res);
            if (res.status !== 200) {
                throw new Error('Server error')
            }
            return res.data.drinks
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





export const fetchByNameAlc = createAsyncThunk<IDrink[], string, { rejectValue: string }>(
    'coctails/fetchByNameAlc',
    async (alc, { rejectWithValue }) => {
        try {
            const res = await coctailsAPI.getByAlc(alc)
            console.log(res);
            if (res.status !== 200) {
                throw new Error('Server error')
            }
            return res.data.drinks
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













const coctailSlice = createSlice({
    name: 'coctails',
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(fetchByAllCoctails.pending, (state) => {
            state.loading = true
            state.error = null
        })

        addCase(fetchByAllCoctails.fulfilled, (state, action) => {
            state.list = action.payload
            state.loading = false

        })

        addCase(fetchByAllCoctails.rejected, (state, action) => {

            state.loading = false
            if (action.payload?.includes('404')) {
                state.error = 'No Broouuuu,No coctails!'
            } else {
                state.error = action.payload
            }
        })


        addCase(fetchByName.pending, (state) => {
            state.loading = true
            state.error = null
        })

        addCase(fetchByName.fulfilled, (state, action) => {
            state.list = action.payload
            state.loading = false

        })

        addCase(fetchByName.rejected, (state, action) => {

            state.loading = false
            if (action.payload?.includes('404')) {
                state.error = 'No Broouuuu,No coctails!'
            } else {
                state.error = action.payload
            }
        })










        addCase(fetchByNameAlc.pending, (state) => {
            state.loading = true
            state.error = null
        })

        addCase(fetchByNameAlc.fulfilled, (state, action) => {
            state.list = action.payload
            state.loading = false

        })

        addCase(fetchByNameAlc.rejected, (state, action) => {

            state.loading = false
            if (action.payload?.includes('404')) {
                state.error = 'No Broouuuu,No coctails!'
            } else {
                state.error = action.payload
            }
        })
    }

})






export default coctailSlice.reducer