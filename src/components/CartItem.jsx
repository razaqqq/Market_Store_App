import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'
import { Avatar } from 'react-native-paper'

const CartItem = (
    {
        navigate,
        id,
        name,
        stock,
        price,
        imgSrc,
        index,
        quantity,
        incrementHandler,
        decrementHandler,
    }
) => {

    // console.log(`name = ${name}`)
    // console.log(`stock = ${stock}`)
    // console.log(`price = ${price}`)
    // console.log(`imgSrc = ${imgSrc}`)
    // console.log(`index = ${index}`)
    // console.log(`quantity =${quantity}`)
    // console.log(`increamenthandler = ${incrementHandler}`)
    // console.log(`decrementHandler = ${decrementHandler}`)

    return (
        <View
            style={{
                flexDirection: "row",
                height: 100,
                marginVertical: 20
            }}
        >
            <View style={{
                width: "40%",
                backgroundColor: index % 2 === 0 ? colors.color1 : colors.color3,
                borderTopRightRadius: 100,
                borderBottomRightRadius: 100,
            }}
            >
                <Image source={{
                    uri: imgSrc
                }}
                    style={styles.image} />
            </View>
            <View
                style={{
                    width: "40%",
                    paddingHorizontal: 25,
                }}
            >
                <Text
                    numberOfLines={1}
                    style={{
                        fontSize: 17,
                    }}
                    onPress={() => navigate.navigate("PRODUCT-DETAILS", { id })}
                >
                    {name}
                </Text>
                <Text
                    numberOfLines={1}
                    style={{
                        fontSize: 17,
                        fontWeight: "900"
                    }}
                >
                    ${price}
                </Text>
            </View>
            <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => decrementHandler(id, quantity)}>
                    <Avatar.Icon icon={"minus"} size={20} style={{
                        borderRadius: 5,
                        backgroundColor: colors.color5,
                        height: 25,
                    }} />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{quantity}</Text>
                <TouchableOpacity
                    onPress={() => incrementHandler(id, name, price, imgSrc, stock, quantity)}
                >
                    <Avatar.Icon icon={"plus"} size={20} style={{
                        borderRadius: 5,
                        backgroundColor: colors.color5,
                        height: 25,
                    }} />
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    quantityText: {
        backgroundColor: colors.color4,
        height: 25,
        width: 25,
        textAlignVertical: "center",
        textAlign: "center",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.color5
    },
    quantityContainer: {
        alignItems: "center",
        width: "20%",
        height: 80,
        justifyContent: "space-between",
        alignSelf: "center"
    },
    container: {
        flexDirection: "row",
        height: 100,
        marginVertical: 20,

    },
    image: {
        width: 200,
        height: "100%",
        resizeMode: "contain",
        top: "-20%",
        left: "10%",


    }
})

export default CartItem