import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, inputOptions } from "../styles/styles"
import { Avatar, Button, TextInput } from 'react-native-paper'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile } from '../../redux/actions/otherAction'
import { useMessageAndErrorFromOther } from '../utils/hooks'



const UpdateProfile = ({ navigation }) => {

    console.log("Update Profile Navigation Logg")

    console.log("Logging Params")
    console.log(navigation)

    const { user } = useSelector(state => state.user)

    const [username, setUsername] = useState(user?.name)
    const [city, setCity] = useState(user?.city)
    const [country, setCountry] = useState(user?.country)
    const [pinCode, setPinCode] = useState(user?.pinCode?.toString())
    const [email, setEmail] = useState(user?.email)
    const [address, setAddress] = useState(user?.address)


    const dispatch = useDispatch()

    const loading = useMessageAndErrorFromOther(dispatch, navigation, "PROFILE")

    const submitHandler = () => {
        dispatch(updateProfile(username, email, address, city, country, pinCode))
    }

    const disabledButton = !username || !email || !address || !city || !country || !pinCode


    return (

        <View style={{ ...defaultStyle }}>

            <Header back={true} />
            {/** Heading */}
            <View style={{ marginBottom: 20, paddingTop: 70, marginTop: -50 }}>
                <Text style={formHeading}>Edit Profile</Text>
            </View>
            {/** Heading */}

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    padding: 20,
                    elevation: 10,
                    borderRadius: 10,
                    backgroundColor: colors.color3
                }}
            >
                <View style={{

                }}>

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
                    <Button
                        loading={loading}
                        textColor={colors.color2}
                        disabled={
                            disabledButton
                        }
                        style={styles.button}
                        onPress={submitHandler}
                    >Edit Profile</Button>

                </View>
            </ScrollView>

        </View>

    )
}

const styles = StyleSheet.create(
    {
        button: {
            backgroundColor: colors.color1,
            marginTop: 50,
            marginHorizontal: 50
        }
    }
)



export default UpdateProfile