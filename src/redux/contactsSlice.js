import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { NotificationManager } from "react-notifications";
import initialContacts from 'constants/contact';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'


const contactsInitialState = { value: initialContacts };

export const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContacts(state, action) {
            const { name, number } = action.payload;
            if (state.value.some(contact => contact.name === name)) {
                return NotificationManager.warning(`${name} is already in contacts`);
            }

            return {
                value: [...state.value, { id: nanoid(), name, number }]
            };
        },

        deleteContact(state, action) {
            return {
                value: state.value.filter(contact => contact.id !== action.payload)
            };
        }
    },
});

const persistConfig = {
    key: 'root',
    storage,
}

export const persistedContactsReducer = persistReducer(persistConfig, contactsSlice.reducer)

export const { addContacts, deleteContact } = contactsSlice.actions;

export const getContacts = state => state.contacts.value