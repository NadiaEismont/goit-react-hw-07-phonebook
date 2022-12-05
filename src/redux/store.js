import { configureStore } from '@reduxjs/toolkit'
import { devToolsEnhancer } from "@redux-devtools/extension";
import { persistedContactsReducer } from './contactsSlice'
import { filterSlice } from './filterSlice';
import { persistStore } from 'redux-persist';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'



const enhancer = devToolsEnhancer();

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filter: filterSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),

}, enhancer)

export const persistor = persistStore(store)
