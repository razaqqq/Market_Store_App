import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, formStyles, inputOptions, inputStyle } from "../styles/styles"
import { Button, TextInput } from 'react-native-paper'
import Footer from '../components/Footer'
import { useDispatch } from 'react-redux'
import { forgetPassword } from '../../redux/actions/otherAction'
import { useMessageAndErrorFromOther } from '../utils/hooks'

import { formStyles as styles } from '../styles/styles'

const ForgetPassword = ({ navigation }) => {

    console.log("ForgetPassword Page Logg")

    console.log("Logging Params")
    console.log(navigation)

    const [email, setEmail] = useState("")

    const dispatch = useDispatch()

    const loading = useMessageAndErrorFromOther(dispatch, navigation, "VERIVY")

    const submitHandler = () => {
        dispatch(forgetPassword(email))
    }

    return (
        <>
            <View style={{ ...defaultStyle, backgroundColor: colors.color2, paddingTop: 20, paddingBottom: 200 }}>

                {/** Heading */}
                <View style={{ marginBottom: 20 }}>
                    <Text style={formHeading}>Forget Password</Text>
                </View>
                {/** Heading */}
                <View style={formStyles.container}>

                    <TextInput
                        {...inputOptions}
                        keyboardType='email-address'
                        placeholder='Email'
                        value={email}
                        onChangeText={setEmail}
                    />

                    <Button
                        loading={loading}
                        textColor={colors.color2}
                        disabled={email === ""}
                        style={styles.button}
                        onPress={submitHandler}
                    >Send OTP</Button>

                    <Text style={formStyles.or}>OR</Text>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate("LOGIN")}
                    >
                        <Text style={formStyles.link}>
                            Log in
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Footer activeRoute='profile' />
        </>
    )
}



export default ForgetPassword