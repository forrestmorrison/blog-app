import { createSlice } from "@reduxjs/toolkit"

const initialStateValue = ""

export const postSlice = createSlice({
    name: "post",
    initialState: {
        value: initialStateValue
    },
    reducers: {
        submitPost: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { submitPost } = postSlice.actions

export default postSlice.reducer