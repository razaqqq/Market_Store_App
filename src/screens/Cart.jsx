import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import Heading from '../components/Heading'
import { Button } from 'react-native-paper'
import CartItem from '../components/CartItem'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import Toast from 'react-native-toast-message'
import Footer from '../components/Footer'

const Cart = () => {

    console.log("Cart Page Logg")

    const navigate = useNavigation()

    const dispatch = useDispatch()

    const { cartItems } = useSelector(state => state.cart)

    const incrementHandler = (id, name, price, image, stock, quantity) => {

        console.log("incrementHandler FUnction Called")

        const newQty = quantity + 1
        if (stock <= quantity) return Toast.show({
            type: "error",
            text1: "Maximum Value Added"
        })
        dispatch({
            type: "addToCart",
            payload: {
                product: id,
                name,
                price,
                image,
                stock,
                quantity: newQty
            }
        })
        Toast.show({
            type: "success",
            text1: "Added To Cart"
        })

    }

    const decrementHandler = (id, name, price, image, stock, quantity) => {

        console.log("decrementHandler Function Called")

        const newQty = quantity - 1
        if (1 >= quantity) return dispatch({
            type: "removeFromCart",
            payload: id
        })
        dispatch({
            type: "addToCart",
            payload: {
                product: id,
                name,
                price,
                image,
                stock,
                quantity: newQty
            }
        })
        Toast.show({
            type: "success",
            text1: "Added To Cart"
        })

    }

    console.log(`cartItems Lenght = ${cartItems.length}`)

    return (

        <View style={{
            ...defaultStyle,
            padding: 0,
        }}>

            {/* /* Header */}
            <Header back={false} emptyCart={true} />
            {/* /* Header */}

            {/* /* Heading */}
            <Heading Text1='Shopping' Text2='Cart' containerStyle={{
                marginTop: 20,
                marginLeft: 35
            }} />
            {/* /* Heading */}

            <View
                style={{
                    paddingVertical: 20,
                    flex: 1
                }}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    {cartItems.length > 0 ?
                        (
                            cartItems.map((cartItem, index) => (
                                <CartItem
                                    navigate={navigate}
                                    key={cartItem.product}
                                    id={cartItem.product}
                                    name={cartItem.name}
                                    stock={cartItem.stock}
                                    price={cartItem.price}
                                    imgSrc={cartItem.image}
                                    index={index}
                                    quantity={cartItem.quantity}
                                    incrementHandler={incrementHandler}
                                    decrementHandler={decrementHandler}
                                />
                            ))
                        ) : (
                            <View
                                style={{
                                    height: 400,
                                    alignItems: 'center',
                                    justifyContent: "center",
                                }}
                            >
                                <Text style={{
                                    textAlign: 'center',
                                    fontSize: 20,
                                    fontWeight: 'bold'
                                }}>No Items Yet</Text>
                            </View>
                        )
                    }
                </ScrollView>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: "space-between",
                    paddingHorizontal: 35
                }}
            >
                <Text>{cartItems.length} Items</Text>
                <Text>${cartItems.reduce(
                    (prev, curr) => prev + curr.quantity * curr.price,
                    0
                )}</Text>

            </View>
            <TouchableOpacity
                onPress={
                    cartItems.length > 0 ? () => navigate.navigate("CONFIRM-ORDER") : null
                }
            >
                <Button
                    style={{
                        backgroundColor: colors.color3,
                        borderRadius: 100,
                        padding: 5,
                        margin: 30,
                        marginBottom: 100
                    }}
                    icon={"cart"}
                    textColor={colors.color2}
                ><Text>CheckOut</Text></Button>
            </TouchableOpacity>

            <Footer activeRoute='CART' />

        </View>




    )
}


export default Cart