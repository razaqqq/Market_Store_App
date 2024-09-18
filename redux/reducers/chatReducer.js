import { createReducer } from "@reduxjs/toolkit";






export const chatReducer = createReducer({
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

    // Cahat Reducer
    .addCase("chatReducer", (state, action) => {

    })


   


})