import { configureStore } from "@reduxjs/toolkit";
import ActionSlice from './Actions'

const store = configureStore(
    {
        reducer: { Note: ActionSlice }
    }
)


export {store};