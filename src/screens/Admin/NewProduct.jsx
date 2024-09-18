import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, defaultStyle, formHeading, inputOptions, inputStyle } from '../../styles/styles'
import Header from '../../components/Header'
import Loader from '../../components/Loader'
import { Avatar, Button, TextInput } from 'react-native-paper'
import SelectComponent from '../../components/SelectComponent'
import { useSetCategories, useMessageAndErrorFromOther } from '../../utils/hooks'
import { useIsFocused } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import mime from 'mime'
import { createProduct } from '../../../redux/actions/otherAction'
import { loadUser } from '../../../redux/actions/userActions'

const NewProduct = ({ navigation, route }) => {

    console.log("New Product Page")

    const loadingOther = false

    const { user } = useSelector(state => state.user)




    console.log("loading Other Var")
    console.log(loadingOther)

    const isFocused = useIsFocused()

    console.log("isFocused var ")
    console.log(isFocused)

    const dispatch = useDispatch()

    console.log("dispatch var ")
    console.log(dispatch)

    const [visible, setVisible] = useState(false)
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")
    const [category, setCategory] = useState("Choose Category")
    const [categoryID, setCategoryID] = useState("")
    const [categories, setCategories] = useState([])

    useSetCategories(setCategories, isFocused)

    const disabledBtnCondition = !name || !description || !price || !stock || !image

    const submitHandler = () => {

        const myForm = new FormData()

        myForm.append("name", name)
        myForm.append("description", description)
        myForm.append("price", price)
        myForm.append("stock", stock)
        myForm.append("file", {
            uri: image,
            type: mime.getType(image),
            name: image.split("/").pop()
        })

        if (categoryID) myForm.append("category", categoryID)
        myForm.append("createdBy", user._id)
        dispatch(createProduct(myForm))

    }

    const loading = useMessageAndErrorFromOther(dispatch, navigation, "ADMIN-PANEL")

    useEffect(() => {
        if (route.params?.image)
            setImage(route.params.image)
        dispatch(loadUser())
    }, [route.params])

    console.log(`NewProduct Log Section, user = ${user._id}`)
    console.log(user)


    return (
        <>
            <View style={{
                ...defaultStyle,
                backgroundColor: colors.color5
            }}>
                <Header back={true} />

                <ScrollView
                    style={{
                        borderRadius: 10,

                    }}
                    showsVerticalScrollIndicator={false}
                >

                    <View style={{
                        marginBottom: 20,
                        marginTop: 20,
                    }}>
                        <Text style={formHeading}>New Product</Text>
                    </View>

                    {
                        (

                            <View style={{
                                justifyContent: "center",
                                height: 650,
                                backgroundColor: colors.color3,
                                borderRadius: 10
                            }}>
                                <View style={{
                                    width: 80,
                                    height: 80,
                                    alignSelf: "center",
                                    marginBottom: 20,
                                }}>
                                    <Avatar.Image
                                        size={80}
                                        style={{
                                            backgroundColor: colors.color1
                                        }}
                                        source={{
                                            uri: image ? image : null
                                        }}
                                    />
                                    <TouchableOpacity

                                        onPress={() => navigation.navigate("CAMERA", { newProduct: true })}>
                                        <Avatar.Icon
                                            icon={"camera"}
                                            size={30}
                                            color={colors.color3}
                                            style={{
                                                backgroundColor: colors.color2,
                                                position: "absolute",
                                                bottom: 0,
                                                right: -5,
                                            }}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <TextInput {...inputOptions}
                                    placeholder='Name'
                                    value={name}
                                    onChangeText={setName}
                                />
                                <TextInput {...inputOptions}
                                    placeholder='Descriptions'
                                    value={description}
                                    onChangeText={setDescription}
                                />
                                <TextInput {...inputOptions}
                                    placeholder='price'
                                    keyboardType='number-pad'
                                    value={price}
                                    onChangeText={setPrice} />
                                <TextInput {...inputOptions}
                                    placeholder='stock'
                                    keyboardType='number-pad'
                                    value={stock}
                                    onChangeText={setStock} />
                                <Text style={{
                                    ...inputStyle,
                                    textAlign: "center",
                                    borderRadius: 3,
                                    textAlignVertical: "center",
                                }}
                                    onPress={() => setVisible(true)}
                                >{category}</Text>
                                <Button
                                    textColor={colors.color2}
                                    style={{
                                        backgroundColor: colors.color1,
                                        margin: 20,
                                        padding: 6
                                    }}
                                    onPress={submitHandler}
                                    loading={loading}
                                    disabled={disabledBtnCondition || loading}
                                >Create a New Product</Button>
                            </View>

                        )
                    }
                </ScrollView>

            </View>
            <SelectComponent
                categories={categories}
                visible={visible}
                setVisible={setVisible}
                setCategory={setCategory}
                setCategoryID={setCategoryID}

            />

        </>
    )
}


export default NewProduct