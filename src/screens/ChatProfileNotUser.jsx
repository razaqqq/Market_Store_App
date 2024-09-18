
import { View, Text, Image, TouchableOpacity, Modal } from "react-native"
import { colors } from "../styles/styles"
import Header from "../components/Header"
import { Avatar } from "react-native-paper"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"



const ChatProfileNotUser = () => {

    const navigate = useNavigation()

    const [follow, setFollow] = useState(false)
    const [followVisible, setFollowVisible] = useState(false)

    const showAlertWhenClickUnFollow = () => setFollowVisible(true)
    const hideAlertWhenClickUnFollow = () => setFollowVisible(false)

    const unFollow = () => {
        setFollow(false)
        hideAlertWhenClickUnFollow()
    }



    return (
        <View
            style={{
                width: "100%",
                height: "100%",
                zIndex: 0,
                flexDirection: "column"
            }}
        >
            <View
                style={{
                    width: "100%",
                    height: 300,
                    zIndex: 10,
                    flex: 2
                }}
            >
                <Header back={true} />
                <Image
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                    source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Hopetoun_falls.jpg/640px-Hopetoun_falls.jpg" }}
                />
            </View>
            <View
                style={{
                    flex: 2,
                    flexDirection: "column",
                    zIndex: 20,
                    justifyContent: "flex-start",
                    width: "100%",
                    height: 80,
                    backgroundColor: colors.color2
                }}
            >
                <Image
                    style={{
                        width: 150,
                        height: 150,
                        borderRadius: 80,
                        alignContent: "center",
                        alignSelf: "center",
                        marginTop: -80
                    }}
                    source={{ uri: "https://qph.cf2.quoracdn.net/main-qimg-2e0dec51a8fc83da433bf163cbe56f04-lq" }}
                />
                <View
                    style={{
                        width: "100%",
                        height: "auto",
                        marginTop: 20
                    }}
                >
                    <Text
                        style={{
                            alignSelf: "center",
                            fontSize: 30,
                            fontWeight: "bold",
                            color: colors.color3
                        }}
                    >Anne Lovely</Text>
                </View>
                <View
                    style={{
                        width: "100%",
                        height: "auto",
                        marginTop: 10,
                        paddingHorizontal: 30
                    }}
                >
                    <Text
                        adjustsFontSizeToFit={true}
                        numberOfLines={2}
                        style={{
                            textAlignVertical: "center",
                            textAlign: "center",
                            fontSize: 18
                        }}
                    >
                        Designer, Cat Lover, Book Worm, Apple Pie Fanatic and Nature Enthusiast
                    </Text>
                </View>
                <View
                    style={{
                        marginTop: 30,
                        flexDirection: "row",
                        justifyContent: "center"
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-around",
                            alignContent: "center",
                            alignSelf: "center"
                        }}
                    >
                        <Avatar.Icon
                            icon={"google-maps"}
                            size={50}
                            color={colors.color3}
                            style={{
                                backgroundColor: colors.transparentCustom,

                            }}
                        />
                        <Text
                            style={{
                                alignSelf: "center"
                            }}
                        >
                            Hungary
                        </Text>
                    </View>
                    <View style={{
                        width: 30
                    }} />
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-around",
                            alignContent: "center",
                            alignSelf: "center"
                        }}
                    >
                        <Avatar.Icon
                            icon={"phone"}
                            size={50}
                            color={colors.color3}
                            style={{
                                backgroundColor: colors.transparentCustom,

                            }}
                        />
                        <Text
                            style={{
                                alignSelf: "center"
                            }}
                        >
                            081-2992-2992-20
                        </Text>
                    </View>
                </View>
            </View>

            <View
                style={{
                    width: "100%",
                    height: 100,

                    marginBottom: 80,
                    flexDirection: "row",
                    justifyContent: "space-around"
                }}
            >
                <View
                    style={{
                        flex: 1,
                        backgroundColor: colors.lightMedium,
                        borderTopWidth: 2,
                        borderEndWidth: 2,
                        borderColor: colors.color1,

                    }}
                >
                    <View
                        style={{
                            flexDirection: "column",
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center",
                            height: "100%"
                        }}
                    >
                        <Text
                            style={{
                                textAlign: "center",
                                fontSize: 30,
                                fontWeight: "bold",
                                color: colors.color3
                            }}
                        >
                            9999
                        </Text>
                        <Text
                            style={{
                                textAlign: "center",
                                fontSize: 20
                            }}
                        >
                            Followers
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: colors.lightMedium,
                        borderTopWidth: 2,
                        borderColor: colors.color1
                    }}
                >
                    <View
                        style={{
                            flexDirection: "column",
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center",
                            height: "100%"
                        }}
                    >
                        <Text
                            style={{
                                textAlign: "center",
                                fontSize: 30,
                                fontWeight: "bold",
                                color: colors.color3
                            }}
                        >1999</Text>
                        <Text
                            style={{
                                textAlign: "center",
                                fontSize: 20
                            }}
                        >Following</Text>
                    </View>
                </View>
            </View>

            <View
                style={{
                    position: "absolute",
                    zIndex: 30,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 80,
                    backgroundColor: colors.color1,
                    flexDirection: "row",
                    justifyContent: "space-around",

                }}
            >
                <TouchableOpacity
                    style={{
                        flex: 1,
                        height: "100%",
                        borderRightWidth: 1,
                        borderColor: colors.color7,
                        justifyContent: "center",
                        alignSelf: "center",
                        alignContent: "center",
                    }}
                    onPress={() => {
                        if (follow === true) {
                            showAlertWhenClickUnFollow()

                        }
                        else if (follow === false) {
                            setFollow(true)
                        }
                    }}
                >
                    <Text
                        style={{
                            color: follow === true ? colors.color7 : colors.color2,
                            fontSize: 18,
                            fontWeight: "bold",
                            justifyContent: "center",
                            alignSelf: "center",
                            alignContent: "center",

                        }}
                    >{follow === true ? "FOLOOWED" : "FOLLOW"}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        backgroundColor: colors.greenMedium
                    }}
                    onPress={() => navigate.navigate("CHAT")}
                >
                    <Avatar.Icon
                        icon={"message"}
                        size={80}
                        color={colors.color2}
                        style={{
                            backgroundColor: colors.transparentCustom,
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center"
                        }}
                    />

                </TouchableOpacity>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: colors.greenLight
                    }}
                >
                    <Avatar.Icon
                        icon={"phone"}
                        size={80}
                        color={colors.color2}
                        style={{
                            backgroundColor: colors.transparentCustom,
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center"
                        }}
                    />
                </View>
            </View>

            <Modal
                visible={followVisible}
                onRequestClose={hideAlertWhenClickUnFollow}
                animationType="fade"
                transparent
            >
                <View
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: colors.modalTransparentBackground,
                        justifyContent: "center",
                        alignContent: "center",
                        alignSelf: "center",
                    }}
                >
                    <View
                        style={{
                            width: 300,
                            height: 200,
                            borderRadius: 30,
                            paddingHorizontal: 10,
                            backgroundColor: colors.color2,
                            flexDirection: "column",
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center",
                        }}
                    >
                        <View
                            style={{
                                position: "absolute",
                                width: "100%",
                                height: 80,
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center",
                                top: 20
                            }}
                        >
                            <Text
                                numberOfLines={2}
                                style={{
                                    textAlign: "center",
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center",
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    color: colors.color3
                                }}
                            >Do You Want To Unfollow ?</Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                width: "100%",
                                height: 100,
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center",
                                marginTop: 50
                            }}
                        >
                            <TouchableOpacity
                                style={{

                                    flex: 1,
                                    marginHorizontal: 10,
                                    marginVertical: 20
                                }}
                                onPress={hideAlertWhenClickUnFollow}
                            >
                                <View
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: 30,
                                        backgroundColor: colors.color1,
                                        justifyContent: "center",
                                        alignContent: "center",
                                        alignSelf: "center",
                                        elevation: 5

                                    }}
                                >
                                    <Text
                                        style={{
                                            justifyContent: "center",
                                            alignContent: "center",
                                            alignSelf: "center",
                                            fontSize: 18,
                                            fontWeight: "bold",
                                            color: colors.color2
                                        }}
                                    >CANCEL</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    marginHorizontal: 10,
                                    marginVertical: 20
                                }}
                                onPress={unFollow}
                            >
                                <View
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: 30,
                                        backgroundColor: colors.color3,
                                        justifyContent: "center",
                                        alignContent: "center",
                                        alignSelf: "center",
                                        elevation: 5
                                    }}
                                >
                                    <Text
                                        style={{
                                            justifyContent: "center",
                                            alignContent: "center",
                                            alignSelf: "center",
                                            fontSize: 18,
                                            fontWeight: "bold",
                                            color: colors.color2
                                        }}
                                    >UN FOLLOW</Text>
                                </View>

                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

        </View >
    )
}



export default ChatProfileNotUser