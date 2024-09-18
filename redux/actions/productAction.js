import axios from "axios"
import {server} from "../store"
import { useEffect } from "react"
import Toast from "react-native-toast-message"




export const getAllProduct = (keyword, category) => async (dispatch) => {
    try {

        console.log("getAllProductAction called")

        dispatch({
            type: "getAllProductRequest"
        })

        console.log("getAllProductAction Working 1")

        const { data } = await axios.get(
            `${server}/product/all?keyword=${keyword}&category=${category}`,
            {
                withCredentials: true
            }
        )

        console.log("getAllProductAction working 2")

        dispatch({
            type: "getAllProductSuccess",
            payload: data.products
        })

        console.log("getAllProductAction working 3")

    }
    catch(error) {

        console.log("getAllProductAction error")
        console.log(error)

        dispatch({
            type: "getAllProductFail"
        })
    }
}

export const getProductDetail = (id) => async (dispatch) => {

    console.log("Product Action getProductDetails Called")

    try {
        console.log("Product Action getProductDetails Working 1")
        dispatch({
            type: "getProductDetailRequest"
        })
        console.log("Product Action getProductDetails Working 2")
        const { data } = await axios.get(
            `${server}/product/single/${id}`,
            {
                withCredentials: true
            }
        )

        console.log("Product Actions data log")
        console.log(data)

        console.log("Product Action getProductDetails Working 3")
        dispatch({
            type: "getProductDetailSuccess",
            payload: data.product
        })
        console.log("Product Action getProductDetails Working 4")
    }
    catch(error) {
        console.log("Product Action getProductDetails Error")
        console.log(error)
        dispatch({
            type: "getProductDetailFail"
        })
    }
}



export const getAllAdminProduct = () => async (dispatch) => {

    console.log(`Product Action GetAllAdmin Products Called`)

    try {

        console.log(`Product Action GetAllAdmin Products Working 1`)

        dispatch({
            type: "getAllAdminProductRequest"
        })

        console.log(`Product Action GetAllAdmin Products Working 2`)

        const { data } = await axios.get(
            `${server}/product/adminProduct`,
            {
                withCredentials: true
            }
        )

        console.log(`Product Action GetAllAdmin Products Working 3`)

        dispatch({
            type: "getAllAdminProductSuccess",
            payload: data
        })

        console.log(`Product Action GetAllAdmin Products Working 4`)

    }
    catch(error) {

        console.log("productAction getAllAdminProduct Error")
        console.log(error)

        dispatch({
            type: "getAllAdminProductFail"
        })
    }
}




// export const useSetCategories = (setCategories, isFocused) => {
//     useEffect(() => {

//         console.log("useSetCategories product Action Called")

//         axios.get(`${server}/product/categories`).then(res => {
//             console.log("useSetCategories product Action Worked 1")
//             setCategories(res.data.categories)
//         }).catch(error => {
//             console.log("useSetCategories product Action Error")
//             console.log(error)
//             Toast.show({
//                 type:"error",
//                 text1:error.response.data.message
//             })
//         })  

//         console.log("useSetCategories product Action Worked 2")

//     }, [this])
// }