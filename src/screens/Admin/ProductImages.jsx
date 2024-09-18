import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, defaultStyle, formHeading } from '../../styles/styles'
import Header from '../../components/Header'
import ImageCard from '../../components/ImageCard'
import { Avatar, Button } from 'react-native-paper'
import { useMessageAndErrorFromOther } from '../../utils/hooks'
import { useDispatch } from 'react-redux'
import mime from 'mime'
import { deleteProductImage, updateProductImage } from '../../../redux/actions/otherAction'

const ProductImages = ({ navigation, route }) => {

    console.log("Product Images Page Logging")

    console.log("Product Images Logging Params")
    console.log(route.params)

    const [images] = useState(route.params?.images)
    const [productId] = useState(route.params?.id)
    const [image, setImage] = useState(null)
    const [imageChanged, setImageChanged] = useState(false)

    const dispatch = useDispatch()

    const loading = useMessageAndErrorFromOther(dispatch, navigation, "ADMIN-PANEl")

    const submitHandler = () => {

        console.log("ProductImages Submit Handler Called")

        const myForm = new FormData()

        myForm.append("file", {
            uri: image,
            type: mime.getType(image),
            name: image.split("/").pop()
        })

        dispatch(updateProductImage(productId, myForm))

    }
    const deleteHandler = (imageId) => {

        console.log("ProductImages Delete Handler Called")

        console.log("Image Id", id)
        console.log("Product Id", productId)
        dispatch(deleteProductImage(productId, imageId))
    }

    useEffect(() => {

        console.log("Product Images Use Effect Function Called")

        if (route.params?.image) {

            console.log("Product Images Use Effect Function Called If params is NOt Null")

            setImage(route.params?.image)
            setImageChanged(true)
        }

        console.log("Product Images Use Effect Function End Function")

    }, [route.params])

    return (
        <View style={{
            ...defaultStyle,
            backgroundColor: colors.color5
        }}>
            <Header back={true} />

            {/* Heading */}
            <View style={{
                marginBottom: 20,
                paddingTop: 100
            }}>
                <Text style={formHeading}>Product Images</Text>
            </View>

            <ScrollView style={{
                marginBottom: 20
            }}>
                <View style={{
                    backgroundColor: colors.color2,
                    padding: 40,
                    minHeight: 400,

                }}>
                    {console.log("Product View Trying Logging Images")}
                    {console.log(images)}
                    {

                        images === undefined ?
                            <Text>Images is Undefined</Text>

                            :

                            images.map(image => (
                                <ImageCard
                                    key={image._id}
                                    src={image.url}
                                    id={image._id}
                                    deleteHandler={deleteHandler} />
                            ))
                    }

                </View>
            </ScrollView>
            <View style={{
                padding: 20,
                borderRadius: 10,
                backgroundColor: colors.color3,
            }}>
                <Image style={{
                    backgroundColor: colors.color2,
                    height: 100,
                    width: 100,
                    alignSelf: "center",
                    resizeMode: "contain",
                }}
                    source={{ uri: image }}
                />
                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",

                }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={
                            () => navigation.navigate("CAMERA", { updateProduct: true })
                        }
                    >
                        <Avatar.Icon
                            icon={"camera"}
                            size={30}
                            color={colors.color3}
                            style={{
                                backgroundColor: colors.color2,
                                margin: 10
                            }} />
                    </TouchableOpacity>
                </View>
                <Button style={{
                    backgroundColor: colors.color1,
                    padding: 6,
                }}
                    textColor={colors.color2}
                    loading={loading}
                    onPress={submitHandler}
                    disabled={!imageChanged}
                >Add</Button>
            </View>
        </View >
    )
}


export default ProductImages