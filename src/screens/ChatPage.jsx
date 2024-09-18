import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { colors } from "../styles/styles"
import { Avatar, Button, TextInput } from "react-native-paper"
import ChatItemShow from "../components/ChatItemShow"
import Header from "../components/Header"
import SenderChatBox from "../components/senderChatBox"
import ReceiverChatBox from "../components/receiverChatBox"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"


const chatType = [
    "All", "Personal", "Design", "Work", "Favourites"
]

const dummyChats = [
    {
        "image": "https://res.cloudinary.com/jerrick/image/upload/v1707195361/65c1bbe184fa66001d1faa64.jpg",
        "name": "dummyName",
        "lastMessage": "jhsagdhsaghdghashdgsahd",
        "time": "5 Min",
        "newMessage": 10,
        "sender": true
    },
    {
        "image": "https://res.cloudinary.com/jerrick/image/upload/v1707195361/65c1bbe184fa66001d1faa64.jpg",
        "name": "dummyName",
        "lastMessage": "jhsagdhsaghdghashdgsahd",
        "time": "5 Min",
        "newMessage": 10,
        "sender": true
    },
    {
        "image": "https://res.cloudinary.com/jerrick/image/upload/v1707195361/65c1bbe184fa66001d1faa64.jpg",
        "name": "dummyName",
        "lastMessage": "jhsagdhsaghdghashdgsahd",
        "time": "5 Min",
        "newMessage": 10,
        "sender": true
    },
    {
        "image": "https://res.cloudinary.com/jerrick/image/upload/v1707195361/65c1bbe184fa66001d1faa64.jpg",
        "name": "dummyName",
        "lastMessage": "jhsagdhsaghdghashdgsahd",
        "time": "5 Min",
        "newMessage": 10,
        "sender": true
    },
    {
        "image": "https://res.cloudinary.com/jerrick/image/upload/v1707195361/65c1bbe184fa66001d1faa64.jpg",
        "name": "dummyName",
        "lastMessage": "jhsagdhsaghdghashdgsahd",
        "time": "5 Min",
        "newMessage": 10,
        "sender": true
    },
    {
        "image": "https://res.cloudinary.com/jerrick/image/upload/v1707195361/65c1bbe184fa66001d1faa64.jpg",
        "name": "dummyName",
        "lastMessage": "jhsagdhsaghdghashdgsahd",
        "time": "5 Min",
        "newMessage": 10,
        "sender": true
    },
    {
        "image": "https://res.cloudinary.com/jerrick/image/upload/v1707195361/65c1bbe184fa66001d1faa64.jpg",
        "name": "dummyName",
        "lastMessage": "jhsagdhsaghdghashdgsahd",
        "time": "5 Min",
        "newMessage": 10,
        "sender": true
    },
    {
        "image": "https://res.cloudinary.com/jerrick/image/upload/v1707195361/65c1bbe184fa66001d1faa64.jpg",
        "name": "dummyName",
        "lastMessage": "jhsagdhsaghdghashdgsahd",
        "time": "5 Min",
        "newMessage": 10,
        "sender": true
    },
    {
        "image": "https://res.cloudinary.com/jerrick/image/upload/v1707195361/65c1bbe184fa66001d1faa64.jpg",
        "name": "dummyName",
        "lastMessage": "jhsagdhsaghdghashdgsahd",
        "time": "5 Min",
        "newMessage": 10,
        "sender": true
    },
    

]

