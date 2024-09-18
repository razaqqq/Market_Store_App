import axios from "axios"
import { server } from "../store"
import { err } from "react-native-svg"


export const updatePassword = (oldPassword, newPassword) => async () => {
    try {

        dispatch({
            type: "updatePasswordRequest"
        })

        const { data } = await axios.put(
            `${server}/user/changepassword`,
            {
                oldPassword, newPassword
            },
            {
                headers: {
                    "Content-Type":"application/json",

                },
                withCredentials: true
            }
        )

        dispatch({
            type: "pdatePasswordSuccess",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "updatePasswordFail"
        })
    }
}


export const updateProfile = (name, email, address, city, country, pinCode) => async (dispatch) => {
    try {

        console.log("other Action UpdateProfile Function Called")

        dispatch({
            type: "updateProfileRequest"
        })

        console.log("Other Action Update Profile Working 1")

        const { data } = await axios.put(
            `${server}/user/updateProfile`,
            {
                name, email, address, city, country, pinCode
            },
            {
                headers: {
                    "Content-Type":"application/json",

                },
                withCredentials: true
            }
        )

        console.log("Other Action Update Profile Working 2")

        dispatch({
            type: "updateProfileSuccess",
            payload: data.message
        })

    } catch (error) {
        console.log("Other Action Update Profile Error")
        console.log(error)
        dispatch({
            type: "updateProfileFail"
        })
    }
}

export const updatePic = (formData) => async (dispatch) => {
    try {

        console.log("Other Action Update Picture is Called")

        dispatch({
            type: "updatePicRequest"
        })
        
        console.log("Other Action Update Picture Working 1")

        const { data } = await axios.put(
            `${server}/user/updatePic`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",

                },
                withCredentials: true
            }
        )

        console.log("Other Action Update Picture Working 2")

        dispatch({
            type: "updatePicSuccess",
            payload: data.message
        })

        console.log("Other Action Update Picture Working 3")

    }
    catch(error) {

        console.log("Other Action Update Picture Error")
        console.log(error)

        dispatch({
            type: "updatePicFail",
            payload: error.response.message
        })
    }
}


export const placeHolder = (
    orderItems,
    shippingInfo,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
    paymentInfo) => async (dispatch) => {
    try{

        console.log(`Other Action PlaceOrder Called`)

        console.log(`PlaceOrder orderItems = ${orderItems}`)
        console.log(shippingInfo)
        console.log(`PlaceOrder paymentMethod = ${paymentMethod}`)
        console.log(`PlaceOrder itemsPrice = ${itemsPrice}`)
        console.log(`PlaceOrder taxPrice = ${taxPrice}`)
        console.log(`PlaceOrder shippingCahrges = ${shippingCharges}`)
        console.log(`PlaceOrder totalAmount = ${totalAmount}`)
        console.log(`PlaceOrder paymentInfo = ${paymentInfo}`)

        dispatch({
            type: "placeOrderRequest"
        })
        console.log("Other Action PlaceOrder Working 2")
        const { data } = await axios.post(
            `${server}/order/newOrder`,
            {
                shippingInfo,
                orderItems,
                paymentMethod,
                paymentInfo,
                itemsPrice,
                taxPrice,
                shippingCharges,
                totalAmount
            },
            {
                headers: {
                    "Content-Type" : "application/json"
                },
                withCredentials: true
            }
        )
        console.log("Other Action PlaceOrder Working 3")
        dispatch({
            type: "placeOrderSuccess",
            payload: data.message
        })
        console.log("Other Action PlaceOrder Working 4")
    } catch (error) {
        console.log("Other Action PlaceOrder Error")
        console.log(error)
        dispatch({
            type: "placeOrderFail",
            payload: error.response.data.message
        })
    }
}


export const processOrder = (id) => async (dispatch) => {
    try{    
        
        console.log("Other Action Function Called")

        dispatch({
            type: "processOrderRequest"
        })
        console.log("Other Action FUnction Working 1")
        const { data } = await axios.put(
            `${server}/order/single/${id}`,
            {
                withCredentials: true
            }
        )
        console.log("Other Action FUnction Working 2")
        dispatch({
            type: "processOrderSuccess",
            payload: data.message
        })
        console.log("Working 3")
    } catch (error) {
        console.log("Other Action Function Working Error")
        console.log(error)
        dispatch({
            type: "processOrderFail",
            payload: error.response.data.message
        })
    }
}


