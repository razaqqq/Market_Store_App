import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../styles/styles'
import MyModal from './MyModal'
import { Avatar } from 'react-native-paper'

const ProductListItem = (
    {
        navigate,
        deleteHandler,
        index,
        id,
        price,
        stock,
        name,
        category,
        imgSrc
    }
) => {

    const [openModal, setOpenModal] = useState(false)

    const [hideDesc, setHideDesc] = useState(false)

    const hideDescTrigger = () => {
        if (hideDesc === true) {
            setHideDesc(false)
        }
        else if (hideDesc === false) {
            setHideDesc(true)
        }
    }

    return (
        <>

            <TouchableOpacity
                activeOpacity={0.9}
                onLongPress={() => setOpenModal((prev) => !prev)}
                onPress={() => navigate.navigate("PRODUCT-DETAILS", { id })}>

                <View
                    style={{
                        width: "100%",
                        height: "auto",
                        flexDirection: "column",

                    }}
                >
                    <View style={{
                        ...styles.container,
                        width: "100%",
                        backgroundColor: index % 2 === 0 ? colors.color1 : colors.color3,
                        zIndex: 20
                    }}>
                        <View
                            style={{
                                width: "auto",
                                height: "auto",
                                paddingVertical: 10,

                            }}
                        >
                            <Image source={{
                                uri: imgSrc
                            }}
                                style={{
                                    width: 90,
                                    height: 90,
                                    resizeMode: "cover",
                                    flex: 1,
                                    borderRadius: 10
                                }}
                            />
                        </View>
                        {/* <Text style={{
                        width: 60,
                        color: index % 2 === 0 ? colors.color2 : colors.color2
                    }}
                        numberOfLines={1}
                    >${price}</Text> */}
                        <View
                            style={{
                                flex: 1,
                                height: "100%",
                                justifyContent: "center",
                                alignContent: "center",
                                alignItems: "center",
                                paddingLeft: 20
                            }}
                        >
                            <Text style={{
                                textAlign: "left",

                                maxWidth: 120,
                                color: index % 2 === 0 ? colors.color2 : colors.color2
                            }}
                                numberOfLines={1}
                            >{name}</Text>
                        </View>
                        {/* <Text style={{
                        maxWidth: 60,
                        color: index % 2 === 0 ? colors.color2 : colors.color2
                    }}
                        numberOfLines={1}
                    >{category}</Text> */}
                        <View
                            style={{
                                flex: 1,
                                height: "100%",
                                justifyContent: "center",
                                alignContent: "center",
                                alignItems: "center",
                                paddingLeft: 10
                            }}
                        >
                            <Text style={{
                                maxWidth: 60,
                                color: index % 2 === 0 ? colors.color2 : colors.color2
                            }}
                                numberOfLines={1}
                            >{stock} /Pcs</Text>
                        </View>

                    </View>

                    {
                        hideDesc === false ? (
                            <View></View>
                        ) : (
                            <View
                                style={{
                                    width: "100%",
                                    height: 350,
                                    padding: 10,
                                    flexDirection: "column",
                                    backgroundColor: colors.lightMedium,
                                    marginTop: -20,
                                    borderBottomLeftRadius: 30,
                                    borderBottomRightRadius: 30,
                                    paddingHorizontal: 20

                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: "row",
                                        width: "100%",
                                        flex: 7
                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection: "column",
                                            flex: 1,
                                            height: "100%",
                                            justifyContent: 'space-around'
                                        }}
                                    >
                                        <View>
                                            <Text
                                                style={{
                                                    fontWeight: "bold",
                                                    fontSize: 16
                                                }}
                                            >Product Id</Text>





                                        </View>
                                        <View>
                                            <Text
                                                style={{
                                                    fontWeight: "bold",
                                                    fontSize: 16
                                                }}
                                            >Name</Text>
                                        </View>
                                        <View>
                                            <Text
                                                style={{
                                                    fontWeight: "bold",
                                                    fontSize: 16
                                                }}
                                            >Price</Text>
                                        </View>
                                        <View>
                                            <Text
                                                style={{
                                                    fontWeight: "bold",
                                                    fontSize: 16
                                                }}
                                            >Stock</Text>
                                        </View>
                                        <View>
                                            <Text
                                                style={{
                                                    fontWeight: "bold",
                                                    fontSize: 16
                                                }}
                                            >Category</Text>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: "column",
                                            flex: 2,
                                            height: "100%",
                                            justifyContent: 'space-around'
                                        }}
                                    >
                                        <View>
                                            <Text>{id}</Text>





                                        </View>
                                        <View>
                                            <Text>{name}</Text>
                                        </View>
                                        <View>
                                            <Text>{price}</Text>
                                        </View>
                                        <View>
                                            <Text>{stock}</Text>
                                        </View>
                                        <View>
                                            <Text>{category}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        flex: 2,
                                        width: "100%",
                                        justifyContent: "center",
                                        alignContent: 'center',
                                        alignSelf: "center",
                                        marginBottom: 20
                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            height: "100%"
                                        }}
                                    >
                                        <TouchableOpacity
                                            style={{

                                                height: "60%",
                                                flex: 1,
                                                borderRadius: 30,
                                                borderWidth: 5,
                                                backgroundColor: index % 2 === 0 ? colors.color1 : colors.color3,
                                                borderColor: index % 2 === 0 ? colors.color3 : colors.color1,
                                                justifyContent: "center",
                                                alignContent: 'center',
                                                alignSelf: "center",
                                                marginHorizontal: 10
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    justifyContent: "center",
                                                    alignContent: 'center',
                                                    alignSelf: "center",
                                                    color: colors.color2
                                                }}
                                            >Edit Product</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={{

                                                height: "60%",
                                                flex: 1,
                                                borderRadius: 30,
                                                borderWidth: 5,
                                                backgroundColor: index % 2 === 0 ? colors.color1 : colors.color3,
                                                borderColor: index % 2 === 0 ? colors.color3 : colors.color1,
                                                justifyContent: "center",
                                                alignContent: 'center',
                                                alignSelf: "center",
                                                marginHorizontal: 10,

                                            }}
                                        >
                                            <Text
                                                style={{
                                                    justifyContent: "center",
                                                    alignContent: 'center',
                                                    alignSelf: "center",
                                                    color: colors.color2
                                                }}
                                            >Delete</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                        )
                    }


                </View>


                {
                    hideDesc === true ? (
                        <TouchableOpacity
                            style={{
                                position: "absolute",
                                bottom: 10,
                                right: 10,
                                zIndex: 50
                            }}
                            onPress={hideDescTrigger}
                        >
                            <Avatar.Icon
                                size={40}
                                icon={"unfold-more-horizontal"}
                                color={colors.color1}
                                style={{
                                    backgroundColor: colors.transparentCustom,

                                }}
                            />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            style={{
                                position: "absolute",
                                bottom: 10,
                                right: 10,
                                zIndex: 50
                            }}
                            onPress={hideDescTrigger}
                        >
                            <Avatar.Icon
                                size={40}
                                icon={"unfold-more-vertical"}
                                color={colors.color2}
                                style={{
                                    backgroundColor: colors.transparentCustom,

                                }}
                            />
                        </TouchableOpacity>
                    )
                }





            </TouchableOpacity>

            {
                openModal && (
                    <MyModal
                        id={id}
                        deleteHandler={deleteHandler}
                        navigate={navigate}
                        setOpenModel={setOpenModal} />
                )
            }

        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        height: 120,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 10,

    }
})

export default ProductListItem