import { View, TouchableOpacity, StyleSheet, Animated, Alert } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../styles/styles'
import { Avatar } from 'react-native-paper'
import { useSelector } from 'react-redux'


const Footer = ({ activeRoute = "HOME" }) => {

    console.log("Footer Page Logging")

    const navigate = useNavigation()

    const { loading, isAuthenticated } = useSelector(state => state.user)

    console.log(`isAuthenticated = ${isAuthenticated}`)

    const navigationHandler = (key) => {
        switch (key) {
            case 0:
                navigate.navigate("HOME")
                break
            case 1:
                navigate.navigate("CART")
                break
            case 2:
                navigate.navigate("VIDEO-SHORT")
                break
            case 3:
                navigate.navigate("CHAT-DASBOARD")
                break
            case 4:
                if (isAuthenticated) navigate.navigate("PROFILE")
                else navigate.navigate("LOGIN")
                break
            default:
                navigate.navigate("HOME")
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






    return (
        <View
            style={{
                backgroundColor: colors.color1,
                borderTopRightRadius: 120,
                borderTopLeftRadius: 120,
                position: "absolute",
                width: "100%",
                bottom: 0
            }}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginLeft: 25,
                    marginRight: 25
                }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigationHandler(1)}>
                    <Avatar.Icon
                        {...avatarOptions}
                        icon={activeRoute === "CART" ? "shopping" : "shopping-outline"} />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigationHandler(3)}

                >
                    <Avatar.Icon
                        color={colors.color2}
                        {...avatarOptions}
                        icon={isAuthenticated === false ?
                            "login" :
                            activeRoute === "CHAT-DASBOARD" ? "message" : "message-outline"
                        } />
                </TouchableOpacity>
                <View style={{
                    width: 70
                }}></View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigationHandler(2)}

                >
                    <Avatar.Icon
                        color={colors.color2}
                        {...avatarOptions}
                        icon={isAuthenticated === false ?
                            "login" :
                            activeRoute === "VIDEO-SHORT" ? "video" : "video-outline"
                        } />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigationHandler(4)}
                >
                    <Avatar.Icon
                        color={colors.color2}
                        {...avatarOptions}
                        icon={isAuthenticated === false ?
                            "login" :
                            activeRoute === "PROFILE" ? "account" : "account-outline"
                        } />
                </TouchableOpacity>

            </View>

            <View
                style={{
                    position: "absolute",
                    width: 80,
                    height: 80,
                    backgroundColor: colors.color2,
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center",
                    top: -40,
                    alignSelf: "center"
                }}
            >
                <View
                    style={{
                        borderRadius: 100,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigationHandler(0)}
                    >
                        <Avatar.Icon
                            {...avatarOptions}
                            icon={activeRoute === "HOME" ? "home" : "home-outline"} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>





    )
}



export default Footer