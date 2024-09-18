import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, defaultStyle } from '../styles/styles'
import { Avatar, Button } from 'react-native-paper'
import SearchModal from '../components/SearchModal'
import ProductCard from '../components/ProductCard'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import Footer from '../components/Footer'
import Heading from '../components/Heading'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../redux/actions/productAction'
import Toast from 'react-native-toast-message'
import { useSetCategories } from '../utils/hooks'




const Home = () => {

    console.log("Home Page Logging")

    const [categories, setCategories] = useState([])
    const [activeSearch, setActiveSearch] = useState(false)
    const [category, setCategory] = useState("")
    const [searchQuery, setSearchQuery] = useState("")
    const [showHelpBottom, setShowHelpBottom] = useState(false)

    const navigate = useNavigation()
    const dispatch = useDispatch()
    const isFocused = useIsFocused()

    const { products } = useSelector(state => state.product)

    const categoryButtonHandler = (id) => {
        setCategory(id)
    }

    const showHelpBottomMethod = () => {
        if (showHelpBottom === false) {
            setShowHelpBottom(true)
        }
        else {
            setShowHelpBottom(false)
        }
    }



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

        Toast.show({
            type: "success",
            text1: "Added To Cart"
        })

    }

    useSetCategories(setCategories, isFocused)

    useEffect(() => {

        const timeOutId = setTimeout(() => {
            dispatch(getAllProduct(searchQuery, category))
        }, 500)

        return () => {
            clearTimeout(timeOutId)
        }

    }, [dispatch, searchQuery, category, isFocused])

    return (
        <>
            {
                activeSearch && (
                    <SearchModal
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        setActiveSearch={setActiveSearch}
                        products={products}
                    />
                )
            }
            <View style={{
                ...defaultStyle,
                paddingBottom: 0,
                paddingHorizontal: 0
            }}>

                {/* /*Header*/}
                {/* <Header /> */}
                {/* /*Header*/}

                <View

                    style={{
                        position: "absolute",
                        right: 30,
                        top: 20,
                        backgroundColor: colors.color1_light1,
                        width: 150,
                        height: 30,
                        borderRadius: 10,
                        elevation: 5

                    }}
                >

                    <TouchableOpacity style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        alignSelf: 'center',
                        marginTop: 5
                    }}
                        onPress={() => navigate.navigate("SEE-ALL-PRODUCT", {
                            "navigate": navigate
                        })}
                    >
                        <Text style={{
                            color: colors.color2
                        }}>See All Product</Text>
                    </TouchableOpacity>

                </View>
                {/* /* Headeing-Row */}
                <View style={{
                    paddingTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginHorizontal: 45
                }}>



                    <Heading />

                    {/* /* Search-Bar */}
                    <View>
                        <TouchableOpacity
                            onPress={() => setActiveSearch((prev) => !prev)}
                        >
                            <Avatar.Icon
                                size={50}
                                icon={"magnify"}
                                color={'gray'}
                                style={{ backgroundColor: colors.color2, elevation: 12 }}
                            />
                        </TouchableOpacity>
                    </View>
                    {/* /* Search-Bar */}

                </View>
                {/* /* Headeing-Row */}

                {/* /* Categories */}
                <View style={{
                    flexDirection: 'row',
                    height: 80,
                    marginLeft: 10
                }}>

                    <ScrollView
                        horizontal={true}

                        contentContainerStyle={{ alignItems: 'center' }}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    >
                        {
                            categories.map((item, index) => (
                                <Button
                                    key={item._id}
                                    style={{
                                        backgroundColor: category === item._id ? colors.color1 : colors.color5,
                                        borderRadius: 100,
                                        margin: 5
                                    }}
                                    onPress={() => categoryButtonHandler(item._id)}
                                >
                                    <Text style={{
                                        fontSize: 12,
                                        color: category === item._id ? colors.color2 : 'gray'
                                    }}>{item.category}</Text>
                                </Button>
                            ))
                        }
                    </ScrollView>

                </View>
                {/* /* Categories */}

                {/* /* Products */}
                <View style={{
                    flex: 1,
                    marginTop: 20
                }}>

                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    >
                        {

                            products.map((product, index) => (
                                <ProductCard
                                    stock={product.stock}
                                    name={product.name}
                                    price={product.price}
                                    image={product.images[0].url}
                                    addToCardHandler={addToCardhandler}
                                    id={product._id}
                                    key={product._id}
                                    index={index}
                                    navigate={navigate}
                                />
                            ))
                        }
                    </ScrollView>

                </View>
                {/* /* Products */}

                <TouchableOpacity
                    style={{
                        position: "absolute",
                        bottom: 90,
                        right: 30,
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
                    onPress={showHelpBottomMethod}
                >
                    <Avatar.Icon
                        icon={"account-question"}
                        size={40}
                        color={colors.color2}
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
                                right: 90,
                                bottom: 90,
                                width: "auto",
                                height: 40,

                                flexDirection: "row",
                                justifyContent: "space-around",
                                alignContent: "center",
                                alignSelf: "center"
                            }}
                        >
                            <View
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 40,
                                    backgroundColor: colors.color1,
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center",
                                    marginHorizontal: 5
                                }}
                            >
                                <Avatar.Icon
                                    icon={"help-rhombus"}
                                    size={40}
                                    color={colors.color2}
                                    style={{
                                        backgroundColor: colors.color1,
                                        justifyContent: "center",
                                        alignContent: "center",
                                        alignSelf: "center"
                                    }}
                                />
                            </View>
                            <View
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 40,
                                    backgroundColor: colors.color1,
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center",
                                    marginHorizontal: 5
                                }}
                            >
                                <Avatar.Icon
                                    icon={"phone"}
                                    size={40}
                                    color={colors.color2}
                                    style={{
                                        backgroundColor: colors.color1,
                                        justifyContent: "center",
                                        alignContent: "center",
                                        alignSelf: "center"
                                    }}
                                />
                            </View>
                            <View
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 40,
                                    backgroundColor: colors.color1,
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center",
                                    marginHorizontal: 5
                                }}
                            >
                                <Avatar.Icon
                                    icon={"account"}
                                    size={40}
                                    color={colors.color2}
                                    style={{
                                        backgroundColor: colors.color1,
                                        justifyContent: "center",
                                        alignContent: "center",
                                        alignSelf: "center"
                                    }}
                                />
                            </View>
                            <View
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 40,
                                    backgroundColor: colors.color1,
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center",
                                    marginHorizontal: 5
                                }}
                            >
                                <Avatar.Icon
                                    icon={"plus"}
                                    size={40}
                                    color={colors.color2}
                                    style={{
                                        backgroundColor: colors.color1,
                                        justifyContent: "center",
                                        alignContent: "center",
                                        alignSelf: "center"
                                    }}
                                />
                            </View>
                        </View>
                    ) : (
                        <View></View>
                    )
                }



                {/* /* Footer */}
                <Footer activeRoute={"HOME"} />
                {/* /* Footer */}

            </View>
        </>

    )
}

export default Home