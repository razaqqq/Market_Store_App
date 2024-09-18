import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Avatar } from "react-native-paper"
import ContactListItem from "../components/ContactListItem"
import FooterChat from "../components/FooterChat"
import { colors } from "../styles/styles"





const ContactList = () => {

    const contactListData = [
        {
            "image": "https://static.vecteezy.com/system/resources/thumbnails/006/240/296/small_2x/idyllic-mountain-landscape-with-fresh-green-meadows-and-blooming-wildflowers-idyllic-nature-countryside-view-rural-outdoor-natural-view-idyllic-banner-nature-panoramic-spring-summer-scenery-photo.jpg",
            "name": "Anjay",
            "descriptions": "descriptions"
        },
        {
            "image": "https://static.vecteezy.com/system/resources/thumbnails/006/240/296/small_2x/idyllic-mountain-landscape-with-fresh-green-meadows-and-blooming-wildflowers-idyllic-nature-countryside-view-rural-outdoor-natural-view-idyllic-banner-nature-panoramic-spring-summer-scenery-photo.jpg",
            "name": "Anjay",
            "descriptions": "descriptions"
        },
        {
            "image": "https://static.vecteezy.com/system/resources/thumbnails/006/240/296/small_2x/idyllic-mountain-landscape-with-fresh-green-meadows-and-blooming-wildflowers-idyllic-nature-countryside-view-rural-outdoor-natural-view-idyllic-banner-nature-panoramic-spring-summer-scenery-photo.jpg",
            "name": "Anjay",
            "descriptions": "descriptions"
        },
        {
            "image": "https://static.vecteezy.com/system/resources/thumbnails/006/240/296/small_2x/idyllic-mountain-landscape-with-fresh-green-meadows-and-blooming-wildflowers-idyllic-nature-countryside-view-rural-outdoor-natural-view-idyllic-banner-nature-panoramic-spring-summer-scenery-photo.jpg",
            "name": "Anjay",
            "descriptions": "descriptions"
        },
        {
            "image": "https://static.vecteezy.com/system/resources/thumbnails/006/240/296/small_2x/idyllic-mountain-landscape-with-fresh-green-meadows-and-blooming-wildflowers-idyllic-nature-countryside-view-rural-outdoor-natural-view-idyllic-banner-nature-panoramic-spring-summer-scenery-photo.jpg",
            "name": "Anjay",
            "descriptions": "descriptions"
        },
        {
            "image": "https://static.vecteezy.com/system/resources/thumbnails/006/240/296/small_2x/idyllic-mountain-landscape-with-fresh-green-meadows-and-blooming-wildflowers-idyllic-nature-countryside-view-rural-outdoor-natural-view-idyllic-banner-nature-panoramic-spring-summer-scenery-photo.jpg",
            "name": "Anjay",
            "descriptions": "descriptions"
        },
        {
            "image": "https://static.vecteezy.com/system/resources/thumbnails/006/240/296/small_2x/idyllic-mountain-landscape-with-fresh-green-meadows-and-blooming-wildflowers-idyllic-nature-countryside-view-rural-outdoor-natural-view-idyllic-banner-nature-panoramic-spring-summer-scenery-photo.jpg",
            "name": "Anjay",
            "descriptions": "descriptions"
        },
        {
            "image": "https://static.vecteezy.com/system/resources/thumbnails/006/240/296/small_2x/idyllic-mountain-landscape-with-fresh-green-meadows-and-blooming-wildflowers-idyllic-nature-countryside-view-rural-outdoor-natural-view-idyllic-banner-nature-panoramic-spring-summer-scenery-photo.jpg",
            "name": "Anjay",
            "descriptions": "descriptions"
        },
        {
            "image": "https://static.vecteezy.com/system/resources/thumbnails/006/240/296/small_2x/idyllic-mountain-landscape-with-fresh-green-meadows-and-blooming-wildflowers-idyllic-nature-countryside-view-rural-outdoor-natural-view-idyllic-banner-nature-panoramic-spring-summer-scenery-photo.jpg",
            "name": "Anjay",
            "descriptions": "descriptions"
        },
        {
            "image": "https://static.vecteezy.com/system/resources/thumbnails/006/240/296/small_2x/idyllic-mountain-landscape-with-fresh-green-meadows-and-blooming-wildflowers-idyllic-nature-countryside-view-rural-outdoor-natural-view-idyllic-banner-nature-panoramic-spring-summer-scenery-photo.jpg",
            "name": "Anjay",
            "descriptions": "descriptions"
        },

    ]


    const alpahbetArray = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'x', 'w', 'y', 'z'
    ]

    return (
        <View
            style={{
                width: "100%",
                height: "100%",
            }}
        >
            <View
                style={{
                    flex: 1,
                    flexDirection: "column",

                }}
            >
                <View
                    style={{

                        flexDirection: "row",
                        justifyContent: "space-around",
                        backgroundColor: colors.color3,
                        height: 80,
         
                    }}
                >
                    <View
                        style={{
                            alignContent: "center",
                            alignSelf: "center",
                            justifyContent: "center"
                        }}
                    >
                        <Avatar.Icon
                            icon={"magnify"}
                            size={50}
                        />
                    </View>
                    <View
                        style={{
                            alignContent: "center",
                            alignSelf: "center",
                            justifyContent: "center"
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 24,
                                fontWeight: "bold",
                                color: colors.color2,

                            }}
                        >Contact List</Text>
                    </View>
                    <View
                        style={{
                            alignContent: "center",
                            alignSelf: "center",
                            justifyContent: "center"
                        }}
                    >
                        <Avatar.Icon
                            size={50}
                            icon={"magnify"} />
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        height: 80,
                        borderTopStartRadius: 40,
                        borderBottomStartRadius: 40,
                        borderTopEndRadius: 40,
                        borderBottomEndRadius: 40,
                        marginHorizontal: 20,
                        backgroundColor: colors.color1_light1,
                        marginVertical: 20
                    }}
                >
                    <TouchableOpacity
                        style={{
                            alignContent: "center",
                            alignSelf: "center",
                            justifyContent: "center"
                        }}
                    >
                        <Avatar.Icon
                            icon={"phone"}
                            size={50}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            alignContent: "center",
                            alignSelf: "center",
                            justifyContent: "center"
                        }}
                    >
                        <Avatar.Icon
                            size={50}
                            icon={"star"}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            alignContent: "center",
                            alignSelf: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Avatar.Icon
                            size={50}
                            icon={"account-group"}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: "column",
                        flex: 1,


                    }}
                >
                    <View

                    >
                        <ScrollView
                            horizontal={false}
                            showsVerticalScrollIndicator={false}
                            style={{
                                paddingBottom: 100
                            }}

                        >
                            {
                                contactListData.map((contact, index) => (
                                    <ContactListItem
                                        image={contact.image}
                                        name={contact.name}
                                        description={contact.descriptions}
                                        index={index}

                                    />
                                ))
                            }
                        </ScrollView>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "column",
                            width: 50
                        }}
                    >
                        {
                            alpahbetArray.map((alp, index) => (
                                <Text>{alp[index]}</Text>
                            ))
                        }
                    </View>
                </View>
            </View>
            <FooterChat
                activeRoute="CONTACT-LIST"
            />
        </View>
    )

}

export default ContactList