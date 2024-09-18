import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'
import { Button } from 'react-native-paper'

const ProductCard = ({
    stock,
    name,
    price,
    image,
    id,
    addToCardHandler,
    index,
    navigate
}) => {
    console.log("this is Image You Bitch", image)
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigate.navigate("PRODUCT-DETAILS", { id })}
        >
            <View
                style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    width: 80,
                    height: 30,

                    backgroundColor: colors.color7,
                    zIndex: 99,
                    justifyContent: "center",
                    alignSelf: "center",
                    alignContent: "center",
                    borderRadius: 10
                }}
            >
                <Text
                    style={{
                        justifyContent: "center",
                        alignSelf: "center",
                        alignContent: "center",
                        color: colors.color2,
                        fontWeight: "bold"
                    }}
                >10% OFF</Text>
            </View>
            <View
                style={{
                    elevation: 15,
                    width: 250,
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: 20,
                    borderRadius: 20,
                    height: 400,
                    backgroundColor: index % 2 === 0 ? colors.color1 : colors.color2
                }}
            >
                <Image
                    src={image}
                    style={{
                        width: 200,
                        height: 230,

                        resizeMode: "cover",
                        position: "absolute",
                        left: 60,
                        top: 80,
                        borderRadius: 30
                    }}
                />

                <View
                    style={{
                        flexDirection: "row",
                        padding: 20,
                        justifyContent: "space-between",
                        width: "100%"
                    }}
                >
                    <Text
                        numberOfLines={2}
                        style={{
                            color: index % 2 === 0 ? colors.color2 : colors.color3,
                            fontSize: 25,
                            fontWeight: "300",

                        }}
                    >{name}</Text>
                    <Text
                        numberOfLines={2}
                        style={{
                            color: index % 2 === 0 ? colors.color2 : colors.color3,
                            fontSize: 20,
                            fontWeight: "700",
                            width: "60%"
                        }}
                    >${price}</Text>
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: index % 2 === 0 ? colors.color2 : colors.color3,
                        borderRadius: 0,
                        padding: 10,
                        borderBottomRightRadius: 20,
                        borderBottomLeftRadius: 20,
                        width: "100%"

                    }}
                >
                    <Button
                        textColor={
                            index % 2 === 0 ? colors.color1 : colors.color2
                        }
                        onPress={() => addToCardHandler(id, name, price, image, stock)}
                    ><Text>Add To Cart</Text></Button>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard