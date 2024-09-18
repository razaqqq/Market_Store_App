import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, formStyles, inputOptions, inputStyle } from "../styles/styles"
import { Button, TextInput } from 'react-native-paper'
import Footer from '../components/Footer'
import { useMessageAndErrorFromOther } from '../utils/hooks'
import { useDispatch } from 'react-redux'
import { resetPassword } from '../../redux/actions/otherAction'



const Verivy = ({ navigation }) => {

    console.log("Verivy Page Logging")

    console.log("Logging Params")
    console.log(navigation)

    const [otp, setOtp] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const loading = useMessageAndErrorFromOther(dispatch, navigation, "LOGIN")

    const submitHandler = () => {
        dispatch(resetPassword(otp, password))
    }

    return (
        <>
            <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>

                {/** Heading */}
                <View style={{ marginBottom: 20 }}>
                    <Text style={formHeading}>Forget Password</Text>
                </View>
                {/** Heading */}
                <View style={formStyles.container}>
                    <TextInput
                        {...inputOptions}
                        placeholder='OTP'
                        keyboardType='numeric'
                        value={otp}
                        onChangeText={setOtp}
                    />
                    <TextInput
                        {...inputOptions}
                        placeholder='New Passowrd'
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <Button
                        loading={loading}
                        textColor={colors.color2}
                        disabled={otp === "" || password === ""}
                        style={styles.button}
                        onPress={submitHandler}
                    >Reset Password</Button>
                    <Text style={formStyles.or}></Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate("FORGET-PASSWORD")}
                    >
                        <Text style={formStyles.link}>
                            Resend OTP
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Footer activeRoute='profile' />
        </>
    )
}




export default Verivy