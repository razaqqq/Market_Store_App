import {createReducer} from "@reduxjs/toolkit"

export const userReducer = createReducer({}, (builder) => {
    builder
    
    // LOGIN REDUCER
    .addCase("loginRequest", (state) => {
        state.loading = true
    })
    builder.addCase("loginSuccess", (state, actions) => {
        console.log(`User Reducer Login Succedd`)        
        state.loading = false
        state.isAuthenticated = true
        state.message = actions.payload
    })
    builder.addCase("loginFail", (state, actions) => {
        state.loading = false
        state.isAuthenticated = false
        state.error = actions.payload
    })



    // REGISTER USER REDUCER
    .addCase("registerRequest", (state) => {
        state.loading = true
    })
    .addCase("registerSuccess", (state, action) => {
        state.loading = false
        state.isAuthenticated = true
        state.message = action.payload
    })
    .addCase("registerFail", (state, actions) => {
        state.loading = false
        state.isAuthenticated = true
        state.error = actions.payload
    })


    // LOG OUT REDUCER
    .addCase("logOutRequest", (state) => {
        state.loading = true
    })
   .addCase("logOutSuccess", (state,actions) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.message = actions.payload;
        state.user = null;
    })
    .addCase("logOutFail", (state, actions) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.message = actions.payload;
    })



    // LOAD USER REDUCER
    .addCase("loadUserRequest", (state) => {
        state.loading = true;
    })
    .addCase("loadUserSuccess", (state, actions) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = actions.payload;
    })
    .addCase("loadUserFail", (state, actions) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = actions.payload;
    })

    .addCase("loadUserByIdRequest", (state) => {
        state.loading = true
    })
    .addCase("loadUserByIdSuccess", (state, actions) => {
        state.loading = false
        state.isAuthenticated = true
        state.userById = actions.payload
    })
    .addCase("loadUserByIdFail", (state, actions) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = actions.payload;
    })



    // CLEAR ERROR REDUCER
    builder.addCase("clearError", (state) => {
        state.error = null
    })


    // CLEAR MESSAGE REDUCER
    builder.addCase("clearMessage", (state) => {
        state.message = null
    })


})