const ChatPage = ({
    name,

}) => {
    console.log(`Chat Page Logging`)

    navigate = useNavigation()

    const [message, setMessage] = useState("")
    const [hideMore, setHideMore] = useState(true)



    return (
        <View
            style={{
                width: "100%",
                height: "100%",
                zIndex: 10,

            }}
        >
            <View
                style={{
                    position: "absolute",
                    elevation: 1,
                    height: 100,
                    backgroundColor: colors.color2,
                    top: 0,
                    zIndex: 20,
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: 10,
                    alignContent: "center",
                    paddingTop: 30
                }}
            >
                <TouchableOpacity
                    style={{
                        justifyContent: "flex-start",
                        alignContent: "flex-start",
                        alignSelf: "center",
                        flex: 1
                    }}
                    onPress={() => navigate.goBack()}
                >
                    <Avatar.Icon
                        size={50}
                        color={colors.color3}
                        icon={"arrow-left"}
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

                        justifyContent: "flex-start",

                        alignContent: "center",
                        alignSelf: "center",
                        flex: 3
                    }}
                >
                    <Text
                        style={{
                            color: colors.color3,
                            fontSize: 20,
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center"
                        }}
                    >
                        {name}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",


                        justifyContent: "center",
                        alignContent: "center",
                        alignSelf: "center",
                        marginRight: 20,
                        flex: 1
                    }}
                >
                    <TouchableOpacity>
                        <Avatar.Icon
                            size={50}
                            color={colors.color3}
                            icon={"phone"}
                            style={{
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center",
                                backgroundColor: colors.transparentCustom,
                                marginRight: 5
                            }}
                        />
                    </TouchableOpacity>
                    <View
                        style={{
                            width: "10",
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center",

                        }}
                    >

                    </View>
                    <TouchableOpacity>
                        <Avatar.Icon
                            size={50}
                            color={colors.color3}
                            icon={"record"}
                            style={{
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center",
                                backgroundColor: colors.transparentCustom
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View
                style={{
                    width: "100%",
                    height: "100%",
                    paddingTop: 150,
                    paddingBottom: 170,
                    paddingHorizontal: 50
                }}
            >
                <ScrollView
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    style={{
                        width: "100%",
                        height: "auto"
                    }}
                >
                    {
                        dummyChats.map((chat, index) => {

                            chat.sender === true ? (
                                <SenderChatBox
                                    image={chat.image}
                                    message={chat.lastMessage}
                                    sender={chat.sender}
                                />
                            ) : (
                                <ReceiverChatBox
                                    image={chat.image}
                                    message={chat.lastMessage}
                                    sender={chat.sender}
                                />
                            )

                        })
                    }
                </ScrollView>
            </View>

            {
                hideMore === true ? null : (
                    <View
                        style={{
                            position: "absolute",
                            height: "auto",
                            width: 50,
                            flexDirection: "column",
                            justifyContent: "center",
                            alignContent: "space-around",
                            zIndex: 30,
                            bottom: 100,
                            right: 20
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => console.log("")}
                        >
                            <View
                                style={{
                                    width: 50,
                                    height: 50,
                                    backgroundColor: colors.color1,
                                    borderRadius: 80,
                                    justifyContent: "center",
                                    alignContent: "center",
                                    elevation: 10,
                                    marginBottom: 10
                                }}
                            >
                                <Avatar.Icon
                                    size={50}
                                    color={colors.color2}
                                    icon={"microphone-outline"}
                                    style={{
                                        backgroundColor: colors.transparentCustom
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => console.log("Image")}
                        >
                            <View
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 80,
                                    backgroundColor: colors.color1,
                                    elevation: 10,
                                    justifyContent: "center",
                                    alignContent: "center",
                                    marginBottom: 10
                                }}
                            >
                                <Avatar.Icon
                                    size={50}
                                    color={colors.color2}
                                    icon={"image-outline"}
                                    style={{
                                        backgroundColor: colors.transparentCustom
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => console.log("Video")}
                        >
                            <View
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 80,
                                    backgroundColor: colors.color1,
                                    elevation: 10,
                                    justifyContent: "center",
                                    alignContent: "center"
                                }}
                            >
                                <Avatar.Icon
                                    size={50}
                                    color={colors.color2}
                                    icon={"video-outline"}
                                    style={{
                                        backgroundColor: colors.transparentCustom
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                )
            }

            <View
                style={{
                    elevation: 10,
                    height: "auto",
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    zIndex: 20,
                    backgroundColor: colors.color2,
                    flexDirection: "row",
                    paddingHorizontal: 20,
                    paddingVertical: 20
                }}
            >


                <TextInput

                    style={{
                        flex: 2,
                        height: 60,
                        borderTopLeftRadius: 40,
                        borderBottomLeftRadius: 40,
                        borderTopRightRadius: 40,
                        borderBottomRightRadius: 40,

                    }}

                    underlineColorAndroid="transparent"
                    underlineColor="transparent"
                    onChangeText={setMessage}
                    placeholder={"Message ..."}
                />



                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        marginLeft: 10
                    }}
                >
                    <TouchableOpacity
                        onPress={() => {
                            console.log(message)
                        }}
                    >
                        <View
                            style={{
                                height: 50,
                                width: 50,
                                backgroundColor: colors.color1,
                                borderRadius: 60,
                                marginRight: 10
                            }}
                        >
                            <Avatar.Icon
                                size={50}
                                color={colors.color2}
                                icon={"send"}
                                style={{
                                    backgroundColor: colors.transparentCustom,
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center"
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            if (hideMore === true) {
                                setHideMore(false)
                            }
                            else {
                                setHideMore(true)
                            }

                        }}
                    >
                        <View
                            style={{
                                height: 50,
                                width: 50,
                                backgroundColor: colors.color1,
                                borderRadius: 60,

                            }}
                        >
                            <Avatar.Icon
                                size={50}
                                color={colors.color2}
                                icon={"more"}
                                style={{
                                    backgroundColor: colors.transparentCustom,
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center"
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                </View>




            </View>
        </View>
    )

}



export default ChatPage