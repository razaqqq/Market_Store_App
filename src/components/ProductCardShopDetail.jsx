import { Image, Text, TouchableOpacity, View } from "react-native"
import { colors } from "../styles/styles"

const ProductCardShopDetails = ({
    width,
    height,
    image,
    title,
    description,
    price,
    discount,
    category,
    index

}) => {
    return (
        <View
            style={{
                width: width,
                height: height,
                elevation: 5,
                marginHorizontal: 5,
                marginVertical: 5,

            }}
        >
            <TouchableOpacity
                onPress={() => console.log("")}
            >
                <View
                    style={{
                        width: "100%",
                        height: "100%",
                        flexDirection: "column",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 0,

                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            width: "100%",
                            backgroundColor: colors.color8
                        }}
                    />
                    <View
                        style={{
                            flex: 1,
                            width: "100%",
                            backgroundColor: colors.color2,

                        }} />
                </View>
                <View
                    style={{
                        width: "100%",
                        height: "100%",
                        flexDirection: "column",
                        padding: 15,
                        zIndex: 99

                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            width: "100%",
                            flexDirection: "row"
                        }}
                    >
                        <View
                            style={{
                                flex: 4,
                                height: "100%",
                                flexDirection: "column",
                                paddingRight: 25
                            }}
                        >
                            <View>
                                <Text
                                    numberOfLines={1}
                                    style={{
                                        color: colors.color2,
                                        fontWeight: "bold",
                                        fontSize: 18,
                                        fontStyle: "italic"
                                    }}
                                >{title}</Text>
                            </View>
                            <View>
                                <Text
                                    numberOfLines={2}
                                    style={{
                                        fontSize: 16,
                                        color: colors.color1,
                                        fontStyle: "italic"
                                    }}
                                >{description}</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                flex: 1
                            }}
                        >
                            <View
                                style={{
                                    width: (width * 1 / 3.5),
                                    height: (width * 1 / 3.5),
                                    borderRadius: 100,
                                    backgroundColor: colors.color1,
                                    position: "absolute",
                                    right: -5,
                                    top: 5,
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center"
                                }}
                            >
                                <Text
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: 18,
                                        color: colors.color2,
                                        justifyContent: "center",
                                        alignContent: "center",
                                        alignSelf: "center"
                                    }}
                                >$ {price}</Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 3,
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center",
                        }}
                    >
                        <View
                            style={{
                                width: (height * 1 / 2.5),
                                height: (height * 1 / 2.5),
                                borderRadius: 200,
                                backgroundColor: colors.color7,
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center",
                                zIndex: 40
                            }}
                        >
                            <Image
                                style={{
                                    position: "absolute",
                                    width: (height * 1 / 2.5),
                                    height: (height * 1 / 2.5),
                                    top: 10,
                                    bottom: 0,
                                    right: 10,

                                    borderRadius: 100,
                                    zIndex: 50

                                }}
                                resizeMode="cover"
                                source={{
                                    uri: image
                                }}
                            />

                        </View>
                        {
                            discount === 0 ? (
                                <View></View>
                            ) : (
                                <View
                                    style={{
                                        position: "absolute",
                                        width: "auto",
                                        height: "auto",
                                        bottom: 0,

                                        zIndex: 100,
                                        left: -20,

                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 25,
                                            fontWeight: "bold",
                                            color: colors.color3,
                                            fontStyle: "italic",

                                        }}
                                    >
                                        {discount}%Off
                                    </Text>
                                </View>
                            )
                        }
                    </View>
                    <View
                        style={{
                            flex: 1,
                            width: "100%",
                            flexDirection: "row"
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                height: "100%",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center"
                            }}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    width: "100%"
                                }}
                            >
                                <Text
                                    style={{
                                        textAlign: "left",
                                        fontWeight: "bold",
                                        color: colors.color8,
                                        fontSize: 15
                                    }}
                                >Category :</Text>
                            </View>
                            <View
                                style={{ flex: 1, width: "100%" }}
                            >
                                <Text
                                    style={{
                                        textAlign: "left",
                                        fontWeight: "bold",
                                        fontStyle: "italic",
                                        fontSize: 18,
                                        color: colors.color1
                                    }}
                                >
                                    {category}
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                height: "100%",
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center"
                            }}
                        >
                            <View
                                style={{
                                    width: "100%",
                                    height: "70%",

                                    borderRadius: 50,
                                    backgroundColor: colors.color1,
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center"
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: colors.color2,
                                        fontWeight: "bold",
                                        justifyContent: "center",
                                        alignContent: "center",
                                        alignSelf: "center",
                                        textAlign: "center"
                                    }}
                                >Edit Product</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}





export default ProductCardShopDetails