import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'


import { Avatar } from 'react-native-paper'
import { colors, defaultStyle } from '../../styles/styles'

import * as ImagePicker from "expo-image-picker"
import { CameraType, } from 'expo-camera/build/legacy/Camera.types'
import { Camera } from 'expo-camera/build/legacy/'
import Header from "../../components/Header"




const CameraComponent = ({ navigation, route }) => {


    console.log("Camera Component page Log Section")
    console.log(`Camera COmponent ${CameraType.back}`)
    console.log(`CameraType.back type = ${typeof (CameraType.back)}`)

    const [hasPermission, setHasPermission] = useState(null)
    const [type, setType] = useState(CameraType.back)
    const [camera, setCamera] = useState(null)

    console.log("Camera Componet Created Log")
    console.log("LOgging Route Params")
    console.log(route.params)
    console.log(route.params.newProduct)

    console.log(`Camera component type ${type}`)

    const openImagePicker = async () => {

        const permissionsResult =
            await ImagePicker.requestMediaLibraryPermissionsAsync()

        if (permissionsResult.granted === false)
            return alert("Permission to Access Gallery is required")

        const data = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
        })

        console.log(data)

        if (route.params?.newProduct) {
            console.log("if Else route.params.newProduct true")
            return navigation.navigate("NEW-PRODUCT", {
                image: data.assets[0].uri
            })
        }

        else if (route.params?.updateProduct) {
            console.log("if Else route.params.productImages === true")
            return navigation.navigate("PRODUCT-IMAGES", {
                image: data.assets[0].uri
            })
        }

        else if (route.params?.updateProfile) {
            console.log("if Else route.params.updateProfile === true")
            return navigation.navigate("PROFILE", {
                image: data.assets[0].uri
            })
        }



        else {
            console.log("When Every Options is Not Right")
            return navigation.navigate("SIGN-UP", {
                image: data.assets[0].uri
            })

        }

    }


    const clickPicture = async () => {

        const data = await camera.takePictureAsync()

        if (route.params?.newProduct) {
            console.log("clickPicture ifELse Conditions when rpoute.params.newProduct === true")
            return (
                navigation.navigate("NEW-PRODUCT", {
                    image: data.uri
                })
            )
        }
        if (route.params?.updateProduct) {
            console.log("clickPicture ifELse Conditions when rpoute.params.updateProduct === true")
            return (
                navigation.navigate("PRODUCT-IMAGES", {
                    image: data.uri
                })
            )
        }
        if (route.params?.updateProfile) {
            console.log("clickPicture ifELse Conditions when rpoute.params.updateProfile === true")
            return (
                navigation.navigate("PROFILE", {
                    image: data.uri
                })
            )
        }
        else {
            console.log("clickPicture ifELse Conditions when Everyting is Not Right === true")
            return (
                navigation.navigate("SIGN-UP", {
                    image: data.uri
                })
            )
        }

    }

    useEffect(() => {
        (async () => {
            console.log("Entering Camera Page")
            const { status } = await Camera.requestCameraPermissionsAsync()
            setHasPermission(status === "granted")
        })()
    }, [])


    if (hasPermission === null)
        return <View />


    if (hasPermission === false)
        return (
            <View style={defaultStyle}>
                <Text>No Access To Camera</Text>
            </View>
        )

    return (
        <View style={{
            flex: 1
        }}>
            {console.log(`Camera Page type=${type}`)}
            {console.log(`Camera page type variable is ${typeof (type)}`)}

            <Header back={true} />

            <Camera type={type} style={{
                flex: 1, aspectRatio: 1
            }}
                ratio={"1:1"}
                ref={(cameraRef) => {
                    console.log(`Camera Page What is cameraRef=${cameraRef}`)
                    setCamera(cameraRef)
                }}
            />










            <View style={{
                flexDirection: "row",
                bottom: 20,
                width: "100%",
                justifyContent: "space-evenly",
                position: "absolute"
            }}>
                <MyIcon icon="image" handler={openImagePicker} />
                <MyIcon icon="camera" handler={clickPicture} />
                <MyIcon icon="camera-flip" handler={() => {
                    setType(prevType => prevType === CameraType.back ?
                        CameraType.front : CameraType.back
                    )
                }} />
            </View>

        </View>
    )
}

const MyIcon = ({ icon, handler }) => (
    <TouchableOpacity onPress={handler}>
        <Avatar.Icon
            icon={icon}
            size={60}
            color={colors.color2}
            style={{
                backgroundColor: colors.color1
            }} />
    </TouchableOpacity>
)

export default CameraComponent