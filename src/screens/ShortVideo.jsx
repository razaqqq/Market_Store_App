import { Image, SafeAreaView, Text, TouchableOpacity, View, ScrollView } from "react-native"
import Footer from "../components/Footer"
import { Avatar } from "react-native-paper"
import { colors } from "../styles/styles"

import { useEffect, useState } from "react"
import { StatusBar } from "expo-status-bar"
import { useNavigation } from "@react-navigation/native"




const ShortVideo = () => {

    const navigate = useNavigation()

    const [randomNumber, setRandomNumber] = useState(0)

    const dummyCoomentData = [
        {
            "message": "aslkdhasgdhasghdgashdhsahjdghasgdhasghdgahsdghsaj"
        },
        {
            "message": "askjgdhsaghdgzx cxzbcvasgd"
        },
        {
            "message": "askjgdhsaghdgzx cxzbcvasgd"
        },
        {
            "message": "askjgdhsaghdgzx cxzbcvasgd"
        },
        {
            "message": "askjgdhsaghdgzx cxzbcvasgd"
        },
        {
            "message": "askjgdhsaghdgzx cxzbcvasgd"
        },
        {
            "message": "askjgdhsaghdgzx cxzbcvasgd"
        },
        {
            "message": "askjgdhsaghdgzx cxzbcvasgd"
        },
        {
            "message": "askjgdhsaghdgzx cxzbcvasgd"
        },
        {
            "message": "askjgdhsaghdgzx cxzbcvasgd"
        },
        {
            "message": "askjgdhsaghdgzx cxzbcvasgd"
        },
        {
            "message": "askjgdhsaghdgzx cxzbcvasgd"
        },
        {
            "message": "askjgdhsaghdgzx cxzbcvasgd"
        },
        {
            "message": "askjgdhsaghdgzx cxzbcvasgd"
        },
        {
            "message": "askjgdhsaghdgzx cxzbcvasgd"
        },
        {
            "message": "askjgdhsaghdgzx cxzbcvasgd"
        }
    ]

    const colorArrays = [
        colors.color1, colors.color2, colors.color3, colors.color4, colors.color5, colors.color7
    ]

    const randomizeColor = ({ colorLength }) => {
        const min = 0
        const max = colorLength

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

        setRandomNumber(randomNumber)

    }

    useEffect(() => {
        randomizeColor(colorArrays.length)
    }, [])

    return (
        <View
            style={{
                width: "100%",
                height: "100%",
            }}
        >
            <StatusBar />
            <Image
                style={{
                    width: "100%",
                    height: "100%",
                    zIndex: 10,
                }}
                source={{ uri: "https://www.surfertoday.com/images/stories/beach-sunset.jpg" }}
            />
            <View
                style={{
                    position: "absolute",
                    top: 40,
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignContent: "center",
                    alignSelf: "center",
                    height: 40,
                    zIndex: 20,
                    height: "auto",
                    left: 10,
                    right: 10
                }}
            >
                <View
                    style={{
                        flex: 1,


                        height: "100%",
                        alignSelf: "center",
                        justifyContent: "center",
                        alignContent: "center"
                    }}
                >
                    <View
                    >
                        <Avatar.Icon
                            icon={"video-outline"}
                            size={80}
                            color={colors.color2}
                            style={{
                                alignSelf: "center",
                                justifyContent: "center",
                                alignContent: "center",
                                backgroundColor: colors.transparentCustom
                            }}
                        />
                        <View
                            style={{
                                width: 20,
                                height: 20,
                                position: "absolute",
                                borderRadius: 20,
                                backgroundColor: colors.color1,
                                top: 18,
                                right: 25,


                            }}
                        />

                    </View>
                    <Text
                        style={{
                            color: colors.color2,
                            fontSize: 16,
                            fontWeight: "bold",
                            alignSelf: "center",
                            justifyContent: "center",
                            alignContent: "center",
                            position: "absolute",
                            bottom: 5,

                        }}
                    >
                        ShortVideo
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignSelf: "center",
                        flex: 2
                    }}
                >
                    <TouchableOpacity
                        style={{
                            alignContent: "center",
                            height: "100%",
                        }}
                    >
                        <Text
                            style={{
                                color: colors.color2,
                                fontSize: 14,

                            }}
                        >Following</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text
                            style={{
                                color: colors.color2,
                                fontSize: 14,
                                fontWeight: "bold"
                            }}
                        >ShortVideo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text
                            style={{
                                color: colors.color2,
                                fontSize: 14
                            }}
                        >For You</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignContent: "flex-end",
                        height: "100%",
                        alignSelf: "center",
                    }}
                >
                    <Avatar.Icon
                        style={{
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center",
                            backgroundColor: colors.transparentCustom
                        }}
                        icon={"message-outline"}
                        size={60}
                        color={colors.color2}
                    />

                </View>
            </View>

            <View
                style={{
                    zIndex: 30,
                    position: "absolute",
                    right: 10,
                    bottom: 220,
                    height: 230,
                    width: 60,
                    flexDirection: "column",
                    alignContent: "space-around"
                }}
            >
                <View
                    style={{
                        width: 80,
                        height: "auto",
                        flexDirection: "column",
                        flex: 1,


                    }}
                >
                    <Avatar.Icon
                        size={50}
                        color={colors.color2}
                        icon={"square-outline"}
                        style={{
                            flex: 1,
                            backgroundColor: colors.transparentCustom,
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center"
                        }}
                    />
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center"
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                color: colors.color2
                            }}
                        >0:23</Text>
                    </View>
                </View>
                <View
                    style={{
                        width: 80,
                        height: "auto",
                        flexDirection: "column",
                        flex: 1,

                    }}
                >
                    <Avatar.Icon
                        size={50}
                        color={colors.color2}
                        icon={"heart"}
                        style={{
                            flex: 1,
                            backgroundColor: colors.transparentCustom,
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center"
                        }}
                    />
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center"
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                color: colors.color2,
                            }}
                        >12.4K</Text>
                    </View>
                </View>
                <View
                    style={{
                        width: 80,
                        height: "auto",
                        flexDirection: "column",
                        flex: 1,

                    }}
                >
                    <Avatar.Icon
                        size={50}
                        color={colors.color2}
                        icon={"step-forward"}
                        style={{
                            flex: 1,
                            backgroundColor: colors.transparentCustom,
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center"
                        }}
                    />

                </View>
            </View>

            <View
                style={{
                    flexDirection: "column",
                    height: "auto",
                    width: "100%",
                    position: "absolute",
                    bottom: 90,
                    zIndex: 20,
                    paddingHorizontal: 10
                }}
            >
                <View
                    style={{


                        flexDirection: "row",
                        width: "100%",
                        height: 100,
                        flex: 4

                    }}
                >

                    <View
                        style={{
                            flexDirection: "column",
                            height: "100%"
                        }}
                    >
                        <View
                            style={{

                                flexDirection: "row",

                                height: "auto",
                                width: "100%",
                                flex: 1,

                                justifyContent: "space-beetwen"
                            }}
                        >
                            <View
                                style={{
                                    justifyContent: "flex-start",
                                    flexDirection: "row",
                                    height: "100%",

                                }}
                            >
                                <Image
                                    style={{
                                        height: 60,
                                        width: 60,
                                        borderRadius: 60,
                                        borderWidth: 2,
                                        borderColor: colors.color1,
                                        alignContent: "center",
                                        alignSelf: "center"
                                    }}
                                    source={{
                                        uri: "https://m.media-amazon.com/images/I/41qo60ErcdL.jpg"
                                    }}
                                />
                                <View
                                    style={{
                                        flexDirection: "column",
                                        justifyContent: "flex-start",
                                        alignContent: "center",
                                        alignSelf: "center",
                                        marginLeft: 10
                                    }}
                                >
                                    <View
                                    >
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                color: colors.color2,
                                                fontWeight: "bold"
                                            }}
                                        >@Triller</Text>

                                    </View>
                                    <View style={{
                                        height: 10
                                    }} />
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            justifyContent: "flex-start"
                                        }}
                                    >
                                        <View
                                            style={{
                                                justifyContent: "center",
                                                alignContent: "center",
                                                alignSelf: "center",
                                                width: 80,
                                                height: "auto",
                                                borderRadius: 40,
                                                backgroundColor: colors.color1
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 16,
                                                    justifyContent: "center",
                                                    alignContent: "center",
                                                    alignSelf: "center",
                                                    color: colors.color2,
                                                    fontWeight: "bold"
                                                }}
                                            >Follow</Text>
                                        </View>
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                justifyContent: "flex-start",

                                            }}
                                        >
                                            <Avatar.Icon
                                                size={30}
                                                style={{
                                                    backgroundColor: colors.transparentCustom
                                                }}
                                                color={colors.color2}

                                                icon={"play"}
                                            />
                                            <Text
                                                style={{
                                                    color: colors.color2,
                                                    fontSize: 16,
                                                    fontWeight: "bold",
                                                    justifyContent: "center",
                                                    alignContent: "center",
                                                    alignSelf: "center",
                                                }}
                                            >
                                                10.1k
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View
                                style={{
                                    height: "100%",
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center",
                                }}
                            >
                                <Avatar.Icon
                                    size={60}
                                    style={{
                                        backgroundColor: colors.transparentCustom,
                                        justifyContent: "center",
                                        alignContent: "center",
                                        alignSelf: "center",
                                        backgroundColor: colors.transparentCustom
                                    }}
                                    color={colors.color2}
                                    icon={"dots-vertical-circle"}
                                />
                            </View>

                        </View>
                        <View
                            style={{

                                flex: 1,
                                width: "100%",
                                flexDirection: "flex-start",
                                flexDirection: "row",
                                width: "100%",


                            }}
                        >
                            <Avatar.Icon
                                color={colors.color2}
                                size={60}
                                style={{
                                    backgroundColor: colors.transparentCustom,
                                    marginRight: 10,
                                    alignSelf: "center",
                                    alignContent: "center"
                                }}
                                icon={"music-note"}
                            />
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: colors.color2,
                                    fontStyle: "italic",
                                    fontWeight: "bold",
                                    alignSelf: "center",
                                    alignContent: "center"
                                }}
                            >
                                Blinding Lights
                            </Text>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: colors.color2,
                                    alignSelf: "center",
                                    alignContent: "center"
                                }}
                            >
                                By The Weekends
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{
                            flex: 1,

                            width: "100%",
                            height: "100%",
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center"
                        }}
                    >
                        <Image
                            style={{
                                height: 60,
                                width: 60,
                                borderRadius: 80,
                                borderWidth: 3,
                                borderColor: colors.color1,
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center"
                            }}
                            source={{
                                uri: "https://m.media-amazon.com/images/I/41qo60ErcdL.jpg"
                            }}
                        />
                    </View>









                </View>

                <ScrollView
                    horizontal={true}
                    style={{
                        width: "100%",
                        height: 60,
                        flexDirection: "row",
                        flex: 1,
                        alignSelf: "center",
                        alignContent: "center",



                    }}
                >
                    {
                        dummyCoomentData.map((dummyComment, index) => (
                            <CommentShortVideo
                                colorArrays={colorArrays}
                                randomNumber={randomNumber}
                                message={dummyComment.message}
                            />
                        ))
                    }
                </ScrollView>


            </View>




            <View
                style={{
                    position: "absolute",
                    bottom: 5,
                    flexDirection: "row",
                    flex: 1,
                    justifyContent: "space-around",
                    height: 80,
                    width: "100%",
                    zIndex: 20,



                }}
            >
                <View
                    style={{
                        width: 80,
                        height: 80,

                        justifyContent: "center",
                        alignContent: "center",
                        alignSelf: "center",

                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigate.goBack()}
                    >
                        <Avatar.Icon
                            icon={"home"}
                            color={colors.color2}
                            style={{
                                backgroundColor: colors.transparentCustom,
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center",

                            }}
                            size={80}
                        />
                        <View
                            style={{
                                position: "absolute",
                                bottom: 10,

                                right: 5,
                                left: 5,
                                height: 5,
                                backgroundColor: colors.color1,
                                width: "90%",
                                borderRadius: 5

                            }}

                        />


                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        backgroundColor: colors.color1,
                        width: 60,
                        height: 60,
                        borderRadius: 80,
                        justifyContent: "center",
                        alignContent: "center",
                        alignSelf: "center"
                    }}
                >

                    <TouchableOpacity
                        style={{

                        }}
                        onPress={() => navigate.navigate("ADD-VIDEO-SHORT")}
                    >
                        <Avatar.Icon
                            icon={"plus"}
                            size={80}
                            color={colors.color2}
                            style={{
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center",
                                backgroundColor: colors.transparentCustom
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        width: 80,
                        height: 80,
                        backgroundColor: colors.transparentCustom,
                        justifyContent: "center",
                        alignContent: "center",
                        alignSelf: "center"
                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigate.navigate("PROFILE-SHORT-VIDEO")}
                    >
                        <Avatar.Icon
                            size={80}
                            color={colors.color2}
                            style={{
                                backgroundColor: colors.transparentCustom,
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center"
                            }}
                            icon={"account"}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

const CommentShortVideo = ({ colorArrays, randomNumber, message }) => {

    return (
        <View
            style={{
                height: 60,
                minWidth: 50,
                maxWidth: 300,
                borderRadius: 80,
                marginHorizontal: 5,
                borderWidth: 3,
                borderColor: colorArrays[randomNumber],
                backgroundColor: colors.transparentCustom,
                justifyContent: "center",
                alignContent: "center",
                alignSelf: "center",
            }}
        >
            <Text
                numberOfLines={1}
                style={{
                    color: colors.color2,
                    fontSize: 18,
                    fontWeight: "bold",
                    paddingHorizontal: 15,
                    paddingVertical: 5,
                    alignContent: "center",
                    fontWeight: "bold",

                }}
            >{message}</Text>
        </View>
    )

}

export default ShortVideo