import { Image, TouchableOpacity, View, Text } from "react-native"
import { Avatar } from "react-native-paper"
import { colors } from "../styles/styles"
import { useNavigation } from "@react-navigation/native"





const ContactListItem = ({
    image,
    name,
    description,
    index
}) => {

    const navigate = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => navigate.navigate("CHAT-PROFILE-NOT-USER")}
        >
            <View
                style={{
                    flexDirection: "row",
                    flex: 1,
                    marginBottom: 10,
                    width: "85%",
                    marginBottom: 20,
                    justifyContent: "center",
                    alignContent: "center",
                    alignSelf: "center"
                }}
            >

                <Image style={{
                    width: 80,
                    height: 80,
                    borderRadius: 80,

                }} source={{ uri: image }} />
                <View
                    style={{
                        flex: 1,
                        flexDirection: "column",
                        marginLeft: 20,
                        justifyContent: "flex-start",
                        alignContent: "center",
                        alignSelf: "center"
                    }}
                >
                    <View>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: "bold"
                        }}>{name}</Text>
                    </View>
                    <View
                        style={{
                            height: 3
                        }}
                    />
                    <View>
                        <Text
                            style={{
                                fontSize: 18,

                            }}
                        >{description}</Text>
                    </View>
                </View>
                <Avatar.Icon
                    color={colors.color3}
                    icon={"step-forward"}
                    size={50}

                    style={{
                        backgroundColor: colors.transparentCustom
                    }}
                />
            </View>
        </TouchableOpacity>
    )
}


export default ContactListItem