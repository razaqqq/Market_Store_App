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



export const login = (email,password) => async(dispatch) => {
    
    try{

        dispatch({
            type: "loginRequest"
        })

        console.log("Login Dispatch Function Called Working 1")

        const {data} = await axios.post(`${server}/user/login`, {
            email,
            password
        }, {
            headers: {
                "Content-Type":"application/json",
            }
        })

        console.log("login Dispatch Function Called Working 2")

        dispatch({
            type: "loginSuccess",
            payload: data.message
        })

    } catch(error) {

        console.log("There Some Error")
        console.log(error)

        dispatch({
            type: "loginFail",
            payload: error.response.data.message
        })

    }
}


export const logOutUser = () => async (dispatch) => {
    console.log("Log Out")
    try {
        dispatch({
            type: "logOutRequest"
        })
        console.log("Working 1")
        const {data} = await axios.get(
            `${server}/user/logout`, {
                withCredentials: true,
            }
        )
        console.log("Working 2")
        dispatch({
            type: "logOutSuccess",
            payload: data.message
        })
        console.log("Working 3")
    } catch (error) {
        console.log("Error")
        console.log(error)
        dispatch({
            type: "logOutFail",
            payload: error.response.data.message
        })
    }
}



export const loadUser = () => async (dispatch) => {
    try {

        console.log("load User User ActionCalled")

        dispatch({
            type: "loadUserRequest"
        })

        console.log("load User User Worked 1")

        const {data} = await axios.get(
            `${server}/user/profile`, {
                withCredentials: true
            }
        )

        console.log("load User User Worked 2")

        dispatch({
            type: "loadUserSuccess",
            payload: data.user
        })

        console.log("load User User Worked 3")

    } catch (error) {
        console.log("load User User Error")
        console.log(error)
        dispatch({
            type: "loadUserFail",
            payload: error.response.data.message
        })
    }
}


export const loadUserById = (userId) => async (dispatch) => {

    console.log("Load User By Id Called")

    try {

        console.log(userId)

        dispatch({
            type: "loadUserByIdRequest"
        })
        console.log("LoadUserBy Id Working 1")
        // const {data} = await axios.get(
        //     `${server}/user/profile`, {
        //         withCredentials: true
        //     }
        // )

        const {data} = await axios.get(
            `${server}/user/userBasedId/${userId}`
        )
        console.log("LoadUserBy Id Working 2")
        // dispatch({
        //     type: "loadUserSuccess",
        //     payload: data.user
        // })
        dispatch({
            type: "loadUserByIdSuccess",
            payload: data.userById
        })
        console.log("LoadUserBy Id Working 3 Success")

    } catch (error) {

        // dispatch({
        //     type: "loadUserFail",
        //     payload: error.response.data.message
        // })
        console.log("LoadUserBy Id Error There SomeThing Wrong")
        console.log(`LoadUserBy Id Error ${error}`)
        console.log(400)
        dispatch({
            type: "loadUserByIdFail",
            payload: error.response.data.message
        })

    }
}


