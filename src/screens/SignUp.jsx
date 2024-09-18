import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, defaultStyle, formHeading, formStyles, inputOptions, inputStyle } from "../styles/styles"
import { Avatar, Button, TextInput } from 'react-native-paper'
import Footer from '../components/Footer'
import { defaultImage } from '../styles/styles'
import mime from 'mime'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../redux/actions/userActions'
import { useMessageAndErrorFromUser } from '../utils/hooks'
import { formStyles as styles } from '../styles/styles'



const SignUp = ({ navigation, route }) => {

    console.log("Sign Up Page Log")

    console.log("Logging Params")

    const [avatar, setAvatar] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [pinCode, setPinCode] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const loading = useMessageAndErrorFromUser(navigation, dispatch, "PROFILE")

    const submitHandler = () => {
        const mySignUpForm = new FormData()

        mySignUpForm.append("name", username)
        mySignUpForm.append("email", email)
        mySignUpForm.append("password", password)
        mySignUpForm.append("address", address)
        mySignUpForm.append("country", country)
        mySignUpForm.append("city", city)
        mySignUpForm.append("pinCode", pinCode)


        if (avatar !== "") {
            mySignUpForm.append("file", {
                uri: avatar,
                type: mime.getType(avatar),
                name: avatar.split("/").pop()
            })
        }

        dispatch(registerUser(mySignUpForm))

    }

    const disabledButton = !username || !email || !password || !address || !city || !country || !pinCode

    useEffect(() => {
        if (route.params?.image) {
            setAvatar(route.params.image)
        }
    }, [route.params])

    return (
        <>



            <ScrollView style={{ ...defaultStyle, backgroundColor: colors.color2, paddingTop: 20 }}>

                {/** Heading */}
                <View style={{ marginBottom: 20 }}>
                    <Text style={formHeading}>Sign UP</Text>
                </View>
                {/** Heading */}


              

                    <View style={{

                        elevation: 10,
                        borderRadius: 10,
                        backgroundColor: colors.color3,
                        height: 950
                    }}>
                        <Avatar.Image style={{
                            alignSelf: "center",
                            backgroundColor: colors.color1
                        }}
                            size={80}
                            source={{
                                uri: avatar ? avatar : defaultImage
                            }}
                        />
                        <TouchableOpacity style={{ marginTop: 10 }} onPress={() => navigation.navigate("CAMERA")}>
                            <Button textColor={colors.color2}>Change Photo</Button>
                        </TouchableOpacity>
                        <TextInput
                            {...inputOptions}
                            keyboardType='email-address'
                            placeholder='Email'
                            value={email}
                            onChangeText={setEmail}
                        />
                        <TextInput
                            {...inputOptions}
                            placeholder='Username'
                            value={username}
                            onChangeText={setUsername}
                        />
                        <TextInput
                            {...inputOptions}
                            placeholder='Address'
                            value={address}
                            onChangeText={setAddress}
                        />
                        <TextInput
                            {...inputOptions}
                            placeholder='City'
                            value={city}
                            onChangeText={setCity}
                        />
                        <TextInput
                            {...inputOptions}
                            placeholder='Country'
                            value={country}
                            onChangeText={setCountry}
                        />
                        <TextInput
                            {...inputOptions}
                            placeholder='PinCode'
                            value={pinCode}
                            onChangeText={setPinCode}
                        />
                        <TextInput
                            {...inputOptions}
                            placeholder='Password'
                            secureTextEntry={true}
                            value={password}
                            onChangeText={setPassword}
                        />
                        <Button
                            loading={loading}
                            
                            disabled={
                                disabledButton
                            }
                            
                            style={styles.button}
                            textColor={colors.color2}
                            onPress={submitHandler}
                        >Sign UP</Button>
                        <Text style={formStyles.or}></Text>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.navigate("LOGIN")}
                        >
                            <Text style={formStyles.link}>
                                Log in
                            </Text>
                        </TouchableOpacity>
                    </View>

        

            </ScrollView>


        </>
    )
}



export default SignUp