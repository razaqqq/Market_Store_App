import { Text, View, ScrollView, Image, TouchableOpacity, FlatList, Dimensions } from "react-native"
import Header from "../components/Header"
import { colors } from "../styles/styles"
import { Avatar } from "react-native-paper"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import ProductCardShopDetails from "../components/ProductCardShopDetail"
import { Colors } from "react-native/Libraries/NewAppScreen"






const ShopDetails = () => {

    const categoryUserArray = [
        "FeaturedProduct", "TopSellestProduct", "DiscountedProduct", "LastestProduct", "AllProduct"
    ]

    // description={}
    // discount={}
    // height={}
    // image={}
    // index={index}
    // price={}
    // title={}
    // width={}

    const width = Dimensions.get("window").width
    const height = Dimensions.get("window").height

    const featuredProductArray = [
        {
            "image": "https://imgx.gridoto.com/crop/0x0:0x0/700x465/photo/2023/03/30/lamborghini-revueltojpg-20230330044323.jpg",
            "description": "This is Descriptions Featured Product",
            "title": "This is Featured Product",
            "discount": 10,
            "price": 99

        },
        {
            "image": "https://imgx.gridoto.com/crop/0x0:0x0/700x465/photo/2023/03/30/lamborghini-revueltojpg-20230330044323.jpg",
            "description": "This is Descriptions Featured Product",
            "title": "This is Featured Product",
            "discount": 10,
            "price": 99

        },
        {
            "image": "https://imgx.gridoto.com/crop/0x0:0x0/700x465/photo/2023/03/30/lamborghini-revueltojpg-20230330044323.jpg",
            "description": "This is Descriptions Featured Product",
            "title": "This is Featured Product",
            "discount": 10,
            "price": 99

        },
        {
            "image": "https://imgx.gridoto.com/crop/0x0:0x0/700x465/photo/2023/03/30/lamborghini-revueltojpg-20230330044323.jpg",
            "description": "This is Descriptions Featured Product",
            "title": "This is Featured Product",
            "discount": 10,
            "price": 99

        },
        {
            "image": "https://imgx.gridoto.com/crop/0x0:0x0/700x465/photo/2023/03/30/lamborghini-revueltojpg-20230330044323.jpg",
            "description": "This is Descriptions Featured Product",
            "title": "This is Featured Product",
            "discount": 10,
            "price": 99

        },
        {
            "image": "https://imgx.gridoto.com/crop/0x0:0x0/700x465/photo/2023/03/30/lamborghini-revueltojpg-20230330044323.jpg",
            "description": "This is Descriptions Featured Product",
            "title": "This is Featured Product",
            "discount": 10,
            "price": 99

        },
        {
            "image": "https://imgx.gridoto.com/crop/0x0:0x0/700x465/photo/2023/03/30/lamborghini-revueltojpg-20230330044323.jpg",
            "description": "This is Descriptions Featured Product",
            "title": "This is Featured Product",
            "discount": 10,
            "price": 99

        },
        {
            "image": "https://imgx.gridoto.com/crop/0x0:0x0/700x465/photo/2023/03/30/lamborghini-revueltojpg-20230330044323.jpg",
            "description": "This is Descriptions Featured Product",
            "title": "This is Featured Product",
            "discount": 10,
            "price": 99

        },
    ]

    const topSellestproduct = [
        {
            "image": "https://statik.tempo.co/data/2021/07/08/id_1033425/1033425_720.jpg",
            "description": "This is descriptions TopSellestProduct",
            "title": "This is Top Sellest Product",
            "discount": 0,
            "price": 100

        },
        {
            "image": "https://statik.tempo.co/data/2021/07/08/id_1033425/1033425_720.jpg",
            "description": "This is descriptions TopSellestProduct",
            "title": "This is Top Sellest Product",
            "discount": 0,
            "price": 100

        },
        {
            "image": "https://statik.tempo.co/data/2021/07/08/id_1033425/1033425_720.jpg",
            "description": "This is descriptions TopSellestProduct",
            "title": "This is Top Sellest Product",
            "discount": 0,
            "price": 100

        },
        {
            "image": "https://statik.tempo.co/data/2021/07/08/id_1033425/1033425_720.jpg",
            "description": "This is descriptions TopSellestProduct",
            "title": "This is Top Sellest Product",
            "discount": 0,
            "price": 100

        },
        {
            "image": "https://statik.tempo.co/data/2021/07/08/id_1033425/1033425_720.jpg",
            "description": "This is descriptions TopSellestProduct",
            "title": "This is Top Sellest Product",
            "discount": 0,
            "price": 100

        },
        {
            "image": "https://statik.tempo.co/data/2021/07/08/id_1033425/1033425_720.jpg",
            "description": "This is descriptions TopSellestProduct",
            "title": "This is Top Sellest Product",
            "discount": 0,
            "price": 100

        },
        {
            "image": "https://statik.tempo.co/data/2021/07/08/id_1033425/1033425_720.jpg",
            "description": "This is descriptions TopSellestProduct",
            "title": "This is Top Sellest Product",
            "discount": 0,
            "price": 100

        },


    ]

    const discountedProductArray = [
        {
            "image": "https://awsimages.detik.net.id/visual/2023/02/10/ferrari-296-gts-cnbc-indonesialinda-hasibuan-2_169.jpeg?w=650",
            "description": "This is descriptions Discounted Product",
            "title": "This is Discounted Product",
            "discount": 10,
            "price": 200

        },
        {
            "image": "https://awsimages.detik.net.id/visual/2023/02/10/ferrari-296-gts-cnbc-indonesialinda-hasibuan-2_169.jpeg?w=650",
            "description": "This is descriptions Discounted Product",
            "title": "This is Discounted Product",
            "discount": 10,
            "price": 200

        },
        {
            "image": "https://awsimages.detik.net.id/visual/2023/02/10/ferrari-296-gts-cnbc-indonesialinda-hasibuan-2_169.jpeg?w=650",
            "description": "This is descriptions Discounted Product",
            "title": "This is Discounted Product",
            "discount": 10,
            "price": 200

        },
        {
            "image": "https://awsimages.detik.net.id/visual/2023/02/10/ferrari-296-gts-cnbc-indonesialinda-hasibuan-2_169.jpeg?w=650",
            "description": "This is descriptions Discounted Product",
            "title": "This is Discounted Product",
            "discount": 10,
            "price": 200

        },
        {
            "image": "https://awsimages.detik.net.id/visual/2023/02/10/ferrari-296-gts-cnbc-indonesialinda-hasibuan-2_169.jpeg?w=650",
            "description": "This is descriptions Discounted Product",
            "title": "This is Discounted Product",
            "discount": 10,
            "price": 200

        },
        {
            "image": "https://awsimages.detik.net.id/visual/2023/02/10/ferrari-296-gts-cnbc-indonesialinda-hasibuan-2_169.jpeg?w=650",
            "description": "This is descriptions Discounted Product",
            "title": "This is Discounted Product",
            "discount": 10,
            "price": 200

        },
        {
            "image": "https://awsimages.detik.net.id/visual/2023/02/10/ferrari-296-gts-cnbc-indonesialinda-hasibuan-2_169.jpeg?w=650",
            "description": "This is descriptions Discounted Product",
            "title": "This is Discounted Product",
            "discount": 10,
            "price": 200

        },
        {
            "image": "https://awsimages.detik.net.id/visual/2023/02/10/ferrari-296-gts-cnbc-indonesialinda-hasibuan-2_169.jpeg?w=650",
            "description": "This is descriptions Discounted Product",
            "title": "This is Discounted Product",
            "discount": 10,
            "price": 200

        },
        {
            "image": "https://awsimages.detik.net.id/visual/2023/02/10/ferrari-296-gts-cnbc-indonesialinda-hasibuan-2_169.jpeg?w=650",
            "description": "This is descriptions Discounted Product",
            "title": "This is Discounted Product",
            "discount": 10,
            "price": 200

        },
        {
            "image": "https://awsimages.detik.net.id/visual/2023/02/10/ferrari-296-gts-cnbc-indonesialinda-hasibuan-2_169.jpeg?w=650",
            "description": "This is descriptions Discounted Product",
            "title": "This is Discounted Product",
            "discount": 10,
            "price": 200

        },
       
    ]



    const allProductArray = []

    allProductArray.push(...featuredProductArray)
    allProductArray.push(...topSellestproduct)
    allProductArray.push(...discountedProductArray)

    const lastestProductArray = allProductArray.reverse()


    const navigate = useNavigation()

    const [category, setCategory] = useState(categoryUserArray[0])

    const categoryButtonHandler = (categorys) => {
        setCategory(categorys)
    }

    function renderItem({ item, index }) {
        return <ProductCardShopDetails
            description={item.description}
            discount={item.discount}
            height={(height * 1 / 2.5 - 10)}
            image={item.image}
            index={index}
            price={item.price}
            title={item.title}
            category={"CAR"}
            width={width * 1 / 2 - 10}
        />
    }

    return (
        <View
            style={{
                width: "100%",
                height: "100%",

                justifyContent: "center",
                alignContent: "center",
                alignSelf: "center",

            }}
        >

            <ScrollView
                horizontal={false}
                style={{
                    width: "100%",
                    height: "auto",
                    marginTop: 50
                }}
            >
                <View
                    style={{
                        width: "100%",
                        height: 250,
                        backgroundColor: colors.color3

                    }}
                >
                    <Image
                        source={{
                            uri: "https://as2.ftcdn.net/v2/jpg/05/72/67/79/1000_F_572677902_81yN2FWPAobXTgfGc4HH3M0QcjAthPGm.jpg",

                        }}
                        resizeMode="cover"
                        style={{
                            zIndex: 10,
                            width: "100%",
                            height: "100%",
                        }}
                    />
                    <View
                        style={{
                            width: 80,
                            height: 80,
                            borderRadius: 80,
                            borderWidth: 1,
                            borderColor: colors.color1,
                            zIndex: 20,
                            position: "absolute",
                            bottom: 20,
                            left: 20
                        }}
                    >
                        <Image
                            source={{
                                uri: "https://cdn.idntimes.com/content-images/post/20160220/gambarutamagentle-blog-1stselections-co-c0a3d702a850fa3ecf8a0c86c24a18d2_600x400.jpg"
                            }}
                            style={{
                                width: 80,
                                height: 80,
                                borderRadius: 80,
                                zIndex: 30
                            }}
                        />
                        <TouchableOpacity
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: 30,
                                backgroundColor: colors.color1,
                                position: "absolute",
                                zIndex: 40,
                                right: 0,
                                bottom: 0
                            }}
                        >
                            <Avatar.Icon
                                icon={"pencil"}
                                size={30}
                                color={colors.color2}
                                style={{
                                    backgroundColor: colors.transparentCustom
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style={{
                        width: "100%",
                        height: "auto",
                        backgroundColor: colors.color6,
                        marginTop: 30,
                        marginBottom: 10,
                        flexDirection: "column"
                    }}
                >
                    <View
                        style={{
                            width: "100%",
                            height: 50,
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center"
                        }}
                    >
                        <Text
                            style={{
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center"
                            }}
                        >
                            Shop Informations
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "column",
                            height: "auto",
                            paddingHorizontal: 10,
                            paddingVertical: 5
                        }}
                    >
                        <View
                            style={{
                                flex: 2,
           
                                paddingHorizontal: 10
                            }}
                        >
                            <View
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    flexDirection: "column",

                                }}
                            >
                                <Text
                                    style={{
                                        marginVertical: 5
                                    }}
                                >Shop Name</Text>
                                <Text
                                    style={{
                                        marginVertical: 5
                                    }}
                                >Shop Descriptions</Text>
                                <Text
                                    style={{
                                        marginVertical: 5
                                    }}
                                >Shop Location</Text>
                                <Text
                                    style={{
                                        marginVertical: 5
                                    }}
                                >

                                    Shop Telp</Text>
                                <Text
                                    style={{
                                        marginVertical: 5
                                    }}
                                >Shop Email</Text>
                                <Text
                                    style={{
                                        marginVertical: 5
                                    }}
                                >Shop Short Video</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                flex: 3,
                                backgroundColor: colors.color2,
                                paddingHorizontal: 10,
                                paddingVertical: 10
                            }}
                        >
                            <Text
                                style={{
                                    marginVertical: 5
                                }}
                            >Shop Name</Text>
                            <Text
                                style={{
                                    marginVertical: 5
                                }}
                            >Shop Descriptions</Text>
                            <Text
                                style={{
                                    marginVertical: 5
                                }}
                            >Shop Location</Text>
                            <Text
                                style={{
                                    marginVertical: 5
                                }}
                            >

                                Shop Telp</Text>
                            <Text
                                style={{
                                    marginVertical: 5
                                }}
                            >Shop Email</Text>
                            <Text
                                style={{
                                    marginVertical: 5
                                }}
                            >Shop Short Video</Text>
                        </View>

                    </View>
                </View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{
                        width: "100%",
                        height: 80,
                        backgroundColor: colors.transparentCustom,

                    }}
                >
                    <View
                        style={{
                            width: "100%",
                            height: "100%",
                            flexDirection: "row",
                            marginHorizontal: 20

                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: "auto",
                                height: 40,
                                borderRadius: 80,
                                backgroundColor: colors.color1,
                                paddingHorizontal: 20,
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center",
                                marginRight: 10
                            }}
                            onPress={() => categoryButtonHandler(categoryUserArray[0])}
                        >
                            <Text
                                style={{
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center",
                                    fontWeight: "bold",
                                    fontSize: 15,
                                    color: colors.color2
                                }}
                            >Featured Product</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: "auto",
                                height: 40,
                                borderRadius: 80,
                                backgroundColor: colors.color1,
                                paddingHorizontal: 20,
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center",
                                marginRight: 10
                            }}
                            onPress={() => categoryButtonHandler(categoryUserArray[1])}
                        >
                            <Text
                                style={{
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center",
                                    fontWeight: "bold",
                                    fontSize: 15,
                                    color: colors.color2
                                }}
                            >TopSellest Product</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: "auto",
                                height: 40,
                                borderRadius: 80,
                                backgroundColor: colors.color1,
                                paddingHorizontal: 20,
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center",
                                marginRight: 10
                            }}
                            onPress={() => categoryButtonHandler(categoryUserArray[2])}
                        >
                            <Text
                                style={{
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center",
                                    fontWeight: "bold",
                                    fontSize: 15,
                                    color: colors.color2
                                }}
                            >Discounted Product</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: "auto",
                                height: 40,
                                borderRadius: 80,
                                backgroundColor: colors.color1,
                                paddingHorizontal: 20,
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center",
                                marginRight: 10
                            }}
                            onPress={() => categoryButtonHandler(categoryUserArray[3])}
                        >
                            <Text
                                style={{
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center",
                                    fontWeight: "bold",
                                    fontSize: 15,
                                    color: colors.color2
                                }}
                            >Lastest Product</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: "auto",
                                height: 40,
                                borderRadius: 80,
                                backgroundColor: colors.color1,
                                paddingHorizontal: 20,
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center",
                                marginRight: 10
                            }}
                            onPress={() => categoryButtonHandler(categoryUserArray[4])}
                        >
                            <Text
                                style={{
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center",
                                    fontWeight: "bold",
                                    fontSize: 15,
                                    color: colors.color2
                                }}
                            >All Product</Text>
                        </TouchableOpacity>

                    </View>

                </ScrollView>
                <View
                    style={{
                        width: "100%",
                        height: "auto",


                        marginBottom: 60
                    }}
                >
                    {
                        category === categoryUserArray[0] && (
                            <View
                                style={{
                                    width: "100%",
                                    height: "auto"
                                }}
                            >
                                <FlatList
                                    data={featuredProductArray}
                                    renderItem={renderItem}
                                    numColumns={2} key={2}
                                />
                            </View>
                        )
                    }
                    {
                        category === categoryUserArray[1] && (
                            <View
                                style={{
                                    width: "100%",
                                    height: "auto"
                                }}
                            >
                                <FlatList
                                    data={topSellestproduct}
                                    renderItem={renderItem}
                                    numColumns={2} key={2}
                                />
                            </View>
                        )
                    }
                    {

                        category === categoryUserArray[2] && (
                            <View
                                style={{
                                    width: "100%",
                                    height: "auto"
                                }}
                            >
                                <FlatList
                                    data={discountedProductArray}
                                    renderItem={renderItem}
                                    numColumns={2} key={2}
                                />
                            </View>
                        )
                    }
                    {
                        category === categoryUserArray[3] && (
                            <View
                                style={{
                                    width: "100%",
                                    height: "auto"
                                }}
                            >
                                <FlatList
                                    data={lastestProductArray}
                                    renderItem={renderItem}
                                    numColumns={2} key={2}
                                />
                            </View>
                        )
                    }
                    {
                        category === categoryUserArray[4] && (
                            <View
                                style={{
                                    width: "100%",
                                    height: "auto"
                                }}
                            >
                                <FlatList
                                    data={allProductArray}
                                    renderItem={renderItem}
                                    numColumns={2} key={2}
                                />
                            </View>

                        )
                    }

                </View>
            </ScrollView >
            <View
                style={{
                    height: 50,
                    width: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    elevation: 10,
                    backgroundColor: colors.color1,


                }}
            >
                <View
                    style={{
                        width: "100%",
                        height: "100%",
                        
                        flexDirection: "row",
                        paddingHorizontal: 15
                        

                        
        
                    }}
                >
                    <TouchableOpacity

                        style={{
                            flex: 1,
             
                
                            alignSelf: "center",
                            alignItems: "flex-start",
            

                        }}
                        onPress={() => {
                            navigate.goBack()
                        }}
                    >
                        <Avatar.Icon
                            size={50}
                            color={colors.color2}
                            style={{
                                backgroundColor: colors.transparentCustom,
                                
         
              
                                alignItems: "flex-start"
                            }}
                            icon={"step-backward"}

                        />
                    </TouchableOpacity>
                    <View

                        style={{
                            flex: 1,
               
                            alignContent: "center",
                            alignSelf: "center"

                        }}>
                        <Text
                            style={{
                  
                                alignContent: "center",
                                alignSelf: "center",
                                fontSize: 18,
                                color: colors.color2,
                                fontWeight: "bold",
                                paddingRight: 20
                            }}
                        >Shop Details</Text>
                    </View>
                    <View

                        style={{
                            flex: 1,
           
                            justifyContent: "center",
                            alignSelf: "center",
                            alignItems: "flex-end"

                        }}>
                        <Avatar.Icon  icon={"dots-vertical"} />
                    </View>
                </View>
            </View>
        </View >
    )

}


export default ShopDetails