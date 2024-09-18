import { createReducer } from "@reduxjs/toolkit"

export const otherReducer = createReducer({
}, builder => {


    // UPDATE PASSWORD REDUCER
    builder.addCase("updatePasswordRequest", (state) => {
        state.loading = true
    })
    .addCase("updatePasswordSuccess", (state,action) => {
        state.loading = false
        state.message = action.payload

    }).addCase("updatePasswordFail", (state, action) => {
        state.loading = false
        state.error = action.payload
    })


    // UPDATE PROFILE REDUCER
    .addCase("updateProfileRequest", (state) => {
        state.loading = false
    })
    .addCase("updateProfileSuccess", (state, action) => {
        state.loading = false
        state.message = action.payload
    })
    .addCase("updateProfileFail", (state, action) => {
        state.loading = false
        state.message = action.payload
    })


    // UPDATE PIC REQUEST
    .addCase("updatePicRequest", (state) => {
        state.loading = false
    })
    .addCase("updatePicSuccess", (state, action) => {
        state.loading = false
        state.message = action.payload
    })
    .addCase("updatePicFail", (state, action) => {
        state.loading = false
        state.message = action.payload
    })


    // PLACE ORDER REQUEST
    .addCase("placeOrderRequest", (state) => {
        state.loading = false
    })
    .addCase("placeOrderSuccess", (state, action) => {
        state.loading = false
        state.error = action.payload
    })
    .addCase("placeOrderFail", (state, action) => {
        state.loading = false
        state.error = action.payload
    })


    // PROCESS ORDER REQUEST
    .addCase("processOrderRequest", (state) => {
        state.loading = false
    })
    .addCase("processOrderSuccess", (state, action) => {
        state.loading = false
        state.error = action.payload
    })
    .addCase("processOrderFail", (state, action) => {
        state.loading = false
        state.error = action.payload
    })


    //ADD CATEGORY REQUEST
    .addCase("addCategoryRequest", (state) => {
        state.loading = false
    })
    .addCase("addCategorySuccess", (state, action) => {
        state.loading = false
        state.error = action.payload
    })
    .addCase("addCategoryFail", (state, action) => {
        state.loading = false
        state.error = action.payload
    })


    // DELETE CATEGORY REQUEST
    .addCase("deleteCategoryRequest", (state) => {
        state.loading = false
    })
    .addCase("deleteCategorySuccess", (state, action) => {
        state.loading = false
        state.error = action.payload
    })
    .addCase("deleteCategoryFail", (state, action) => {
        state.loading = false
        state.error = action.payload
    })


    // ADD PRODUCT REQUEST
    .addCase("addProductRequest", (state) => {
        state.loading = false
    })
    .addCase("addProductSuccess", (state, action) => {
        state.loading = false
        state.error = action.payload
    })
    .addCase("addProductFail", (state, action) => {
        state.loading = false
        state.error = action.payload
    })

    
    // UPDATE PRODUCT REDUCER
    .addCase("updateProductRequest", (state) => {
        state.loading = false
    })
    .addCase("updateProductSuccess", (state, action) => {
        state.loading = false
        state.error = action.payload
    })
    .addCase("updateProductFail", (state, action) => {
        state.loading = false
        state.error = action.payload
    })



    // UPDATE PRODUCT IMAGE REDUCER
    .addCase("updateProductImageRequest", (state) => {
        state.loading = false
    })
    .addCase("updateProductImageSuccess", (state, action) => {
        state.loading = false
        state.error = action.payload
    })
    .addCase("updateProductImageFail", (state, action) => {
        state.loading = false
        state.error = action.payload
    })



    // DELETE PRODUCT IMAGE REDUCER
    .addCase("deleteProductImageRequest", (state) => {
        state.loading = false
    })
    .addCase("deleteProductImageSuccess", (state, action) => {
        state.loading = false
        state.error = action.payload
    })
    .addCase("deleteProductImageFail", (state, action) => {
        state.loading = false
        state.error = action.payload
    })



    // DELETE PRODUCT REDUCER
    .addCase("deleteProductRequest", (state) => {
        state.loading = false
    })
    .addCase("deleteProductSuccess", (state, action) => {
        state.loading = false
        state.error = action.payload
    })
    .addCase("deleteProductFail", (state, action) => {
        state.loading = false
        state.error = action.payload
    })



    // DELETE RESET PASSWORD REDUCER
    .addCase("resetPasswordRequest", (state) => {
        state.loading = false
    })
    .addCase("resetPasswordSuccess", (state, action) => {
        state.loading = false
        state.error = action.payload
    })
    .addCase("resetPasswordFail", (state, action) => {
        state.loading = false
        state.error = action.payload
    })



    // FORGET PASSWORD REDUCER
    .addCase("forgetPasswordRequest", (state) => {
        state.loading = false
    })
    .addCase("forgetPasswordSuccess", (state, action) => {
        state.loading = false
        state.error = action.payload
    })
    .addCase("forgetPasswordFail", (state, action) => {
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