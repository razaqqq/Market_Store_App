

import { createReducer } from "@reduxjs/toolkit"

export const productReducer = createReducer({
    products: [],
    product: {}
}, builder => {
   
    builder
    
    // GET ALL PRODUCT REDUCER
    .addCase("getAllProductRequest", (state) => {
        state.loading = true
    })
    .addCase("getAllProductSuccess", (state, action) => {
        state.loading = false
        state.products = action.payload
    })
    .addCase("getAllProductFail", (state, action) => {
        state.loading = false
        state.error = action.payload
    })


    // GET ALL PRODUCT DETAIL REDUCER
    .addCase("getProductDetailRequest", (state) => {
        state.loading = true
    })
    .addCase("getProductDetailSuccess", (state, action) => {
        console.log("getProductDetailsSuccess is Called")
        console.log(action.payload)
        state.loading = false
        state.product = action.payload
    })
    .addCase("getProductDetailFail", (state, action) => {
        state.loading = false
        state.error = action.payload
    })


    // GET ALL ADMIN PRODUCT REDUCER
    .addCase("getAllAdminProductRequest", (state) => {
        state.loading = false
    })
    .addCase("getAllAdminProductSuccess", (state, action) => {

        console.log(`getAllAdminProductSuccess FUnction Logging`)
        console.log(action.payload.products)
        console.log(action.payload.inStock)
        console.log(action.payload.outOfStock)

        state.loading = false
        state.products = action.payload.products
        state.inStock = action.payload.inStock
        state.outOfStock = action.payload.outOfStock
    })
    .addCase("getAllAdminProductFail", (state, action) => {
        state.loading = false
        state.error = action.payload
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