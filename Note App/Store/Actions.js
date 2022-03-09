import { createSlice } from '@reduxjs/toolkit'

const initState = [
]




const ActionSlice = createSlice(
    {
        name: 'Actions',
        initialState: initState,
        reducers: {
            AddNote: (state, action) => {
                const AddNote = {
                    id: Date.now().toString(),
                    Address: action.payload.Address,
                    body: action.payload.body
                }
                state.push(AddNote)
            },
            Update: (state, action) => {
                const Update = {
                    Address: action.payload.Address,
                    body: action.payload.body
                }
                state[action.payload.index] = action.payload

            },
            Delete_Item: (state, action) => {
                return (
                    state.filter((item, index) => index !== action.payload)
                )
            },

        }
    }
)

export default ActionSlice.reducer
export const { AddNote, Update, Delete_Item, } = ActionSlice.actions