
import { configureStore } from "@reduxjs/toolkit"
import coctailSlice from './coctailSlice'
import detailSlice from './detailSlice'



const store = configureStore({
    reducer: {
        coctails: coctailSlice,
        details: detailSlice,
    }
})


export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