export const addCategory = (category) => async (dispatch) => {
    try{

        console.log("Other Action AddCategory FUnction Called")
        console.log("logging category variable from params")
        console.log(category)

        dispatch({
            type: "addCategoryRequest"
        })
        console.log("Other Action AddCategory Working 1")
        const { data } = await axios.post(
            `${server}/product/category`,
            {
                category
            },
            {
                headers: {
                    "Content-Type": "application/json",

                    },
                withCredentials: true
            }
        )
        try {
            console.log("Other Action add Category Logging category")
            console.log(data)
        } catch (error) {
            console.log("data is undefinded, or Something Happened")
            console.log(error)
        }
        console.log("Other Action AddCategory Working 2")
        dispatch({
            type: "addCategorySuccess",
            payload: data.message
        })
        console.log("Other Action AddCategory Working 3")
    } catch (error) {
        console.log("Other Action AddCategory Error")
        console.log(error)
        dispatch({
            type: "addCategoryFail",
            payload: error.response.data.message
        })
    }
}


export const deleteCategory = (categoryId) => async (dispatch) => {
    try{
        console.log("Other Action deleteCategory Function is Called")
        console.log("Logging categoryId from params")
        console.log(categoryId)
        dispatch({
            type: "deleteCategoryRequest"
        })
        console.log("Other Action deleteCategory Function Working 1")
        const { data } = await axios.delete(
            `${server}/order/single/${categoryId}`,
            {
                withCredentials: true
            }
        )
        console.log("Other Action deleteCategory Function Working 2")
        dispatch({
            type: "deleteCategorySuccess",
            payload: data.message
        })
        console.log("Working 3")
    } catch (error) {
        console.log("Other Action deleteCategory Function Working Error")
        console.log(error)
        dispatch({
            type: "deleteCategoryFail",
            payload: error.response.data.message
        })
    }
}


// CREATE PRODUCT ACTION REDUCER
export const createProduct = (formData) => async (dispatch) => {
    try{

        console.log("Other Action CreateProduct Function")

        console.log("Other Action CreateProduct FUnction FormData Var")
        console.log(formData)

        dispatch({
            type: "addProductRequest"
        })
        console.log("Other Action CreateProduct Function Working 1")
        const { data } = await axios.post(
            `${server}/product/new/`,formData,
            {
                headers: {
                    "Content-Type" : "multipart/form-data"
                }
            }, 
            {
                withCredentials: true
            }
        )
        console.log("Other Action CreateProduct Function Working 2")
        dispatch({
            type: "addProductSuccess",
            payload: data.message
        })
        console.log("Other Action CreateProduct Function Working 3")
    } catch (error) {
        console.log("Other Action CreateProduct Function Error")
        console.log(error)
        dispatch({
            type: "addProductFail",
            payload: error.response.data.message
        })
    }
}


// UPDATE PRODUCT ACTION REDUCER
export const updateProduct = (productId, name, description, price, stock, category) => async (dispatch) => {
    
    console.log("Other Action updateProduct Function Called")
    console.log("Other Action updateProduct Try Logging Params")
    console.log(productId)
    console.log(name)
    console.log(description)
    console.log(price)
    console.log(stock)
    console.log(category)
    
    try{
        dispatch({
            type: "updateProductRequest"
        })
        console.log("Other Action updateProduct Function Working 1")
        const { data } = await axios.put(
            `${server}/product/single/${productId}`,
            {
                name, description, price, stock, category
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true
            }, 

        )
        console.log("Other Action updateProduct Function Working 2")
        dispatch({
            type: "updateProductSuccess",
            payload: data.message
        })
        console.log("Other Action updateProduct Function Working 3")
    } catch (error) {
        console.log("Other Action updateProduct Function Working Error")
        console.log(error)
        dispatch({
            type: "updateProductFail",
            payload: error.response.data.message
        })
    }
}



