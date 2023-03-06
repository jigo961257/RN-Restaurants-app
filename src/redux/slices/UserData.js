import { createSlice } from "@reduxjs/toolkit";

const initalUserDataState = {
    user: [],
    isUserLoggin: false,
    loggedId: null,
}

const UserDataSlice = createSlice({
    name: "user",
    initialState: initalUserDataState,
    reducers: {
        setUserData: (state, action) => {
            state.user = [...state.user, action.payload];
        },
        setUSerLogedIn: (state) => {
            state.isUserLoggin = true;
        },
        deleteUSer: (state, action) => {
            let id = action.payload;
            console.log("id => ", id);
            let findIndx = state.user.findIndex(item => item?.id == id)
            console.log("findIndx => ", findIndx);
            if (findIndx !== -1) {
                state.user = state.user.splice(findIndx, 1);
            }
            // console.log(state.user.splice(findIndx, 1));
            state.isUserLoggin = false;
        },
        logOutUser: (state,) => {
            state.isUserLoggin = false;
        },
        setUsetLoggindId: (state, action) => {
            state.loggedId = action.payload
        }
    }
})

export const { deleteUSer, logOutUser, setUSerLogedIn, setUserData, setUsetLoggindId} = UserDataSlice.actions;

export default UserDataSlice.reducer;