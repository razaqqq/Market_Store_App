import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, inputOptions } from "../styles/styles"
import { Button, TextInput } from 'react-native-paper'
import Footer from '../components/Footer'
import { useDispatch } from "react-redux"
import { login } from '../../redux/actions/userActions'
import Header from "../components/Header"

import { useMessageAndErrorFromUser } from '../utils/hooks'
import { formStyles as styles } from "../styles/styles"

const Login = ({ navigation }) => {

  console.log("Login Page Logg")

  console.log("Logging Params")
  console.log(navigation)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()

  const loading = useMessageAndErrorFromUser(navigation, dispatch, "PROFILE")

  const submitHandler = () => {
    dispatch(login(email, password))
  }

  return (
    <>



      <View style={{ ...defaultStyle, backgroundColor: colors.color2, paddingTop: 100, paddingBottom: 200 }}>

        <Header back={true} />

        {/** Heading */}
        <View style={{ marginBottom: 30, marginTop: -50 }}>
          <Text style={formHeading}>LOGIN</Text>
        </View>
        {/** Heading */}

        <View style={styles.container}>

          <TextInput
            {...inputOptions}
            keyboardType='email-address'
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            {...inputOptions}
            secureTextEntry={true}
            placeholder='Password'
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("FORGET-PASSWORD")}>
            <Text style={styles.forget}>Forget Password</Text>
          </TouchableOpacity>

          <Button
            loading={loading}
            textColor={colors.color2}
            disabled={email === "" || password === ""}
            style={styles.button}
            onPress={submitHandler}
          >Log In</Button>

          <Text style={styles.or}></Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("SIGN-UP")}
          >
            <Text style={styles.link}>
              Sign UP
            </Text>
          </TouchableOpacity>

        </View>

      </View>



    </>
  )
}



export default Login