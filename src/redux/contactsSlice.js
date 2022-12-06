import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { NotificationManager } from "react-notifications";
import initialContacts from 'constants/contact';
import { fetchContacts } from './operations';


// const contactsInitialState = { value: initialContacts };

export const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
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
    extraReducers: {
        [fetchContacts.pending](state) {
            state.isLoading = true;
        },
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});




export const { addContacts, deleteContact } = contactsSlice.actions;

