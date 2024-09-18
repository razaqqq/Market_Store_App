
import { colors, defaultStyle } from '../styles/styles'

import { View, Text, Dimensions, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import Carousel from 'react-native-snap-carousel'
import { Avatar, Button } from 'react-native-paper'
import Toast from 'react-native-toast-message'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused, useNavigation } from '@react-navigation/native'

import { getProductDetail } from "../../redux/actions/productAction"
import { Shadow } from 'react-native-shadow-2'
import { loadUserById } from '../../redux/actions/userActions'

const CAROUSEL_WIDTH = Dimensions.get("window").width
const ITEM_WIDTH = CAROUSEL_WIDTH


const ProductDetails = ({ route: { params } }) => {

    console.log("Product Details Page Logg")

    const navigate = useNavigation()

    console.log("Logging Params ID")
    console.log(params)

    console.log("Logging Corousel Width = ")
    console.log(CAROUSEL_WIDTH)

    console.log("Logging ITEM WIDTH = ")
    console.log(ITEM_WIDTH)

    // const [name, setName] = useState("")
    // const [description, setDescription] = useState("")
    // const [price, setPrice] = useState("")
    // const [stock, setStock] = useState("")
    // const [images, setImages] = useState([])
    // const [createdBy, setCreatedBy] = useState("")




    const dispatch = useDispatch()
    const isFocused = useIsFocused()

    console.log(`dispatch = ${dispatch}`)
    console.log(`isFocused = ${isFocused}`)

    

    const {
        product
    } = useSelector(state => state.product)

    const {
        userById
    } = useSelector(state => state.user)

    const name = product.name
    const description = product.description
    const price = product.price
    const stock = product.stock
    const images = product.images

    let createdBy = ""
    let avatar = ""

    let userByIdTemp = {}

    if (userById === undefined) {
        userByIdTemp = {
            name: "test123",
            email: "test123@gmail.com",
            address: "heaven2",
            city: "heaven city2",
            country: "heaven country",
            pincode: "123123312",
            role: "guest",
            avatar: {
                public_id: "asdhjasgd213hjsagdhj",
                url: "https://m.media-amazon.com/images/I/51OD-s86LvL.jpg"
            }
        }

    }
    else {
        userByIdTemp = userById
    }

    if (product.createdBy === undefined) {
        createdBy = "66097019a12fc40ec002a087"

    }
    else {
        createdBy = product.createdBy
    }

    console.log("Logging UserById")
    console.log(userById)

  

    console.log(`Product Details Created By ${createdBy}`)




    // const { userById } = useSelector(state => state.user)


    // console.log(`Prodcut Details userById ${userById}`)

    // const {
    //     product
    // } = useSelector(state => state.product)

    // console.log(`Product details Page ${product}`)
    // console.log(product)

    const isCarousel = useRef(null)

    const [quantity, setQuantity] = useState(1)

    const incrementQty = () => {

        console.log("Product Details Page Increment Quantity Function Called")
        console.log(`quantity = ${quantity}`)
        console.log(`stock = ${stock}`)

        if (quantity <= stock) return Toast.show({
            type: "error",
            text1: "Maximum Value Added"
        })

        setQuantity((prevValue) => prevValue++)

    }
    
    const decrementQty = () => {

        console.log("Product Details Page AddToCartHandler Decrement Quantity Function")
        console.log(`quantity = ${quantity}`)


        if (quantity <= 1) return
        setQuantity((prevValue) => prevValue--)

    }

    const iconOptions = {
        size: 20,
        style: {
            borderRadius: 5,
            color: colors.color5,
            height: 25,
            width: 25
        }
    }

    const addToCardHandler = () => {

        console.log("Product Details Page AddToCartHandler Function")

        if (stock === 0) return Toast.show({
            type: "error",
            text1: "Out Of Stock"
        })

        dispatch({
            type: "addToCart",
            payload: {
                product: params.id,
                name,
                price,
                image: images[0]?.url,
                stock,
                quantity
            }
        })

        Toast.show({
            type: "success",
            text1: "Added To Cart"
        })

    }


    useEffect(() => {

        console.log("Product Detail Page UseEffect Called Dispatch get Product Detail")
        console.log("console logging params id")
        console.log(params.id)





        dispatch(getProductDetail(params.id))




        dispatch(loadUserById(createdBy))



        console.log("Product Detail Page UseEffect Called Dispatch get Product Detail Close")



    }, [dispatch, params.id, isFocused])







    return (

        <View

            style={{
                ...defaultStyle,
                padding: 0,
                backgroundColor: colors.color1
            }}
        >
            <Header back={true} />

            {console.log("Logging IMage In Corousel")}
            {console.log(images)}
            {console.log(CAROUSEL_WIDTH)}
            {console.log(ITEM_WIDTH)}
            {console.log(isCarousel)}

            {console.log("Product Details Trying to Call Carousel")}

            <Carousel
                layout='stack'
                sliderWidth={CAROUSEL_WIDTH}
                itemWidth={ITEM_WIDTH}
                ref={isCarousel}
                data={images}
                renderItem={CarouselCardItem}
                
            />
            {/* /* Carousel */}


            <ScrollView 
                horizontal={false}
                style={style.marginTopp}
            >
                {/* /* Carousel */}
         
            {console.log("Already Calling Carousel")}




            <View
                style={{
                    backgroundColor: colors.color2,
                    padding: 35,
                    flex: 1,
                    borderTopLeftRadius: 55,
                    borderTopRightRadius: 55,


                }}
            >

                <Text
                    numberOfLines={2}
                    style={{
                        fontSize: 35
                    }}
                >
                    {name}
                </Text>

                <Text
                    style={{
                        fontSize: 35,
                        fontWeight: "900"
                    }}
                >
                    {price}  $
                </Text>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start"
                }}>

                    <Text style={{
                        fontSize: 15,
                    }}>
                        Stock =
                    </Text>

                    <View
                        style={{
                            width: 10
                        }}
                    >

                    </View>

                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>
                        {stock === 0 ? `${stock}    /pcs` : "Sold Out"}

                    </Text>

                </View>




                <View
                    style={{
                        width: "100%",
                        height: 50,
                        flexDirection: "row",
                        marginVertical: 10

                    }}
                >
                    <Image style={{
                        width: 50,
                        height: 50,
                        borderRadius: 80,
                        borderWidth: 2,
                        borderColor: colors.color2
                    }} source={{ uri: userByIdTemp.avatar.url }} />

                    <View
                        style={{
                            width: "auto",
                            height: "100%",
                            justifyContent: "center",
                            marginLeft: 10
                        }}
                    >
                        {
                            createdBy === undefined ? (
                                <Text>     {userByIdTemp.name}</Text>
                            ) : (
                                <Text
                                    style={{
                                        color: colors.color3,
                                        fontSize: 18
                                    }}
                                >
                                    {userByIdTemp.name}
                                </Text>
                            )
                        }
                    </View>

                    <TouchableOpacity
                        onPress={() => {
                            navigate.navigate("SHOPE-DETAILS-NON-USER", {
                                userByIdTemp
                            })
                        }}
                        style={{
                            flex: 1,
                            height: "100%",
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center",
                            marginLeft: 40
                        }}
                    >
                        <Text
                            style={{
                                textAlign: 'right',
                                color: colors.color1,
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center",
                                fontStyle: 'italic',
                                fontSize: 20,
                                fontWeight: "bold"
                            }}
                        >
                            Visit
                        </Text>
                    </TouchableOpacity>

                </View>



                <Text
                    style={{

                        letterSpacing: 1,
                        lineHeight: 20,
                    }}
                    numberOfLines={8}
                >
                    {description}
                </Text>

                <View
                    style={{
                        marginTop: 60,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingHorizontal: 5,

                    }}
                >
                    <Text
                        style={{
                            color: colors.color3,
                            fontWeight: "100"
                        }}
                    >Quantity</Text>

                    <View
                        style={{
                            width: 80,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >

                        <TouchableOpacity
                            onPress={decrementQty}
                        >
                            <Avatar.Icon icon={"minus"}
                                {...iconOptions}
                            />
                        </TouchableOpacity>

                        <Text
                            style={style.quantity}
                        >
                            {quantity}
                        </Text>

                        <TouchableOpacity
                            onPress={incrementQty}
                        >
                            <Avatar.Icon icon={"plus"}
                                {...iconOptions}
                            />
                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={addToCardHandler}
                    >

                        <Button
                            icon={"cart"}
                            style={style.btn}
                            textColor={colors.color2}
                        >Add TO Cart</Button>

                    </TouchableOpacity>

                </View>

            </View>
            </ScrollView>




        </View>

    )

}

const CarouselCardItem = ({ item, index }) => (
    <View
        style={style.container}
        key={index}
    >
        <Shadow distance={30} stretch={true} style={{
        }}>
            <Image source={{ uri: item?.url }} style={
                style.image
            } />
        </Shadow>



    </View>
)


const style = StyleSheet.create({
    container: {

        paddingTop: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 230,
        resizeMode: "cover",
        height: 270,
        borderRadius: 20
    },
    quantity: {
        backgroundColor: colors.color4,
        height: 25,
        width: 25,
        textAlignVertical: "center",
        textAlign: "center",
        borderRadius: 5,
        borderColor: colors.color5
    },
    btn: {
        backgroundColor: colors.color3,
        borderRadius: 100,
        padding: 5,

    },
    marginTopp: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 0
    }
})

export default ProductDetails