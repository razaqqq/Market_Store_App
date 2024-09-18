import { Image, Text, TouchableOpacity, View } from "react-native"
import { colors } from "../styles/styles"
import { Button } from "react-native-paper"


const ProductCardVertical = ({
    stock,
    name,
    price,
    image,
    id,
    addToCardHandler,
    index,
    description,
    width,
    height,
    navigate
}) => {

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigate.navigate("PRODUCT-DETAILS", { id })}
            style={{
            }}
        >
            <View
                style={{
                    elevation: 15,
                    marginVertical: 10,
                    marginHorizontal: 10,
                    width: width,
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 30,
                    borderRadius: 20,
                    height: height,
                    flexDirection: "column",
                    backgroundColor: colors.color2
                }}
            >

                <Text
                    numberOfLines={1}

                    style={{
                        color: colors.color3,
                        fontSize: 25,
                        fontWeight: "300",
                        marginVertical: 10,
                        alignItems: "center"
                    }}
                >{name}</Text>

                <View
                    style={{
                        position: "absolute",
                        width: 80,
                        height: 30,
                        backgroundColor: colors.color7,
                        top: 50,
                        right: 10,
                        zIndex: 20,
                        borderRadius: 50,
                        flexDirection: "column",
                        elevation: 10

                    }}
                >
                    <Text
                        style={{
                            color: colors.color2,
                            justifyContent: "center",
                            alignSelf: "center",
                            alignItems: "center",
                            fontSize: 15,
                            marginTop: 5,
                            fontWeight: "bold"
                        }}
                    >10% Off</Text>
                </View>






                <Image
                    src={image}
                    style={{
                        width: "80%",
                        height: 100,

                        resizeMode: "cover",
                        zIndex: 10,
                        borderRadius: 10
                    }}
                />


                <View style={{
                    width: "100%",
                    paddingHorizontal: 10,
                    paddingVertical: 10
                }}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        width: "100%",

                    }}>
                        <Text

                            style={{
                                color: colors.color3,
                                fontSize: 15,
                                fontWeight: "bold",

                            }}
                        >Price   </Text>
                        <Text

                            style={{
                                color: colors.color3,
                                fontSize: 15,
                                fontWeight: "bold",

                            }}
                        >${price}</Text>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            width: "100%",

                        }}
                    >
                        <Text

                            style={{
                                color: colors.color3,
                                fontSize: 15,
                                fontWeight: "bold",

                            }}
                        >Stock   </Text>
                        <Text

                            style={{
                                color: colors.color3,
                                fontSize: 15,
                                fontWeight: "bold",

                            }}
                        >{stock} Pieces</Text>
                    </View>

                    <View
                        style={{
                            flexDirection: "column",

                            justifyContent: "flex-start",
                            width: "100%",

                        }}
                    >
                        <Text

                            style={{
                                color: colors.color3,
                                fontSize: 15,
                                fontWeight: "bold",

                            }}
                        >description   </Text>
                        <Text
                            numberOfLines={2}

                            style={{
                                color: colors.color3,
                                fontSize: 15,


                            }}
                        >{description}</Text>
                    </View>
                </View>





                <TouchableOpacity
                    style={{
                        backgroundColor: colors.color1,
                        borderRadius: 0,
                        padding: 10,
                        borderBottomRightRadius: 20,
                        borderBottomLeftRadius: 20,
                        width: "100%"

                    }}
                >
                    <Button
                        textColor={
                            colors.color2
                        }

                        onPress={() => addToCardHandler(id, name, price, image, stock)}
                    ><Text
                        style={{
                            fontWeight: "bold"
                        }}
                    >Add To Cart</Text></Button>
                </TouchableOpacity>

            </View>
        </TouchableOpacity>
    )

}


export default ProductCardVertical