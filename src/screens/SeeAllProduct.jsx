import { View, Text, ScrollView, FlatList, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, defaultStyle } from './../styles/styles'
import Header from '../components/Header'
import { useSetCategories } from '../utils/hooks'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import { Avatar, Button } from 'react-native-paper'
import { getAllProduct } from '../../redux/actions/productAction'
import ProductCard from '../components/ProductCard'
import ProductCardVertical from '../components/ProductCardVertical'
import Toast from 'react-native-toast-message'
import ProductCardShopDetails from '../components/ProductCardShopDetail'



const SeeAllProduct = ({ route }) => {

    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState("")
    const [activeSearch, setActiveSearch] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [cartLength, setCartLength] = useState(0)
    const [showHelpBottom, setShowHelpBottom] = useState(false)

    const helpBottomTrigger = () => {
        if (showHelpBottom === false) {
            setShowHelpBottom(true)
        }
        else {
            setShowHelpBottom(false)
        }
    }


    const screenWidth = Dimensions.get("window").width
    const screenHeight = Dimensions.get("window").height

    const tileWidth = screenWidth / 2 - 20
    const tileheight = screenHeight / 2 - 30

    const dispatch = useDispatch()
    const isFocused = useIsFocused()

    const navigate = route.params?.navigate


    console.log("Logging See All Product")
    console.log("route = ")
    console.log(route.params)




    console.log("navigate = ")
    console.log(navigate)

    const { products } = useSelector(state => state.product)

    useSetCategories(setCategories, isFocused)

    const categoryButtonHandler = (id) => {
        setCategory(id)
    }

    console.log("Logging Categories")
    console.log(categories)

    const addToCardhandler = (id, name, price, image, stock) => {

        console.log("addToCardHandler Function Logg")
        console.log("id, name, price, image, stock")
        console.log(id)
        console.log(name)
        console.log(price)
        console.log(image)
        console.log(stock)

        if (stock === 0) return Toast.show({
            type: "error",
            text1: "Out Of Stock"
        })

        console.log("addToCardHandler Function Working 1")

        dispatch({
            type: "addToCart",
            payload: {
                product: id,
                name,
                price,
                image,
                stock,
                quantity: 1
            }
        })

        console.log("addToCardHandler Function Working 2")

        setCartLength(1)

        Toast.show({
            type: "success",
            text1: "Added To Cart"
        })

    }


    useEffect(() => {

        const timeOutId = setTimeout(() => {
            dispatch(getAllProduct(searchQuery, category))
        }, 500)

        return () => {
            clearTimeout(timeOutId)
        }

    }, [dispatch, searchQuery, category, isFocused])


    function renderItem({ item, index }) {
        return <ProductCardVertical
            stock={item.stock}
            name={item.name}
            price={item.price}
            image={item.images[0].url}
            addToCardHandler={addToCardhandler}
            id={item._id}
            key={item._id}
            index={index}
            description={item.description}
            width={tileWidth}
            height={tileheight}
            navigate={navigate}
        />

    }

    return (

        <View style={{
            ...defaultStyle,
            paddingBottom: 0,
            paddingHorizontal: 0,
            flex: 1,
            padding: 0,
            flexGrow: 1
        }}>

            <Header back={true} />

            <View
                style={{
                    position: "absolute",
                    top: 20,
                    right: 35,
                    width: 30,
                    height: 30,
                    backgroundColor: colors.color1_light1,
                    borderRadius: 20,
                    zIndex: 99,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{
                        color: colors.color2,
                        fontSize: 18,
                        fontWeight: "bold",
                    }}
                >{cartLength}</Text>
            </View>

            <View
                style={{
                    paddingLeft: 20
                }}
            >


                <ScrollView
                    horizontal={true}
                    contentContainerStyle={{ alignItems: 'center' }}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}

                    style={{
                        marginTop: 70,

                    }}
                >
                    {
                        categories.map((categoryItem, index) => (
                            <Button
                                key={categoryItem._id}
                                style={{
                                    backgroundColor: category === categoryItem._id ? colors.color1 : colors.color5,
                                    borderRadius: 100,
                                    margin: 5
                                }}
                                onPress={() => categoryButtonHandler(categoryItem._id)}
                            >
                                <Text style={{
                                    fontSize: 12,
                                    color: category === categoryItem._id ? colors.color2 : 'gray'
                                }}>{categoryItem.category}</Text>
                            </Button>
                        ))
                    }
                </ScrollView>

            </View>


            <View style={{ flex: 1, flex: 1 }}>
                <ScrollView
                    horizontal={false}
                    style={{



                    }}
                >
                    {/* {

                        products.map((product, index) => (
                            <ProductCardVertical
                                stock={product.stock}
                                name={product.name}
                                price={product.price}
                                image={product.images[0].url}
                                addToCardHandler={addToCardhandler}
                                id={product._id}
                                key={product._id}
                                index={index}
                                description={product.description}
                                navigate={navigate}
                            />
                        ))
                    } */}
                    <View
                        style={{}}
                    >
                        <FlatList
                            data={products}
                            renderItem={renderItem}
                            numColumns={2} key={2}

                        />
                    </View>
                </ScrollView>
            </View>


            <TouchableOpacity
                style={{
                    position: "absolute",
                    bottom: 80,
                    right: 20,
                    width: 40,
                    height: 40,
                    borderRadius: 40,
                    backgroundColor: colors.color1,
                    borderWidth: 2,
                    borderColor: colors.color3,
                    justifyContent: "center",
                    alignContent: "center",
                    alignSelf: "center"
                }}
                onPress={helpBottomTrigger}
            >
                <Avatar.Icon
                    size={40}
                    color={colors.color2}
                    icon={"comment-question"}
                    style={{
                        backgroundColor: colors.transparentCustom,
                        justifyContent: "center",
                        alignContent: "center",
                        alignSelf: "center"
                    }}
                />
            </TouchableOpacity>

            {
                showHelpBottom ? (
                    <View
                        style={{
                            position: "absolute",
                            right: 20,
                            bottom: 140,
                            width: 40,
                            height: "auto",
                            flexDirection: "column"
                        }}
                    >
                        <View
                            style={{
                                width: 40,
                                height: 40,
                                backgroundColor: colors.color3,
                                borderRadius: 40,
                                marginVertical: 5,
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center"
                            }}
                        >
                            <Avatar.Icon
                                size={40}
                                icon={"pencil"}
                                color={colors.color2}
                                style={{
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center",
                                    backgroundColor: colors.transparentCustom
                                }}
                            />
                        </View>
                        <View
                            style={{
                                width: 40,
                                height: 40,
                                backgroundColor: colors.color3,
                                borderRadius: 40,
                                marginVertical: 5,
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center"
                            }}
                        >
                            <Avatar.Icon
                                size={40}
                                icon={"pencil"}
                                color={colors.color2}
                                style={{
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center",
                                    backgroundColor: colors.transparentCustom
                                }}
                            />
                        </View>
                        <View
                            style={{
                                width: 40,
                                height: 40,
                                backgroundColor: colors.color3,
                                borderRadius: 40,
                                marginVertical: 5,
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center"
                            }}
                        >
                            <Avatar.Icon
                                size={40}
                                icon={"pencil"}
                                color={colors.color2}
                                style={{
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center",
                                    backgroundColor: colors.transparentCustom
                                }}
                            />
                        </View>
                        <View
                            style={{
                                width: 40,
                                height: 40,
                                backgroundColor: colors.color3,
                                borderRadius: 40,
                                marginVertical: 5,
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center"
                            }}
                        >
                            <Avatar.Icon
                                size={40}
                                icon={"pencil"}
                                color={colors.color2}
                                style={{
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center",
                                    backgroundColor: colors.transparentCustom
                                }}
                            />
                        </View>
                    </View>
                ) : (
                    <View></View>
                )
            }




        </View>


    )
}


export default SeeAllProduct