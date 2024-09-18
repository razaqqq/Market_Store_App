import { View, Text, Platform, SafeAreaView, ScrollView, TouchableOpacity, Image, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../styles/styles'
import { StatusBar } from 'expo-status-bar'
import { Avatar, Headline, Searchbar } from 'react-native-paper'

const SearchModal = ({ searchQuery, setSearchQuery, setActiveSearch, products }) => {

    const navigate = useNavigation()

    const [moreVisible, setMoreVisible] = useState(false)

    const showHideDesc = () => {
        if (moreVisible === false) {
            setMoreVisible(true)
        }
        else {
            setMoreVisible(false)
        }
    }

    const backAction = () => {
        setSearchQuery("")
        setActiveSearch(false)

        return true

    }

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction)

        return () => {
            BackHandler.removeEventListener("hardwareBackPress", backAction)
        }

    }, [])

    return (
        <View style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            zIndex: 100,
            backgroundColor: colors.color2,
            padding: 35,
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        }}>
            <SafeAreaView>
                <Searchbar
                    placeholder='Search...'
                    onChangeText={(query) => setSearchQuery(query)}
                    value={searchQuery}
                    style={{
                        marginTop: 20
                    }}
                />
                <ScrollView>
                    <View
                        style={{
                            paddingVertical: 40,
                            paddingHorizontal: 10,

                        }}
                    >
                        {
                            products.map(product => (
                                <SearchItem
                                    key={product._id}
                                    imgSrc={product.images[0]?.url}
                                    name={product.name}
                                    price={product.price}
                                    desc={product.description}
                                    handler={
                                        () => navigate.navigate(
                                            "PRODUCT-DETAILS",
                                            { id: product._id }
                                        )
                                    }
                                    showHideDesc={showHideDesc}
                                    moreVisible={moreVisible}
                                />
                            ))
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>

        </View>
    )
}

const SearchItem = ({ price, name, imgSrc, handler, showHideDesc, desc, moreVisible }) => (
    <TouchableOpacity onPress={handler}>
        <View
            style={{
                flexDirection: "column",
                width: "100%",
                height: "auto",
                marginVertical: 10,
                backgroundColor: colors.color2,
                elevation: 10,
                borderRadius: 30
            }}
        >
            <View
                style={{
                    padding: 20,


                    alignItems: "center",
                    flexDirection: "row",

                }}
            >
                <Image
                    source={{
                        uri: imgSrc
                    }}
                    style={{
                        width: 80,
                        height: 80,
                        position: "absolute",
                        resizeMode: "cover",

                        left: 10,

                        borderRadius: 10
                    }}
                />
                <View
                    style={{
                        width: "100%",
                        paddingLeft: 100
                    }}
                >
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "900"
                        }}
                        numberOfLines={1}>{name}</Text>
                    <Headline
                        numberOfLines={1}
                        style={{
                            fontWeight: "900",
                            color: colors.color1_light2
                        }}>{price}</Headline>
                </View>
                {
                    moreVisible === false ? (
                        <TouchableOpacity
                            style={{
                                position: "absolute",
                                bottom: 0,
                                right: 0
                            }}
                            onPress={showHideDesc}

                        >
                            <Avatar.Icon
                                size={50}
                                style={{
                                    backgroundColor: colors.transparentCustom,
                                }}
                                icon={"unfold-more-vertical"}
                            />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            style={{
                                position: "absolute",
                                bottom: -300,
                                right: 0
                            }}
                            onPress={showHideDesc}

                        >
                            <Avatar.Icon
                                size={50}
                                style={{
                                    backgroundColor: colors.transparentCustom,
                                }}
                                icon={"unfold-more-horizontal"}
                            />
                        </TouchableOpacity>
                    )
                }

            </View>
            {
                moreVisible === false ? (<View></View>) : (
                    <View
                        style={{
                            width: "100%",
                            height: 300,
                            flexDirection: "column",
                            paddingHorizontal: 10
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 18,
                                color: colors.color1_light1
                            }}
                        >DescripTion</Text>
                        <Text
                            numberOfLines={3}
                            style={{
                                textAlign: "left",
                                fontSize: 18,

                            }}
                        >{desc}</Text>
                    </View>
                )
            }
        </View>
    </TouchableOpacity>
)

export default SearchModal