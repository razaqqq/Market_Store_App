import axios from "axios"
import { useEffect, useState } from "react"
import Toast from "react-native-toast-message"
import { useSelector } from "react-redux"
import { getAllAdminProduct } from "../../redux/actions/productAction"
import { loadUser } from "../../redux/actions/userActions"
import { server } from "../../redux/store"



export const useMessageAndErrorFromUser = (
    navigation,
    dispatch,
    navigateTo="LOGIN") => {

    const { loading, message, error } = useSelector(
        (state) => state.user
      )

      console.log(`useMessageAndErrorFrom User loading = ${loading}`)
      console.log(`useMessageAndErrorFrom User message = ${message}`)
      console.log(`useMessageAndErrorFrom User error = ${error}`)

    useEffect(() => {

        if (error) {
            Toast.show({
            type: "error",
            text: error
            })
            dispatch({
                type: "clearError"
            })
        }
        if (message) {
            navigation.reset({
                index: 0,
                routes: [{
                    name: navigateTo
                }]
            })
            Toast.show({
            type: "success",
            text1: message
            })
            dispatch({
                type: "clearMessage",
            })
  
            dispatch(loadUser())


        }

    }, [error, message, dispatch])

    return loading

}


export const useMessageAndErrorFromOther = (
    dispatch,
    navigation,
    navigateTo,
    func
) => {

    console.log(`useMessageAndErrorFromOther dispatch = ${dispatch}`)
    console.log(`useMessageAndErrorFromOther navigation = ${navigation}`)
    console.log(`useMessageAndErrorFromOther navigateTo = ${navigateTo}`)
    console.log(`useMessageAndErrorFromOther func = ${func}`)

    console.log(`useMessageAndErrorFromOther Called`)
    
    const { loading, message, error } = useSelector((state) => state.other)

   
    
    useEffect(() => {

        console.log(`useMessageAndErrorFrom Other Working 1`)
        console.log(`useMessageAndErrorFromOther loading = ${loading}`)
        console.log(`useMessageAndErrorFromOther message = ${message}`)
        console.log(`useMessageFromOther error = ${error}`)

        console.log(`useMessageAndErrorFrom Other Working 2`)
        if (error) {
            console.log(`useMessageAndErrorFrom Other Error`)
            console.log(error)
            Toast.show({
                type: "error",
                text1: error
            })
            dispatch({
                type: "clearError"
            })
        }

        if (message) {
            console.log(`useMessageAndErrorFrom Other Working 3`)

            console.log(`useMessageAndErrorFromOther ${message}`)

            Toast.show({
                type: "success",
                text1: message
            })
            dispatch({
                type: "clearMessage"
            })
            console.log(`useMessageAndErrorFrom Other Working 4`)
            console.log(`Navigate to ${navigateTo}`)

            navigateTo && navigation.navigate(navigateTo)

  
            func && dispatch(func())
       
        }

  


        console.log(`useMessageAndErrorFrom Other Working 5`)
    }, [error, message, dispatch])

    return loading

}


export const useSetCategories = (setCategories, isFocused) => {

    console.log("Hook useSetCategories Hooks Called")

    useEffect(() => {

        console.log("useSetCategories Hooks Working 1")

        axios
          .get(`${server}/product/categories`)
          .then((res) => {
            console.log(`useSetCategories res = ${res}`)
            console.log("Hook useSetCategories Hooks Working 2")
            setCategories(res.data.categories);
          })
          .catch((e) => {
            console.log("Hook useSetCategories Hooks Error")
            console.log(e)
            Toast.show({
              type: "error",
              text1: e.response.data.message,
            });
          });
      }, [isFocused]);
}


export const useGetOrders = ({isFocused, isAdmin = false}) => {


    console.log(`Hooks useGetOrders FUnction is Called`)

    const [orders, setOrders] = useState([])
    
    const [loading, setLoading] = useState(false)

    console.log("Hooks useGetOIrders FUnction is Working 1")

    useEffect(() => {
        setLoading(true)

        console.log(`Hooks useGetOrders FUnction is Working 2`)

        axios
            .get(`${server}/order/${isAdmin ? "adminOrder" : "myOrder"}`)
            .then((response) => {
                console.log(`Hooks useGetOrders FUnction is Working 3`)
                setOrders(response.data.orders)
                setLoading(false)
            })
            .catch((error) => {
                console.log("Hooks useGetOrders Function Error")
                console.log(error)
                Toast.show({
                    type: "error",
                    text1: error.response.data.message
                })
                setLoading(false)
            })

            console.log(`Hooks useGetOrders FUnction is Working 4`)

    }, [isFocused])
    console.log(`Hooks useGetOrders FUnction is Working 5`)
    return {
        loading,
        orders
    }

}



export const useAdminProduct = (dispatch, isFocused) => {
    
    console.log("Hooks Use Admin Product is Called")
    console.log(dispatch)
    console.log(isFocused)

    const {products, inStock, outOfStock, error, loading} = useSelector(state => state.product)

    console.log("Hooks use Admin Product Logging Some variable")
    console.log(products)
    console.log(inStock)
    console.log(outOfStock)
    console.log(error)
    console.log(loading)

    useEffect(() => {
        console.log("Hooks use Admin Product Working 1")
        if (error) {
            console.log("Hooks use Admin Product Error")
            console.log(error)
            Toast.show({
                type: "error",
                text1: error
            })
            dispatch({
                type: "clearError"
            })
        }
        console.log("Hooks use Admin Product Working 2")
        dispatch(getAllAdminProduct())
        console.log("Hooks use Admin Product 3")
    }, [dispatch, isFocused, error])
    console.log("Hooks use Admin Product 4")
    return {
        products, 
        inStock, 
        outOfStock, 
        loading
    }

}