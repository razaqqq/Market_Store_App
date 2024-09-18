import { Text, View, Image, TouchableOpacity, Modal, Button, TextInput } from "react-native"
import FooterChat from "../components/FooterChat"
import { colors } from "../styles/styles"
import { Avatar } from "react-native-paper"
import ChangeBackgroundImageProfileModal from "../Modal/ChangeBackgroundImageProfileChat"
import { useState } from "react"
import { useEffect } from "react"


const ProfileMessage = () => {

    const [backgroundImageVisible, setBackgroundImageVisible] = useState(false)
    const [profileImageVisible, setProfileImageVisible] = useState(false)
    const [nameVisible, setNameVisible] = useState(false)
    const [descriptionVisible, setDescriptionVisible] = useState(false)
    const [locPhoneNumberVisible, setLocPhoneNumberVisible] = useState(false)
    const [googleMapVisible, setMapVisible] = useState(false)
    const [googleMapCloseAlertVisible, setGoogleMapCloseAlertVisible] = useState(false)

    const showBacgroundImage = () => setBackgroundImageVisible(true)
    const hideBackgroundImage = () => setBackgroundImageVisible(false)

    const showProfileImage = () => setProfileImageVisible(true)
    const hideProfileImage = () => setProfileImageVisible(false)

    const showName = () => setNameVisible(true)
    const hideName = () => setNameVisible(false)

    const showDedscription = () => setDescriptionVisible(true)
    const hideDescription = () => setDescriptionVisible(false)

    const showLocPhoneNumber = () => setLocPhoneNumberVisible(true)
    const hideLocPhoneNumber = () => setLocPhoneNumberVisible(false)

    const showGoogleMap = () => setMapVisible(true)
    const hideGoogleMap = () => setMapVisible(false)

    const showAlertGoogleMap = () => setGoogleMapCloseAlertVisible(true)
    const hideAlertGoogleMap = () => {
        setGoogleMapCloseAlertVisible(false)

    }

    const hideAlertAndGoogleMapUi = () => {
        setGoogleMapCloseAlertVisible(false)
        setMapVisible(false)
    }



    return (
        // <View
        //     style={{
        //         width: "100%",
        //         height: "100%"
        //     }}
        // >
        //     <View
        //         style={{

        //         }}
        //     >

        //     </View>


        // </View>
        <View
            style={{
                width: "100%",
                height: "100%",
                zIndex: 0,
                flexDirection: "column"
            }}
        >
            <View
                style={{
                    width: "100%",
                    height: 300,
                    zIndex: 10,
                    flex: 2
                }}
            >

                <Image
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                    source={{ uri: "https://wallpapers.com/images/high/japanese-hd-tokyo-alley-restaurant-se5a5cim2g3gbe0z.webp" }}
                />
                <TouchableOpacity
                    onPress={() => showBacgroundImage()}
                    style={{
                        position: "absolute",
                        width: 40,
                        height: 40,
                        backgroundColor: colors.color1,
                        borderRadius: 40,
                        bottom: 20,
                        right: 20
                    }}
                >
                    <Avatar.Icon
                        style={{
                            backgroundColor: colors.transparentCustom
                        }}
                        size={40}
                        color={colors.color2}
                        icon={"pencil"}
                    />
                </TouchableOpacity>
            </View>
            <View
                style={{
                    flex: 2,
                    flexDirection: "column",
                    zIndex: 20,
                    justifyContent: "flex-start",
                    width: "100%",
                    height: 80,
                    backgroundColor: colors.color2
                }}
            >
                <TouchableOpacity
                    onPress={showProfileImage}
                >
                    <Image
                        style={{
                            width: 150,
                            height: 150,
                            borderRadius: 80,
                            alignContent: "center",
                            alignSelf: "center",
                            marginTop: -80
                        }}
                        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFMY5DbHy5EUB7YfBTKuxIjRa0bIX-8Gxmzg&s" }}
                    />
                    <View
                        style={{
                            position: "absolute",
                            height: 40,
                            width: 40,
                            borderRadius: 30,
                            backgroundColor: colors.color1,
                            left: 220,
                            top: 30
                        }}
                    >
                        <Avatar.Icon
                            style={{
                                backgroundColor: colors.transparentCustom
                            }}
                            size={40}
                            color={colors.color2}
                            icon={"pencil"}
                        />
                    </View>
                </TouchableOpacity>
                <View
                    style={{
                        width: "100%",
                        height: "auto",
                        marginTop: 20
                    }}
                >
                    <Text
                        style={{
                            alignSelf: "center",
                            fontSize: 30,
                            fontWeight: "bold",
                            color: colors.color3
                        }}
                    >Anne Lovely</Text>
                    <TouchableOpacity
                        style={{
                            position: "absolute",
                            left: 280,
                            top: 5
                        }}
                        onPress={showName}
                    >
                        <Avatar.Icon
                            style={{
                                backgroundColor: colors.transparentCustom
                            }}
                            size={40}
                            color={colors.color1}
                            icon={"pencil"}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        width: "100%",
                        height: "auto",
                        marginTop: 10,

                    }}
                >
                    <View
                        style={{
                            paddingHorizontal: 50
                        }}
                    >
                        <Text
                            adjustsFontSizeToFit={true}
                            numberOfLines={3}
                            style={{
                                textAlignVertical: "center",
                                textAlign: "center",
                                fontSize: 18
                            }}
                        >
                            Designer, Cat Lover, Book Worm, Apple Pie Fanatic and Nature Enthusiast
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={{
                            position: "absolute",
                            left: 320,
                            top: 10
                        }}
                        onPress={showDedscription}
                    >
                        <Avatar.Icon
                            style={{
                                backgroundColor: colors.transparentCustom
                            }}
                            size={40}
                            color={colors.color1}
                            icon={"pencil"}
                        />
                    </TouchableOpacity>

                </View>
                <View
                    style={{
                        marginTop: 30,
                        flexDirection: "row",
                        justifyContent: "center"
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-around",
                            alignContent: "center",
                            alignSelf: "center"
                        }}
                    >
                        <Avatar.Icon
                            icon={"google-maps"}
                            size={50}
                            color={colors.color1}
                            style={{
                                backgroundColor: colors.transparentCustom,

                            }}
                        />
                        <Text
                            style={{
                                alignSelf: "center"
                            }}
                        >
                            Hungary
                        </Text>

                    </View>
                    <View style={{
                        width: 30
                    }} />
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-around",
                            alignContent: "center",
                            alignSelf: "center"
                        }}
                    >
                        <Avatar.Icon
                            icon={"phone"}
                            size={50}
                            color={colors.color1}
                            style={{
                                backgroundColor: colors.transparentCustom,

                            }}
                        />
                        <Text
                            style={{
                                alignSelf: "center"
                            }}
                        >
                            081-2992-2992-20
                        </Text>


                    </View>
                    <TouchableOpacity
                        style={{
                            position: "absolute",
                            right: 10
                        }}
                        onPress={showLocPhoneNumber}
                    >
                        <Avatar.Icon
                            style={{
                                backgroundColor: colors.transparentCustom
                            }}
                            size={40}
                            color={colors.color1}
                            icon={"pencil"}
                        />
                    </TouchableOpacity>

                </View>
            </View>

            <View
                style={{
                    width: "100%",
                    height: 100,

                    marginBottom: 80,
                    flexDirection: "row",
                    justifyContent: "space-around"
                }}
            >
                <View
                    style={{
                        flex: 1,
                        backgroundColor: colors.lightMedium,
                        borderTopWidth: 2,
                        borderEndWidth: 2,
                        borderBottomWidth: 2,
                        borderColor: colors.color1,

                    }}
                >
                    <View
                        style={{
                            flexDirection: "column",
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center",
                            height: "100%"
                        }}
                    >
                        <Text
                            style={{
                                textAlign: "center",
                                fontSize: 30,
                                fontWeight: "bold",
                                color: colors.color3
                            }}
                        >
                            9999
                        </Text>
                        <Text
                            style={{
                                textAlign: "center",
                                fontSize: 20
                            }}
                        >
                            Followers
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: colors.lightMedium,
                        borderTopWidth: 2,
                        borderBottomWidth: 2,
                        borderColor: colors.color1
                    }}
                >
                    <View
                        style={{
                            flexDirection: "column",
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center",
                            height: "100%"
                        }}
                    >
                        <Text
                            style={{
                                textAlign: "center",
                                fontSize: 30,
                                fontWeight: "bold",
                                color: colors.color3
                            }}
                        >1999</Text>
                        <Text
                            style={{
                                textAlign: "center",
                                fontSize: 20
                            }}
                        >Following</Text>
                    </View>
                </View>
            </View>

            <FooterChat
                activeRoute="PROFILE-MESSAGE"
            />


            <Modal
                visible={backgroundImageVisible}
                onRequestClose={hideBackgroundImage}
                animationType="fade"
                transparent
            >
                <View
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: colors.modalTransparentBackground,
                        flexDirection: "column",
                        flex: 1,
                        alignContent: "center",
                        justifyContent: "center",
                        alignSelf: "center",
                    }}
                >
                    <View
                        style={{
                            alignContent: "center",
                            justifyContent: "center",
                            alignSelf: "center",
                            width: 300,
                            height: 300,
                            backgroundColor: colors.color2,
                            borderRadius: 30,
                            padding: 10
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                position: "absolute",
                                top: 20,
                                right: 20,
                                height: 30,
                                width: 30,

                                backgroundColor: colors.color1,
                                borderRadius: 30,
                            }}
                            onPress={hideBackgroundImage}
                        >
                            <Avatar.Icon
                                color={colors.color2}
                                icon={"close"}
                                size={30}
                                style={{
                                    backgroundColor: colors.transparentCustom
                                }}
                            />
                        </TouchableOpacity>
                        <View
                            style={{
                                position: "absolute",
                                width: 200,
                                top: 20,
                                left: 50,
                                right: 50,

                            }}
                        >
                            <Text
                                numberOfLines={2}
                                style={{
                                    textAlign: "center",
                                    fontSize: 18,
                                    fontWeight: "bold"
                                }}
                            >Change Background Profile Image</Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "column",
                                width: "100%",
                                height: "100%",
                                justifyContent: "center",
                                alignContent: "center",
                                paddingHorizontal: 30
                            }}
                        >
                            <View style={{
                                height: 30
                            }} />
                            <Button title="Camera" onPress={() => console.log("change On Camera")} />
                            <View
                                style={{
                                    height: 30
                                }}
                            />
                            <Button title="Gallery" onPress={() => console.log("Change On Gallery")} />

                            <View style={{
                                height: 30
                            }}
                            />

                            <View
                                style={{
                                    flexDirection: "row",
                                    width: "100%",
                                    height: "auto",
                                    justifyContent: "space-around"
                                }}
                            >
                                <Button title="CANCLE" onPress={hideBackgroundImage} />
                                <Button color={colors.color1} title="OK" onPress={() => console.log("Update The Image Background Profile Image")} />
                            </View>
                        </View>

                    </View>
                </View>


            </Modal>

            <Modal
                visible={profileImageVisible}
                onRequestClose={hideProfileImage}
                animationType="fade"
                transparent
            >
                <View
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: colors.modalTransparentBackground,
                        flexDirection: "column",
                        flex: 1,
                        alignContent: "center",
                        justifyContent: "center",
                        alignSelf: "center",
                    }}
                >
                    <View
                        style={{
                            alignContent: "center",
                            justifyContent: "center",
                            alignSelf: "center",
                            width: 300,
                            height: 300,
                            backgroundColor: colors.color2,
                            borderRadius: 30,
                            padding: 10
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                position: "absolute",
                                top: 20,
                                right: 20,
                                height: 30,
                                width: 30,

                                backgroundColor: colors.color1,
                                borderRadius: 30,
                            }}
                            onPress={hideProfileImage}
                        >
                            <Avatar.Icon
                                color={colors.color2}
                                icon={"close"}
                                size={30}
                                style={{
                                    backgroundColor: colors.transparentCustom
                                }}
                            />
                        </TouchableOpacity>
                        <View
                            style={{
                                position: "absolute",
                                width: 200,
                                top: 20,
                                left: 50,
                                right: 50,

                            }}
                        >
                            <Text
                                numberOfLines={2}
                                style={{
                                    textAlign: "center",
                                    fontSize: 18,
                                    fontWeight: "bold"
                                }}
                            >Change Profile Image</Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "column",
                                width: "100%",
                                height: "100%",
                                justifyContent: "center",
                                alignContent: "center",
                                paddingHorizontal: 30
                            }}
                        >
                            <View style={{
                                height: 30
                            }} />
                            <Button title="Camera" onPress={() => console.log("change On Camera")} />
                            <View
                                style={{
                                    height: 30
                                }}
                            />
                            <Button title="Gallery" onPress={() => console.log("Change On Gallery")} />

                            <View style={{
                                height: 30
                            }}
                            />

                            <View
                                style={{
                                    flexDirection: "row",
                                    width: "100%",
                                    height: "auto",
                                    justifyContent: "space-around"
                                }}
                            >
                                <Button title="CANCLE" onPress={hideProfileImage} />
                                <Button color={colors.color1} title="OK" onPress={() => console.log("Update The Image Background Profile Image")} />
                            </View>
                        </View>

                    </View>
                </View>


            </Modal>



            <Modal
                visible={nameVisible}
                onRequestClose={hideName}
                animationType="fade"
                transparent
            >
                <View
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: colors.modalTransparentBackground,
                        flex: 1,
                        alignContent: "center",
                        justifyContent: "center",
                        alignSelf: "center",
                    }}
                >
                    <View
                        style={{
                            width: 300,
                            height: 300,
                            backgroundColor: colors.color2,
                            flexDirection: "column",

                            alignContent: "center",
                            justifyContent: "center",
                            alignSelf: "center",
                            borderRadius: 30,
                            paddingHorizontal: 30
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                position: "absolute",
                                width: 30,
                                height: 30,
                                top: 20,
                                right: 20,
                                borderRadius: 30,
                                backgroundColor: colors.color1
                            }}
                            onPress={hideName}
                        >
                            <Avatar.Icon
                                icon={"close"}
                                size={30}
                                color={colors.color2}
                                style={{
                                    backgroundColor: colors.transparentCustom
                                }}
                            />
                        </TouchableOpacity>
                        <View
                            style={{
                                position: "absolute",
                                width: 200,
                                top: 20,
                                left: 50,
                                right: 50,

                            }}
                        >
                            <Text
                                numberOfLines={1}
                                style={{
                                    textAlign: "center",
                                    fontSize: 18,
                                    fontWeight: "bold"
                                }}
                            >Change Name</Text>
                        </View>
                        <TextInput
                            style={{
                                width: "100%",
                                height: 50,
                                borderWidth: 1,
                                paddingHorizontal: 10

                            }}
                            placeholder="Change Name ..."
                        />
                        <View
                            style={{
                                flexDirection: "row",
                                width: "100%",
                                justifyContent: "space-around",
                                alignContent: "center",
                                alignSelf: "center",
                                marginTop: 30
                            }}
                        >
                            <Button title="Cancel" onPress={hideName} />

                            <Button title="Change" onPress={() => console.log("Chnage Name")} />
                        </View>
                    </View>
                </View>


            </Modal>

            <Modal
                visible={descriptionVisible}
                onRequestClose={hideDescription}
                animationType="fade"
                transparent
            >
                <View
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: colors.modalTransparentBackground,
                        flex: 1,
                        alignContent: "center",
                        justifyContent: "center",
                        alignSelf: "center",
                    }}
                >
                    <View
                        style={{
                            width: 300,
                            height: 300,
                            backgroundColor: colors.color2,
                            flexDirection: "column",

                            alignContent: "center",
                            justifyContent: "center",
                            alignSelf: "center",
                            borderRadius: 30,
                            paddingHorizontal: 30
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                position: "absolute",
                                width: 30,
                                height: 30,
                                top: 20,
                                right: 20,
                                borderRadius: 30,
                                backgroundColor: colors.color1
                            }}
                            onPress={hideDescription}
                        >
                            <Avatar.Icon
                                icon={"close"}
                                size={30}
                                color={colors.color2}
                                style={{
                                    backgroundColor: colors.transparentCustom
                                }}
                            />
                        </TouchableOpacity>
                        <View
                            style={{
                                position: "absolute",
                                width: 200,
                                top: 20,
                                left: 50,
                                right: 50,

                            }}
                        >
                            <Text
                                numberOfLines={1}
                                style={{
                                    textAlign: "center",
                                    fontSize: 18,
                                    fontWeight: "bold"
                                }}
                            >Change Description</Text>
                        </View>
                        <TextInput
                            style={{
                                width: "100%",
                                height: 50,
                                borderWidth: 1,
                                paddingHorizontal: 10

                            }}
                            placeholder="Change Name ..."
                        />
                        <View
                            style={{
                                flexDirection: "row",
                                width: "100%",
                                justifyContent: "space-around",
                                alignContent: "center",
                                alignSelf: "center",
                                marginTop: 30
                            }}
                        >
                            <Button title="Cancel" onPress={hideDescription} />

                            <Button title="Change" onPress={() => console.log("Chnage Name")} />
                        </View>
                    </View>
                </View>


            </Modal>

            <Modal
                visible={locPhoneNumberVisible}
                onRequestClose={hideLocPhoneNumber}
                animationType="fade"
                transparent
            >
                <View
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: colors.modalTransparentBackground,
                        flex: 1,
                        alignContent: "center",
                        justifyContent: "center",
                        alignSelf: "center",
                    }}
                >
                    <View
                        style={{
                            width: 300,
                            height: "auto",
                            backgroundColor: colors.color2,
                            flexDirection: "column",

                            alignContent: "center",
                            justifyContent: "center",
                            alignSelf: "center",
                            borderRadius: 30,
                            paddingHorizontal: 30,
                            paddingBottom: 30
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                position: "absolute",
                                width: 30,
                                height: 30,
                                top: 20,
                                right: 20,
                                borderRadius: 30,
                                backgroundColor: colors.color1
                            }}
                            onPress={hideLocPhoneNumber}
                        >
                            <Avatar.Icon
                                icon={"close"}
                                size={30}
                                color={colors.color2}
                                style={{
                                    backgroundColor: colors.transparentCustom
                                }}
                            />
                        </TouchableOpacity>
                        <View style={{
                            height: 30
                        }} />
                        <View
                            style={{
                                position: "absolute",
                                width: 200,
                                top: 20,
                                left: 50,
                                right: 50,

                            }}
                        >
                            <Text
                                numberOfLines={2}
                                style={{
                                    textAlign: "center",
                                    fontSize: 18,
                                    fontWeight: "bold"
                                }}
                            >Change Location and Phone</Text>
                        </View>


                        <View

                            style={{
                                height: 30
                            }} />

                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginTop: 20
                            }}
                        >
                            <Text
                                numberOfLines={1}
                                style={{
                                    textAlign: "left",
                                    width: "80%",
                                    marginBottom: 5,
                                    fontSize: 18,

                                }}
                            >Heaven, shhshsms s sjdhsdgh</Text>
                            <TouchableOpacity
                                onPress={() => console.log("Do Some Thing")}
                            >
                                <Avatar.Icon
                                    icon={"unfold-more-horizontal"}
                                    size={30}
                                    color={colors.color1_light1}
                                    style={{
                                        backgroundColor: colors.transparentCustom
                                    }}
                                />
                            </TouchableOpacity>

                        </View>
                        <Button
                            title="Change Location"
                            onPress={showGoogleMap}
                        />

                        <View
                            style={{
                                height: 30
                            }}
                        />

                        <TextInput
                            style={{
                                width: "100%",
                                height: 50,
                                borderWidth: 1,
                                paddingHorizontal: 10

                            }}
                            placeholder="Change Phone Number  ..."
                        />
                        <View
                            style={{
                                flexDirection: "row",
                                width: "100%",
                                justifyContent: "space-around",
                                alignContent: "center",
                                alignSelf: "center",
                                marginTop: 30
                            }}
                        >
                            <Button title="Cancel" onPress={hideDescription} />

                            <Button title="Change" onPress={() => console.log("Chnage Name")} />
                        </View>
                    </View>
                </View>


            </Modal>

            <Modal
                visible={googleMapVisible}
                onRequestClose={hideGoogleMap}
                animationType="fade"
                transparent
            >

                <View
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: colors.color2,
                        flexDirection: "column",

                        alignContent: "center",
                        justifyContent: "center",
                        alignSelf: "center",

                        paddingHorizontal: 30,
                        paddingBottom: 30
                    }}
                >
                    <TouchableOpacity
                        style={{
                            position: "absolute",
                            width: 30,
                            height: 30,
                            top: 20,
                            right: 20,
                            borderRadius: 30,
                            backgroundColor: colors.color1
                        }}
                        onPress={hideGoogleMap}
                    >
                        <Avatar.Icon
                            icon={"close"}
                            size={30}
                            color={colors.color2}
                            style={{
                                backgroundColor: colors.transparentCustom
                            }}
                        />
                    </TouchableOpacity>
                    <View style={{
                        height: 30
                    }} />
                    <View
                        style={{
                            position: "absolute",
                            width: "100%",
                            top: 20,
                            height: 30,
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center"
                        }}
                    >
                        <Text
                            numberOfLines={2}
                            style={{
                                textAlign: "center",
                                fontSize: 18,
                                fontWeight: "bold",
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center"
                            }}
                        >GoogleMaps</Text>
                    </View>

                    <View
                        style={{
                            position: "absolute",
                            bottom: 30,
                            left: 30,
                            right: 30,
                            flexDirection: "row",
                            height: 80,
                            width: "100%",
                            justifyContent: "space-around",

                        }}
                    >
                        <TouchableOpacity
                            onPress={showAlertGoogleMap}
                            style={{
                                flex: 1,
                                paddingHorizontal: 10,
                                paddingVertical: 10
                            }}
                        >
                            <View
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: 30,
                                    backgroundColor: colors.color1,
                                    justifyContent: "center",
                                    alignSelf: "center",
                                    alignContent: "center"
                                }}
                            >
                                <Text
                                    style={{
                                        color: colors.color2,
                                        fontSize: 18,
                                        justifyContent: "center",
                                        alignSelf: "center",
                                        alignContent: "center",
                                        fontWeight: "bold"
                                    }}
                                >CANCEL</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={hideGoogleMap}
                            style={{
                                flex: 1,
                                paddingVertical: 10,
                                paddingHorizontal: 10
                            }}

                        >
                            <View
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: 30,
                                    backgroundColor: colors.color3,
                                    justifyContent: "center",
                                    alignSelf: "center",
                                    alignContent: "center",
                                }}
                            >
                                <Text
                                    style={{
                                        color: colors.color2,
                                        fontSize: 18,
                                        justifyContent: "center",
                                        alignSelf: "center",
                                        alignContent: "center",
                                        fontWeight: "bold"
                                    }}
                                >OK</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>


            <Modal
                visible={googleMapCloseAlertVisible}
                onRequestClose={hideAlertGoogleMap}
                animationType="fade"
                transparent
            >

                <View
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: colors.modalTransparentBackground,
                        justifyContent: "center",
                        alignContent: "center",
                        alignSelf: "center"
                    }}
                >
                    <View
                        style={{
                            width: 300,
                            height: 300,
                            backgroundColor: colors.color2,
                            flexDirection: "column",

                            alignContent: "center",
                            justifyContent: "center",
                            alignSelf: "center",

                            paddingHorizontal: 30,
                            paddingBottom: 30,
                            borderRadius: 30,


                        }}
                    >
                        <View
                            style={{
                                position: "absolute",
                                width: "100%",
                                height: 80,
                                justifyContent: "center",
                                alignContent: "center",
                                alignSelf: "center",
                                top: 20
                            }}
                        >
                            <Text
                                numberOfLines={2}
                                style={{
                                    textAlign: "center",
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center",
                                    color: colors.color3,
                                    fontSize: 24,
                                    fontWeight: "bold"
                                }}
                            >Are You Sure Want to Leave ??</Text>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                width: "100%",
                                height: 80,
                                marginTop: 80,
                                justifyContent: "center",
                                alignSelf: "center",
                                alignContent: "center"
                            }}
                        >
                            <TouchableOpacity
                                onPress={hideAlertGoogleMap}
                                style={{
                                    flex: 1,
                                    height: "100%",
                                    borderRadius: 30,
                                    backgroundColor: colors.color1,
                                    marginHorizontal: 5,
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center"
                                }}
                            >
                                <Text
                                    style={{
                                        color: colors.color2,
                                        justifyContent: "center",
                                        alignContent: "center",
                                        alignSelf: "center"
                                    }}
                                >CANCEL</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={hideAlertAndGoogleMapUi}
                                style={{
                                    flex: 1,
                                    height: "100%",
                                    borderRadius: 30,
                                    backgroundColor: colors.color3,
                                    marginHorizontal: 5,

                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center"
                                }}
                            >
                                <Text
                                    style={{
                                        color: colors.color2,
                                        justifyContent: "center",
                                        alignContent: "center",
                                        alignSelf: "center"
                                    }}
                                >YES</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>







        </View >

    )

}

export default ProfileMessage