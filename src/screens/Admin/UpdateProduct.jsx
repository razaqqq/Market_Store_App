import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, defaultStyle, formHeading, inputOptions, inputStyle } from '../../styles/styles'
import Header from '../../components/Header'
import Loader from '../../components/Loader'
import { Button, TextInput } from 'react-native-paper'
import SelectComponent from '../../components/SelectComponent'
import { useIsFocused } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetail } from '../../../redux/actions/productAction'
import { useMessageAndErrorFromOther, useSetCategories } from '../../utils/hooks'
import { updateProduct } from '../../../redux/actions/otherAction'

const UpdateProduct = ({ navigation, route }) => {


    console.log("Update Product Logg")

    const isFocused = useIsFocused()
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false)

    console.log("Update Product Trying Logging Params")
    console.log(route.params)

    const { product, loading } = useSelector(state => state.product)
    console.log("Logging Product Loading")
    console.log("Update Product Logging Product")
    console.log(product.stock)
    console.log(loading)



    const [id] = useState(route.params)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")
    const [category, setCategory] = useState("")
    const [categoryID, setCategoryID] = useState("")
    const [categories, setCategories] = useState([])



    useSetCategories(setCategories, isFocused)

    const submitHandler = () => {
        console.log("Update Product Submit handler Called")
        console.log("Logg id, name, descriptions, price, stock, categoryId")

        console.log(id)
        console.log(name)
        console.log(description)
        console.log(price)
        console.log(stock)
        console.log(categoryID)

        dispatch(updateProduct(id, name, description, price, stock, categoryID))

    }



    const loadingOther = useMessageAndErrorFromOther(dispatch, navigation, "ADMIN-PANEL")

    useEffect(() => {

        console.log("Update Product useEffect 1 Called")

        dispatch(getProductDetail(id))

        console.log("Update Product UseEffect 1 Succecc Getting Product Details")

    }, [dispatch, id, isFocused])

    useEffect(() => {
        console.log("Update Product useEffect 2 Called")
        if (product) {
            setName(product.name)
            setDescription(product.description)
            setPrice(product.price)
            setStock(product.stock)
            setCategory(product.category?.category)
            setCategoryID(product.category?._id)
        }
        else {
            setName("There Something Wrong")
            setDescription("There Something Wrong")
            setPrice("There Something Wrong")
            setStock("There Something Wrong")
            setCategory("There Something Wrong")
            setCategoryID("There Something Wrong")
        }
    }, [product])

    console.log("Update Product Logging Product After UseEffect")
    console.log(product)

    return (
        <>
            <View style={{
                ...defaultStyle,
                backgroundColor: colors.color5
            }}>
                <Header back={true} />

                <View style={{
                    marginBottom: 20,

                    marginTop: 100
                }}>
                    <Text style={formHeading}>Update Product</Text>
                </View>

                {
                    loading ? <Loader /> : (
                        <ScrollView
                            style={{
                                padding: 20,
                                elevation: 10,
                                borderRadius: 10,
                                backgroundColor: colors.color3
                            }}
                        >
                            <View style={{

                            }}>
                                <Button
                                    onPress={() => navigation.navigate("PRODUCT-IMAGES", {
                                        id,
                                        images: product.images
                                    })}
                                    textColor={colors.color1}
                                    style={{
                                        marginVertical: 30

                                    }}
                                ><Text style={{ fontWeight: "bold", fontSize: 20 }}>Manage Images</Text></Button>
                                <TextInput {...inputOptions}
                                    placeholder='Name'
                                    value={name ? name : "Name is Undefined"}
                                    onChangeText={setName}
                                />

                                <TextInput {...inputOptions}
                                    placeholder='Descriptions'
                                    value={description ? description : "Description is Undefined"}
                                    onChangeText={setDescription}
                                />
                                <TextInput {...inputOptions}
                                    placeholder='price'
                                    keyboardType='numeric'
                                    value={price ? price.toString() : "Price is Undefined"}
                                    onChangeText={setPrice} />
                                <TextInput {...inputOptions}
                                    placeholder='stock'
                                    keyboardType='numeric'
                                    value={stock ? stock.toString() : "Stock is Undefined"}
                                    onChangeText={setStock} />
                                <Text style={{
                                    ...inputStyle,
                                    textAlign: "center",
                                    borderRadius: 3,

                                    textAlignVertical: "center",
                                }}
                                    onPress={() => setVisible(true)}

                                > {category === undefined ? <Text style={{ fontWeight: 'bold' }}>Chosse Category</Text> : <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{category}</Text>} </Text>
                                <Button
                                    textColor={colors.color2}
                                    style={{
                                        backgroundColor: colors.color1,
                                        margin: 20,
                                        padding: 6
                                    }}
                                    onPress={submitHandler}
                                    loading={loadingOther}
                                    disabled={loadingOther}
                                >Update</Button>
                            </View>
                        </ScrollView>
                    )
                }

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

export default UpdateProduct