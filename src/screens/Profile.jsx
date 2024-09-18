import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, defaultImage, defaultStyle, formHeading } from '../styles/styles'
import { Avatar, Button } from 'react-native-paper'
import ButtonBox from '../components/ButtonBox'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser, loadUserById, logOutUser } from '../../redux/actions/userActions'
import { useMessageAndErrorFromOther, useMessageAndErrorFromUser } from '../utils/hooks'
import { useIsFocused } from '@react-navigation/native'
import mime from 'mime'
import { updatePic } from '../../redux/actions/otherAction'

const Profile = ({ navigation, route }) => {

    console.log("Profile Page Logging")

    console.log("Logging Params")
    console.log(navigation)
    console.log(route)



    const [avatar, setAvatar] = useState(
        user?.avatar ? user.avatar.url : defaultImage
    )
    const { user } = useSelector(state => state.user)

    const dispatch = useDispatch()
    const isFocused = useIsFocused

    const loading = useMessageAndErrorFromUser(navigation, dispatch, "LOGIN")

    const logoutHandler = () => {
        dispatch(logOutUser())
    }

    const navigateHandler = (text) => {
        switch (text) {
            case "Admin":
                navigation.navigate("ADMIN-PANEL")
                break;
            case "Orders":
                navigation.navigate("ORDERS")
                break;
            case "Profile":
                navigation.navigate("UPDATE-PROFILE")
                break;
            case "Password":
                navigation.navigate("CHANGE-PASSWORD")
                break;
            case "Shop":
                navigation.navigate("SHOP-DETAILS")
                break;
            case "Other":
                navigation.navigate("OTHER-FEATURES")
                break;
            case "SignOut":
                logoutHandler()
                break;
            default:
                break;
        }
    }

    const loadingPic = useMessageAndErrorFromOther(dispatch, navigation, null, null, loadUser)

    useEffect(() => {

        console.log("Profile Page Use Effect Log")

        console.log(route.params?.image)

        if (route.params?.image) {

            console.log("Profile Use Effect If Statement")

            setAvatar(route.params.image)

            // Dispatch UpdatePic Here

            const myForm = new FormData()
            myForm.append("file", {
                uri: route.params.image,
                type: mime.getType(route.params.image),
                name: route.params.image.split("/").pop()
            })

            console.log("Profile UseEffect Dispatch upDatePic is Called")


            dispatch(updatePic(myForm))

            // Dispatch UpdatePic Here

        }


        console.log("Profile Page UseEfffect LoadUser Dispatch is Called")
        dispatch(loadUser())

    }, [route.params, dispatch, isFocused])

    useEffect(() => {
        if (user?.avatar) {
            setAvatar(user.avatar.url)
        }
    }, [user])

    return (
        <>
            <View style={defaultStyle}>

                <View style={{ marginBottom: 20, marginTop: 0 }}>
                    <Text style={formHeading}>Profile</Text>
                </View>

                {
                    loading ? <Loader /> : (
                        <>
                            <View style={styles.container}>

                                <Avatar.Image source={{ uri: avatar }} size={100} style={{ backgroundColor: colors.color1 }} />

                                <TouchableOpacity
                                    disabled={loadingPic}
                                    onPress={() => navigation.navigate("CAMERA", { updateProfile: true })}>
                                    <Button
                                        disabled={loadingPic}
                                        style={{
                                            marginTop: 10,
                                        }}
                                        textColor={colors.color1}>
                                        <Text
                                            style={{
                                                letterSpacing: 2.0,
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Change Photo
                                        </Text>
                                    </Button>
                                </TouchableOpacity>

                                <Text style={styles.names}>
                                    {user?.name}
                                </Text>

                                <Text style={{
                                    fontWeight: "300",
                                    color: colors.color2
                                }}>
                                    {user?.email}
                                </Text>

                            </View>

                            <View style={{
                                flexDirection: "row",

                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center'"
                            }}>
                                <ButtonBox
                                    handler={navigateHandler}
                                    text={"Orders"}
                                    icon={"format-list-bulleted-square"} />
                                {
                                    user?.role === "admin" && (
                                        <ButtonBox
                                            handler={navigateHandler}
                                            icon={"view-dashboard"}
                                            text={"Admin"} reverse={true} />
                                    )

                                }
                                <ButtonBox
                                    handler={navigateHandler}
                                    text={"Profile"}
                                    icon={"pencil"} />
                            </View>

                            <View
                                style={{
                                    flexDirection: "row",

                                    justifyContent: "space-evenly",
                                    alignContent: "center",
                                    alignSelf: "center",
                                    marginTop: 20

                                }}
                            >
                                <ButtonBox
                                    handler={navigateHandler}
                                    text={"Password"}
                                    icon={"pencil"} />
                                <ButtonBox
                                    handler={navigateHandler}
                                    text={"Shop"}
                                    icon={"shopping"}
                                />
                                <ButtonBox
                                    handler={navigateHandler}
                                    text={"SignOut"}
                                    icon={"exit-to-app"} />
                            </View>
                            <View
                                style={{
                                    flexDirection: "row",

                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center",
                                    marginTop: 20

                                }}
                            >
                                <ButtonBox
                                    handler={navigateHandler}
                                    text={"Other"}
                                    icon={"arrow-all"} />
                            </View>
                        </>
                    )
                }

            </View>

            <Footer activeRoute='PROFILE' />

        </>

    )
}

const styles = StyleSheet.create({
    container: {
        elevation: 7,
        backgroundColor: colors.color3,
        padding: 30,
        alignItems: "center",
        marginBottom: 20
    },
    names: {
        fontSize: 20,
        fontWeight: "500",
        marginTop: 10,
        color: colors.color2
    }
})

export default Profile