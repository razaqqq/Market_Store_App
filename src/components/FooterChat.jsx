import { TouchableOpacity, View } from "react-native"
import { Avatar } from "react-native-paper"
import { colors } from "../styles/styles"
import { useNavigation } from "@react-navigation/native"






const FooterChat = ({ activeRoute = "CHAT-DASHBOARD" }) => {

    const navigate = useNavigation()


    // const TabsConfigsType tabs = {
    //     Home = {
    //         icon: ({ progress, focused }) => /* Icon Component */,
    //         renderTitle: ({ progress, title }) => /* Custom reanimated Component */
    //     },
    //     Profile =  {
    //         icon: ({ progress, focused }) => /* Icon Component */,
    //         renderTitle: ({ progress, title }) => /* Custom reanimated Component */
    //     }
    // }

    const navigationHandler = (key) => {
        switch (key) {
            case 0:
                navigate.navigate("CHAT-DASBOARD")

                break
            case 1:
                navigate.navigate("CONTACT-LIST")
                break
            case 2:
                navigate.navigate("PROFILE-MESSAGE")
                break
            default:
                navigate.navigate("CHAT-DASBOARD")
                break
        }
    }

    const avatarOptions = {
        color: colors.color2,
        size: 50,
        style: {
            backgroundColor: colors.color1
        }
    }

    const isAuthenticated = true

    return (
        <View
            style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                borderTopLeftRadius: 120,
                borderTopRightRadius: 120,
                elevation: 20,
                backgroundColor: colors.color2,
                height: "auto",

            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    paddingHorizontal: 25,
                    paddingVertical: 10
                }}
            >
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigate.navigate("HOME")}>
                    <Avatar.Icon
                        color={colors.color3}
                        size={50}
                        style={{
                            backgroundColor: colors.transparentCustom
                        }}
                        icon={"step-backward"} />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigationHandler(0)}>
                    <Avatar.Icon
                        {...avatarOptions}
                        icon={activeRoute === "CHAT-DASHBOARD" ? "message" : "message-outline"} />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigationHandler(1)}

                >
                    <Avatar.Icon
                        color={colors.color2}
                        {...avatarOptions}
                        icon={isAuthenticated === false ?
                            "login" :
                            activeRoute === "CONTACT-LIST" ? "account" : "account-outline"
                        } />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigationHandler(2)}

                >
                    <Avatar.Icon
                        color={colors.color2}
                        {...avatarOptions}
                        icon={isAuthenticated === false ?
                            "login" :
                            activeRoute === "PROFILE-MESSAGE" ? "account" : "face-outline"
                        } />
                </TouchableOpacity>
            </View>
        </View>
    )

}



export default FooterChat