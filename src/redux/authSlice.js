import { createSlice } from "@reduxjs/toolkit";
import { createLoadingReducers } from "./commonLoadingHandlers";
import { loginThunk, registerThunk } from "../service/authThunk";

const initialState = {isLoggedIn : false, username : null, loading:false, error:null, result:0 }
const savedAuth = sessionStorage.getItem("auth");

const authSlice = createSlice({
    name : "auth",
    initialState : savedAuth ? JSON.parse(savedAuth) : initialState,
    reducers : {
        logout : (state) => 
            {
            sessionStorage.clear();
            return initialState;
            }
    },
    extraReducers: (builder) => {
        createLoadingReducers(builder, loginThunk);

        builder
            .addCase(loginThunk.fulfilled, (state, action) => {
            state.result = action.payload.result;

            if(action.payload.result === 0){
                state.isLoggedIn = true;
                state.username = action.payload.username;
                sessionStorage.setItem("auth", JSON.stringify(state));
            }
        })

        createLoadingReducers(builder, registerThunk);
        builder
            .addCase(registerThunk.fulfilled, (state) => {
                state.loading = false;
            })
    }
})
export const {logout} = authSlice.actions
export default authSlice;