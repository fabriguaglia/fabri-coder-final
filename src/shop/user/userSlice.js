import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userEmail: null,
        localId: null,
        profilePicture: ""
    },
    reducers: {
        setUser: (state, action) => {
            state.userEmail = action.payload;
        },
        clearUser: (state) => {
            state.userEmail = null;
            state.localId = null;
            state.profilePicture = "";
        },
        setUserData: (state, action) => {
            state.userEmail = action.payload.email;
            state.localId = action.payload.localId;
        }
    }
});

export const { setUser, clearUser, setUserData } = userSlice.actions;
export default userSlice.reducer;