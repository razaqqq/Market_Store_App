import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, formStyles, inputOptions, inputStyle } from "../styles/styles"
import { Avatar, Button, TextInput } from 'react-native-paper'


import Header from '../components/Header'
import { useDispatch } from 'react-redux'
import { updatePassword } from '../../redux/actions/otherAction'
import { useMessageAndErrorFromOther } from '../utils/hooks'



const ChangePassword = ({ navigation }) => {

    console.log("Change Password Logg")

    console.log("Logging Params")
    console.log(navigation)

    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const dispatch = useDispatch()


    const loading = useMessageAndErrorFromOther(dispatch)


    const submitHandler = () => {
        dispatch(updatePassword(oldPassword, newPassword))
        setOldPassword("")
        setNewPassword("")
    }

    const disabledButton = !oldPassword || !newPassword

    return (

        <View style={{ ...defaultStyle }}>

            <Header back={true} />
            {/** Heading */}
            <View style={{ marginBottom: 20, paddingTop: 70, marginTop: -50 }}>
                <Text style={formHeading}>Change Password</Text>
            </View>
            {/** Heading */}

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    padding: 20,
                    elevation: 10,
                    borderRadius: 10,
                    backgroundColor: colors.color3,
                }}
            >
                <View style={{
                }}>

                    <TextInput
                        {...inputOptions}
                        placeholder='Old Password'
                        value={oldPassword}
                        secureTextEntry={true}
                        onChangeText={setOldPassword}
                    />

                    <TextInput
                        {...inputOptions}
                        placeholder='New Password'
                        value={newPassword}
                        secureTextEntry={true}
                        onChangeText={setNewPassword}
                    />

                    <Button
                        loading={loading}
                        textColor={colors.color2}
                        disabled={
                            disabledButton
                        }
                        style={styles.button}
                        onPress={submitHandler}
                    >Change Password</Button>

                </View>
            </ScrollView>

        </View>

    )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.color1,
        marginTop: 20,
        marginHorizontal: 50
    }
})


export default ChangePassword