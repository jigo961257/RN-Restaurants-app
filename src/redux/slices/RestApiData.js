import { createSlice } from "@reduxjs/toolkit";

const initalRestApiState = {
    list: [],
    isLoading: false,
}

const RestApiDataSlice = createSlice({
    name: "rest",
    initialState: initalRestApiState,
    reducers: {
        getRestList: (state) => {
            state.isLoading = true;
        },
        getRestSuccess: (state, action) => {
            state.list = action.payload;
            state.isLoading = false;
        },
        getRestFailed: (state) => {
            state.isLoading = false;
        }
    }
})

export const { getRestFailed, getRestList, getRestSuccess } = RestApiDataSlice.actions;

export default RestApiDataSlice.reducer;