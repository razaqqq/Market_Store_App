import { SafeAreaView, ScrollView, Touchable, TouchableOpacity, View } from "react-native"
import { Avatar, Text } from "react-native-paper"
import ChatItemShow from "../components/ChatItemShow"

import { colors } from "../styles/styles"
import FooterChat from "../components/FooterChat"
import { useNavigation } from "@react-navigation/native"



const ChatDashboard = () => {
    console.log(`Chat Dasboard Page Logging`)

    const navigate = useNavigation()

    const chats = [
        {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpdV5eKcBMzjs7ltDev4YxvWvnNxcFk7wUg&s",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        },
        {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpdV5eKcBMzjs7ltDev4YxvWvnNxcFk7wUg&s",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        }, {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpdV5eKcBMzjs7ltDev4YxvWvnNxcFk7wUg&s",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        }, {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpdV5eKcBMzjs7ltDev4YxvWvnNxcFk7wUg&s",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        }, {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpdV5eKcBMzjs7ltDev4YxvWvnNxcFk7wUg&s",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        }, {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpdV5eKcBMzjs7ltDev4YxvWvnNxcFk7wUg&s",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        }, {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpdV5eKcBMzjs7ltDev4YxvWvnNxcFk7wUg&s",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        }, {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpdV5eKcBMzjs7ltDev4YxvWvnNxcFk7wUg&s",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        }, {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpdV5eKcBMzjs7ltDev4YxvWvnNxcFk7wUg&s",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        }, {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpdV5eKcBMzjs7ltDev4YxvWvnNxcFk7wUg&s",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        }, {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpdV5eKcBMzjs7ltDev4YxvWvnNxcFk7wUg&s",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        }, {
            "name": "test",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpdV5eKcBMzjs7ltDev4YxvWvnNxcFk7wUg&s",
            "lastestMessage": "Lastest Messagehasgdhashjdhasgdhasghdhjasgdhagshdashghdgsahdghasghdgashdghasghdasghjg",
            "time": "5 min",
            "mMessageSum": 5
        }

    ]



    return (
        <View
            style={{
                width: "100%",
                height: "100%",
                backgroundColor: colors.color2,
                flexDirection: "column",
                flex: 1,

            }}
        >

            <ScrollView
                horizontal={false}
                style={{
                    marginBottom: 50
                }}
            >
                <View
                    style={{
                        width: "100%",
                        height: 80,
                        backgroundColor: colors.color3,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignContent: "center",
                        alignSelf: "center",
                        paddingHorizontal: 10

                    }}

                >
                    <View
                        style={{
                            alignContent: "center",
                            alignSelf: "center",
                            justifyContent: "center",
                            flex: 1
                        }}
                    >
                        <Avatar.Icon
                            size={50}

                            color={colors.color2}
                            icon={"dots-vertical"}
                            style={{


                                backgroundColor: colors.transparentCustom
                            }}
                        />
                    </View>
                    <View
                        style={{
                            flex: 2,
                            alignContent: "center",
                            alignSelf: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 24,
                                fontWeight: "bold",
                                color: colors.color2
                            }}
                        >
                            ChatDasboard
                        </Text>
                    </View>
                    <View
                        style={{

                            flex: 1,

                            alignContent: "center",
                            alignSelf: "center",
                            justifyContent: "center",

                        }}
                    >
                        <Avatar.Icon
                            size={50}
                            color={colors.color2}
                            icon={"plus"}
                            style={{
                                backgroundColor: colors.transparentCustom,


                                alignSelf: "flex-end"
                            }}
                        />
                    </View>
                </View>
                <View
                    style={{
                        height: 50,
                        width: "auto",
                        backgroundColor: colors.color1,
                        borderRadius: 20,
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        marginVertical: 10,
                        marginHorizontal: 20,
                        paddingHorizontal: 5
                    }}
                >
                    <Avatar.Icon
                        icon={"magnify"}
                        size={50}
                        color={colors.color2}
                        style={{
                            backgroundColor: colors.transparentCustom,
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center"
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 20,
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center",
                            color: colors.color2
                        }}
                    >Search</Text>
                </View>
                <View
                    style={{
                        width: "auto",
                        height: "auto",
                        marginTop: 20,
                        marginHorizontal: 20,
                        marginBottom: 30

                    }}
                >
                    {
                        chats.map((chat, index) => (
                            <ChatItemShow
                                image={chat.image}
                                MmessageSum={chat.mMessageSum}
                                lastestMessage={chat.lastestMessage}
                                name={chat.name}
                                time={chat.time}
                                navigate={navigate}
                            />
                        ))
                    }
                </View>
            </ScrollView>

            <FooterChat activeRoute="CHAT-DASHBOARD" navigate={navigate} />



        </View>
    )
}


export default ChatDashboard