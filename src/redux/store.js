import { configureStore } from '@reduxjs/toolkit'
import { contactsSlice } from './slices/contactsSlice'
import { filterSlice } from './slices/filterSlice';




export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer,
    },


})



