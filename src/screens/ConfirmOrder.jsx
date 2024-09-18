import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import Heading from '../components/Heading'
import CartItem from '../components/CartItem'
import ConfirmOrderItem from '../components/ConfirmOrderItem'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-paper'
import { useSelector } from 'react-redux'

const ConfirmOrder = (route) => {


    console.log("Confirm Order page Logging")

    console.log(route)

    const navigate = route.navigation

    const { cartItems } = useSelector(state => state.cart)

    console.log(`cart Item = ${cartItems}`)

    const [itemPrice] = useState(
        cartItems.reduce((previous, currentValue) => previous + currentValue.quantity * currentValue.price, 0)
    )

    const [shippingChages] = useState(itemPrice > 10000 ? 0 : 200)
    const [tax] = useState(Number((0.18 * itemPrice).toFixed()))
    const [totalAmount] = useState(itemPrice + shippingChages + tax)

    console.log(`Confirm Order Item Price = ${itemPrice}`)
    console.log(`Confirm Order Shipping Charges = ${shippingChages}`)
    console.log(`Confirm Order Tax = ${tax}`)
    console.log(`Confirm Order totalAmount = ${totalAmount}`)

    return (
        <View style={defaultStyle}>
            <Header back={true} />
            {/* /* Heading */}
            <Heading Text1='Confirm' Text2='Order' containerStyle={{
                paddingTop: 70,

            }} />
            {/* /* Heading */}
            <View
                style={{
                    paddingVertical: 20,
                    flex: 1
                }}
            >
                <ScrollView>
                    {
                        cartItems.map((i) => (
                            <ConfirmOrderItem
                                key={i.product}
                                image={i.image}
                                name={i.name}
                                price={i.price}
                                quantity={i.quantity}
                            />
                        ))
                    }
                </ScrollView>
            </View>
            <PriceTag heading={"SubTotal"} value={itemPrice} />
            <PriceTag heading={"Shipping"} value={shippingChages} />
            <PriceTag heading={"Tax"} value={tax} />
            <PriceTag heading={"Total Amount"} value={totalAmount} />


            <TouchableOpacity
                onPress={() => navigate.navigate("PAYMENT", {
                    itemPrice,
                    shippingChages,
                    tax,
                    totalAmount
                })}
            >
                <Button
                    style={{
                        backgroundColor: colors.color3,
                        borderRadius: 100,
                        padding: 5,
                        margin: 10,
                    }}
                    textColor={colors.color2}
                    icon={"chevron-right"}
                >
                    Confirm Order
                </Button>
            </TouchableOpacity>
        </View>
    )
}

const PriceTag = ({ heading, value }) => (
    <View
        style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 5,

        }}
    >
        <Text style={{ fontWeight: "800" }} >{heading}</Text>
        <Text>{value}</Text>
    </View>
)

export default ConfirmOrder