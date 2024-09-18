import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import Heading from '../components/Heading'
import { Button, RadioButton } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { placeHolder } from '../../redux/actions/otherAction'
import { useMessageAndErrorFromOther } from '../utils/hooks'
import { useStripe } from '@stripe/stripe-react-native'
import Toast from 'react-native-toast-message'
import axios from 'axios'
import Loader from '../components/Loader'
import { server } from '../../redux/store'

const Payment = ({ navigation, route }) => {

    console.log("Payment Page Function Logg")

    console.log("Logging Params")
    console.log(navigation)
    console.log(route)

    const [paymentMethod, setPaymentMethod] = useState("COD")
    const [loaderLoading, setLoaderLoading] = useState(false)

    const dispatch = useDispatch()
    const stripe = useStripe()

    const { isAuthenticated, user } = useSelector(state => state.user)
    const { cartItems } = useSelector(state => state.cart)

    console.log(`Payment Page IsAuthenticated = ${isAuthenticated}`)
    console.log(`Payment Page User = ${user}`)
    console.log(`Payment Page CartItems = ${cartItems}`)

    const redirectedToLogin = () => {
        navigation.navigate("LOGIN")
    }

    const codHandler = (paymentInfo) => {

        console.log("COD HANDLER IS CALLED")

        const shippingInfo = {
            address: user.address,
            country: user.country,
            city: user.city,
            pinCode: user.pinCode,
        }

        console.log("Testinggggggg")
        console.log(shippingInfo)
        console.log(route.params)
        console.log(cartItems)
        console.log("COD Handler Working 1")


        const itemsPrice = route.params.itemPrice
        const shippingCharges = route.params.shippingChages
        const taxPrice = route.params.tax
        const totalAmount = route.params.totalAmount



        console.log(`itemPrice = ${itemsPrice}`)
        console.log(`shippingCharges = ${shippingCharges}`)
        console.log(`taxPrice = ${taxPrice}`)
        console.log(`totalAmount = ${totalAmount}`)

        console.log("COD Handler Working 2")

        dispatch(placeHolder(
            cartItems,
            shippingInfo,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingCharges,
            totalAmount,
            paymentInfo
        ))

        console.log("COD Handler Working 3")

    }

    const onlineHandler = async () => {

        try {

            const {
                data: { client_secret }
            } = await axios.post(`${server}/order/paymentOrder`,
                {
                    totalAmount: route.params.totalAmount,
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                }
            )

            const initStripe = await stripe.initPaymentSheet({
                paymentIntentClientSecret: client_secret,
                merchantDisplayName: "Test Display Name",

            })

            if (initStripe.error) {
                return Toast.show({
                    type: "error",
                    text1: init.error.message
                })
            }

            const presentSheetStripe = await stripe.presentPaymentSheet()

            setLoaderLoading(true)

            if (presentSheetStripe.error) {
                setLoaderLoading(true)
                return Toast.show({
                    type: "error",
                    text1: presentSheetStripe.error.message
                })
            }

            const { paymentIntent } = await stripe.retrievePaymentIntent(client_secret)

            if (paymentIntent.status === "Succeeded") {
                codHandler({
                    id: paymentIntent.id,
                    status: paymentIntent.status
                })
            }

        } catch (error) {
            console.log(`Payment Page onlineHandler Function Error`)
            console.log(error)
            return Toast.show(
                {
                    type: "error",
                    text1: "Some Error",
                    text2: error
                }
            )
        }

    }

    console.log(`Dispatch = ${dispatch}`)
    console.log(`Navigation = ${navigation}`)


    const loading = useMessageAndErrorFromOther(
        dispatch,
        navigation,
        "PROFILE",
        () => ({
            type: "clearCart"
        })
    )

    console.log(`Loading UseMessageAndErrorFromOther = ${loading}`)


    return (
        loaderLoading ? <Loader /> : (
            <View
                style={defaultStyle}
            >
                <Header back={true} />

                <Heading Text1='Payment' Text2='Method' containerStyle={{
                    paddingTop: 70
                }} />

                <View style={styles.containerStyle}>

                    <RadioButton.Group
                        onValueChange={setPaymentMethod}
                        value={paymentMethod}
                    >

                        <View style={styles.radioStyle}>
                            <Text style={styles.radioStyleText}>Cash On Delivery</Text>
                            <RadioButton color={colors.color1} value={'COD'} />
                        </View>

                        <View style={styles.radioStyle}>
                            <Text style={styles.radioStyleText}>Online</Text>
                            <RadioButton color={colors.color1} value={'ONLINE'} />
                        </View>

                    </RadioButton.Group>

                </View>

                <TouchableOpacity
                    disabled={loading}
                    onPress={
                        !isAuthenticated ?
                            redirectedToLogin :
                            paymentMethod === "COD" ?
                                () => codHandler() : onlineHandler
                    }
                >
                    <Button
                        loading={loading}
                        disabled={loading}
                        style={styles.buttonStyle}
                        textColor={colors.color2}
                        icon={
                            paymentMethod === "COD" ?
                                "check-circle" : "circle-multiple-outline"
                        }
                    >
                        {paymentMethod === "COD" ? "Place Order" : "PAY"}
                    </Button>
                </TouchableOpacity>
            </View>
        )
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: colors.color3,
        padding: 30,
        borderRadius: 10,
        marginVertical: 20,
        flex: 1,
        justifyContent: "center",
    },
    radioStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 5
    },
    radioStyleText: {
        fontWeight: "600",
        fontSize: 18,
        textTransform: "uppercase",
        color: colors.color2,
    },
    buttonStyle: {
        backgroundColor: colors.color3,
        borderRadius: 100,
        margin: 10,
        padding: 5
    }
})

export default Payment