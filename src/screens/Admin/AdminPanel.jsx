import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { colors, defaultStyle, formHeading } from '../../styles/styles'
import Header from '../../components/Header'
import Loader from '../../components/Loader'
import ButtonBox from '../../components/ButtonBox'
import ProductListHeading from '../../components/ProductListHeading'

import ProductListItem from '../../components/ProductListItem'
import Chart from '../../components/Chart'
import { useAdminProduct, useMessageAndErrorFromOther } from "../../utils/hooks"
import { useDispatch } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import { deleteProduct } from '../../../redux/actions/otherAction'
import { getAllAdminProduct } from '../../../redux/actions/productAction'

const products = []

const AdminPanel = ({ navigation }) => {


    const dispatch = useDispatch()

    const isFocused = useIsFocused()

    const { products, inStock, outOfStock, loading } = useAdminProduct(
        dispatch, isFocused
    )

    console.log(`Admin Panel page product = ${products}`)
    console.log(products)
    console.log(`Admin Panel Page inStock = ${inStock}`)
    console.log(`Admin Panel Page outOfStock = ${outOfStock}`)
    console.log(`Admin Panel Page loading = ${loading}`)

    const navigationHandler = (text) => {
        switch (text) {
            case "Category":
                navigation.navigate("CATEGORIES")
                break;
            case "All Orders":
                navigation.navigate("ADMIN-ORDERS")
                break;
            case "Product":
                navigation.navigate("NEW-PRODUCT")
                break;

            default:
                navigation.navigate("ADMIN-ORDERS")
                break;
        }
    }

    const deleteProductHandler = (productId) => {
        console.log(`Admin Panel deleteProductHandler is Called`)
        console.log("productId Var")
        console.log(productId)
        dispatch(deleteProduct(productId))
    }

    const loadingDelete = useMessageAndErrorFromOther(dispatch, null, null, getAllAdminProduct)

    return (
        <View style={{
            ...defaultStyle
        }}>

            <Header back={true} />

            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                {/* Heading */}
                <View style={{ marginBottom: 20, paddingTop: 70, marginTop: -50 }}>
                    <Text style={formHeading}>Admin Panel</Text>
                </View>

                {
                    loading ? <Loader /> : (
                        <>
                            <View style={{
                                backgroundColor: colors.color2,
                                borderRadius: 20,
                                alignItems: "center"
                            }}>

                                <View style={{
                                    backgroundColor: colors.color3,
                                    borderRadius: 20,
                                    alignItems: "center",
                                    height: 200,
                                }}>
                                    <Chart inStock={inStock} outStock={outOfStock} />
                                </View>
                                <View>
                                    <View style={{
                                        flexDirection: "row",
                                        margin: 10,
                                        justifyContent: "space-between",
                                        marginVertical: 20
                                    }}>
                                        <ButtonBox
                                            icon={"plus"}
                                            text={"Product"}
                                            handler={navigationHandler} />
                                        <ButtonBox
                                            icon={"format-list-bulleted-square"}
                                            text={"All Orders"}
                                            handler={navigationHandler}
                                            reverse={true}
                                        />
                                        <ButtonBox
                                            icon={"plus"}
                                            text={"Category"}
                                            handler={navigationHandler}
                                        />
                                    </View>
                                </View>

                                <ProductListHeading />

                                <ScrollView showsVerticalScrollIndicator={false}>
                                    <View style={{
                                        paddingBottom: 50
                                    }}>
                                        {
                                            !loadingDelete && products.map((productItem, index) => (
                                                <ProductListItem
                                                    navigate={navigation}
                                                    deleteHandler={deleteProductHandler}
                                                    key={productItem._id}
                                                    id={productItem._id}
                                                    index={index}
                                                    price={productItem.price}
                                                    stock={productItem.stock}
                                                    name={productItem.name}
                                                    category={productItem.category?.category}
                                                    imgSrc={productItem.images[0].url}
                                                />
                                            ))
                                        }
                                    </View>
                                </ScrollView>

                            </View>
                        </>
                    )
                }

            </ScrollView>

        </View>
    )
}

export default AdminPanel