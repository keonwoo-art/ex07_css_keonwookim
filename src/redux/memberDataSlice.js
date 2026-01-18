import { createSlice } from "@reduxjs/toolkit"
import { createLoadingReducers } from "./commonLoadingHandlers"
import { deleteMemberThunk, getAllMembersThunk, getMemberDetailThunk, updateMemberThunk } from "../service/authThunk"

const initialState = {
    members : [],
    member : null,
    loading : false,
    error : null
}

const memberDataSlice = createSlice({
    name : "memberData",
    initialState,
    reducers: {
        clearMember: (state) => {
            state.member=null;
        }

    },
    extraReducers : (builder) => {
        createLoadingReducers(builder, getAllMembersThunk);
        createLoadingReducers(builder, getMemberDetailThunk);
        createLoadingReducers(builder, deleteMemberThunk);

        builder.addCase(getAllMembersThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.members = action.payload;})

        builder.addCase(getMemberDetailThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.member = action.payload;}) 

        builder.addCase(deleteMemberThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.members = state.members.filter(m => m.id !== action.payload);
            state.member = null;
    });
        builder.addCase(updateMemberThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.member = action.payload;
            state.members = state.members.map(m=>
                m.id === action.payload.id ? action.payload : m
            )
        })
} });

export default memberDataSlice;

