import { configureStore } from '@reduxjs/toolkit'
import { devToolsEnhancer } from "@redux-devtools/extension";
import { contactsSlice } from './contactsSlice'
import { filterSlice } from './filterSlice';



const enhancer = devToolsEnhancer();

export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer,
    },


}, enhancer)



