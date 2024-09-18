import axios from "axios"
import { server } from "../store"



export const registerUser = (formData) => async (dispatch) => {

    try {
        dispatch({
            type: "registerRequest"
        })
        console.log(formData)
        console.log("RegisterUser User Action Working 1")
        const {data} = await axios.post(
            `${server}/user/new`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true
            }
        )
        console.log("RegisterUser User Action Working 2")
        dispatch({
            type: "registerSuccess",
            payload: data.message
        })
        console.log("RegisterUser User Action Working 3")
    }

    catch (error) {
        console.log("Register User Action Error")
        console.log(error)
        dispatch({
            type: "registerFail",
            payload: data.message
        })
    }

}

export const chatting = () => async (dispatch) => {

}

