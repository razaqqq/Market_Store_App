import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'
import { colors } from '../styles/styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Header = ({ back, emptyCart = false }) => {

    const navigate = useNavigation()

    const dispatch = useDispatch()

    const route = useRoute()
    const emptyCartHandler = () => {
        dispatch({
            type: "clearCart"
        })
    }

    return (
        <>
            {
                back && (

                    <TouchableOpacity
                        style={{
                            position: "absolute",
                            left: 20,
                            zIndex: 10,
                            top: 20,

                        }}
                        onPress={
                            () => navigate.goBack()
                        }
                    >
                        <Avatar.Icon
                            icon={"arrow-left"}
                            style={{
                                backgroundColor: route.name === "PRODUCT-DETAILS" ? colors.color3 : colors.color1,
                                elevation: 10
                            }}
                            color={
                                colors.color2
                            }
                        />
                    </TouchableOpacity>

                )
            }

            {
                route.name === "ADMIN-PANEL" || route.name === "HOME" || route.name === "UPDATE-PROFILE" || route.name === "CHANGE-PASSWORD" || route.name === "NEW-PRODUCT" || route.name === "ADMIN-ORDERS" || route.name === "CATEGORIES" || route.name === "ORDERS" || route.name === "UPDATE-PRODUCT" || route.name === "PRODUCT-IMAGES" || route.name === "CHAT-PROFILE-NOT-USER" || route.name === "LOGIN" || route.name === "CAMERA" || route.name === "SHOP-DETAILS" || route.name === "OTHER-FEATURES" ? null : (
                    <TouchableOpacity
                        style={{
                            position: "absolute",
                            right: 20,
                            zIndex: 10,
                        
                        }}
                        onPress={
                            emptyCart ? emptyCartHandler :
                                () => navigate.navigate("CART")
                        }
                    >
                        <Avatar.Icon
                            size={100}
                            style={{
                                backgroundColor: colors.color4
                            }}
                            icon={emptyCart ? "delete-outline" : "cart-outline"}
                            color={
                                route.name === "PRODUCT-DETAILS" ?
                                    colors.color2 : colors.color3
                            }
                        />
                    </TouchableOpacity>
                )
            }

        </>
    )
}

export default Header