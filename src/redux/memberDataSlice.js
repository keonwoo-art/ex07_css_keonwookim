import { createSlice } from "@reduxjs/toolkit"
import { createLoadingReducers } from "./commonLoadingHandlers"
import { deleteMemberThunk, getAllMembersThunk, getMemberDetailThunk } from "../service/authThunk"

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
}
});

export default memberDataSlice;

