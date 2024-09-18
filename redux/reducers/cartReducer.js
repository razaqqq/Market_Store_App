import { createReducer } from "@reduxjs/toolkit";






export const cartReducer = createReducer({
    cartItems: []
}, builder => {
    builder


    // ADD TO CART REDUCER
    .addCase("addToCart", (state, action) => {

        const item = action.payload
        const isExist = state.cartItems.find(i => i.product === item.product)

        if (isExist) {
            state.cartItems = state.cartItems.filter(
                (i) => i.product === isExist.product ? item : i
            )
            for (let i = 0; i < state.cartItems.length; i++) {
                if (state.cartItems[i].product === isExist.product) {
                    state.cartItems[i] = item
                }
            }
        }
        else {
            state.cartItems.push(item)
        }
    })


    // REMOVE FROM CART REDUCER
    .addCase("removeFromCart", (state, action) => {
        const id = action.payload
        state.cartItems = state.cartItems.filter( i => i.product !== id )
    })


    // CLEAR CART REDUCER
    .addCase("clearCart", (state) => {
        state.cartItems = []
    })


    // CLEAR ERROR REDUCER
    .addCase("clearError", (state) => {
        state.error = null
    })


    // CLEAR MESSAGE REDUCER
    .addCase("clearMessage", (state) => {
        state.message = null
    })



})