// UPDATE PRODUCT IMAGE ACTION REDUCER
export const updateProductImage = (productId,formData) => async (dispatch) => {
    
    console.log("OtherAction updateProductImage Called")
    console.log("Other Action updateProductImage Try Logging productId, formData")
    console.log(productId)
    console.log(formData)
    
    try{
        console.log("OtherAction updateProductImage Working 1")
        dispatch({
            type: "updateProductImageRequest"
        })
        const { data } = await axios.post(
            `${server}/product/images/${productId}`,
            formData,
            {
                headers: {
                    "Content-Type" : "multipart/form-data"
                },
                withCredentials: true
            }, 
        )
        console.log("OtherAction updateProductImage Working 2o")
        dispatch({
            type: "updateProductImageSuccess",
            payload: data.message
        })
        console.log("OtherAction updateProductImage Working 3")
    } catch (error) {
        console.log("OtherAction updateProductImage Error")
        console.log(error)
        dispatch({
            type: "updateProductImageFail",
            payload: error.response.data.message
        })
    }
}



// DELETE PRODUCT IMAGE ACTION REDUCER
export const deleteProductImage = (productId,imageId) => async (dispatch) => {
    try{
        dispatch({
            type: "deleteProductImageRequest"
        })
        console.log("Working 1")
        const { data } = await axios.delete(
            `${server}/product/images/${productId}?id=${imageId}`,
            {
                withCredentials: true
            }
        )
        console.log("Working 2")
        dispatch({
            type: "deleteProductImageSuccess",
            payload: data.message
        })
        console.log("Working 3")
    } catch (error) {
        console.log("Working Error")
        console.log(error)
        dispatch({
            type: "deleteProductImageFail",
            payload: error.response.data.message
        })
    }
}


// DELETE PRODUCT ACTION REDUCER
export const deleteProduct = (productId) => async (dispatch) => {
    try{
        console.log("Other Action deleteProduct Function is Called")
        dispatch({
            type: "deleteProductRequest"
        })
        console.log("Other Action deleteProduct Function Working 1")
        const { data } = await axios.delete(
            `${server}/product/single/${productId}`,
            {
                withCredentials: true
            }
        )
        console.log("Other Action deleteProduct Working 2")
        dispatch({
            type: "deleteProductSuccess",
            payload: data.message
        })
        console.log("Other Action deleteProduct Working 3")
    } catch (error) {
        console.log("Other Action deleteProduct Error")
        console.log(error)
        dispatch({
            type: "deleteProductFail",
            payload: error.response.data.message
        })
    }
}



// FORGET PASSWORD ACTION REDUCER
export const forgetPassword = (email) => async (dispatch) => {
    try{
        dispatch({
            type: "forgetPasswordRequest"
        })
        console.log("Working 1")
        const { data } = await axios.post(
            `${server}/user/forgetPassword`,
            {
                email
            },
            {
                headers: {
                    "Content-Type" : "application/json"
                }
            },
            {
                withCredentials: true
            }
        )
        console.log("Working 2")
        dispatch({
            type: "forgetPasswordSuccess",
            payload: data.message
        })
        console.log("Working 3")
    } catch (error) {
        console.log("Working Error")
        console.log(error)
        dispatch({
            type: "forgetPasswordFail",
            payload: error.response.data.message
        })
    }
}



// RESET PASSWORD ACTION REDUCER
export const resetPassword = (otp, password) => async (dispatch) => {
    try{
        console.log("OtherAction Reset Password is Called")
        dispatch({
            type: "resetPasswordRequest"
        })
        console.log("Working 1")
        const { data } = await axios.put(
            `${server}/user/forgetPassword`,
            {
                otp,
                password
            },
            {
                withCredentials: true
            }
        )
        console.log("Working 2")
        dispatch({
            type: "resetPasswordSuccess",
            payload: data.message
        })
        console.log("Working 3")
    } catch (error) {
        console.log("Working Error")
        console.log(error)
        dispatch({
            type: "resetPasswordFail",
            payload: error.response.data.message
        })
    }
}