import { createSlice } from "@reduxjs/toolkit";
import fetchUsers from "../thunks/fetchUsers";
import adduser from "../thunks/addUser";
import { deleteUser } from '../thunks/deleteUser'

const userSlice = createSlice({
    name:"users",
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    reducers: {

    },
    extraReducers( builder ){
        builder.addCase(fetchUsers.pending, (state,action)=>{
            state.isLoading = true
        });
        builder.addCase(fetchUsers.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.data = action.payload
        });
        builder.addCase(fetchUsers.rejected, (state,action)=>{
            state.isLoading = false
            state.error = action.error
        });


        builder.addCase(adduser.pending, (state, action)=>{
            state.isLoadingUser = true;
        });
        builder.addCase(adduser.fulfilled, (state, action)=>{
            state.isLoadingUser = false;
            state.data.push(action.payload);
        });
        builder.addCase(adduser.rejected, (state, action)=>{
            state.isLoadingUser = true;
            state.error = action.error;
        });


        builder.addCase(deleteUser.pending, (state, action)=>{
            state.isLoading = true;
        });
        builder.addCase(deleteUser.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.data = state.data.filter((user)=>{
                return user.id !== action.payload.id
            })
        });
        builder.addCase(deleteUser.rejected, (state, action)=>{
            state.isLoading = false;
        });

    }
})

export const usersReducer = userSlice.reducer;