import { View, Text, TouchableOpacity, Dimensions } from "react-native"

import { colors } from "../styles/styles"
import { Avatar } from "react-native-paper"
import { useNavigation } from "@react-navigation/native"

const OtherFeatureComponent = ({
    text,
    icon,
    index,
    width
}) => {



    return (
        <TouchableOpacity
            onPress={() => console.log(`${text} ${index} anjayyy`)}
        >
            <View
                style={{
                    width: width * 80 / 100,
                    height: 50,
                    marginBottom: 10,

                    backgroundColor: colors.color1,
                    borderRadius: 80,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: 30,
                    alignContent: "center",
                    alignSelf: "center",
                }}
            >
                <Avatar.Icon
                    size={50}
                    style={{
                        backgroundColor: colors.transparentCustom,
                        justifyContent: "center",
                        alignContent: "center",
                        alignSelf: "center"
                    }}
                    color={colors.color2}
                    icon={icon}
                />
                <Text
                    style={{
                        textAlign: "center",
                        justifyContent: "center",
                        alignContent: "center",
                        alignSelf: "center",
                        fontSize: 18,
                        color: colors.color2,
                        fontWeight: "bold"
                    }}
                >
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )

}


const OtherFeatures = () => {

    const width = Dimensions.get("window").width

    const navigate = useNavigation()

    const otherFeaturesArray = [
        {
            "text": "Short Video",
            "icon": "video",
        },
        {
            "text": "Games",
            "icon": "gamepad"
        },
        {
            "text": "Help",
            "icon": "help"
        },
        {
            "text": "Call Center",
            "icon": "phone-in-talk"
        },
        {
            "text": "Sign Out",
            "icon": "exit-to-app"
        },
    ]

    return (

        <View
            style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignContent: "center",
                alignSelf: "center"
            }}
        >

            <View
                style={{
                    width: "100%",
                    height: "100%",
                    flexDirection: "column"
                }}
            >
                <View
                    style={{
                        width: "100%",
                        height: 50,
                        justifyContent: "center",
                        alignContent: "center",
                        alignSelf: "center",
                        backgroundColor: colors.color1,
                        elevation: 10,
                        zIndex: 0
                    }}
                >
                    <TouchableOpacity
                        style={{
                            position: "absolute",
                            left: 10,
                    
                            height: "100%",
                            width: 80,
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center"
                        }}
                        onPress={
                            () => navigate.goBack()
                        }
                    >
                        <View>
                            <Avatar.Icon
                                icon={"step-backward"}
                                style={{
                                    backgroundColor: colors.transparentCustom,
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignSelf: "center"
                                }}
                                size={50}
                                color={colors.color2}
                            />
                        </View>
                    </TouchableOpacity>
                    <Text
                        style={{
                            justifyContent: "center",
                            alignContent: "center",
                            alignSelf: "center",
                 
                            fontWeight: "bold",
                            textAlign: "center",
                            color: colors.color2,
                            fontSize: 20

                        }}
                    >Other Features</Text>
                </View>
                <View
                    style={{
                        width: "auto",
                        height: "auto",
                        marginTop: 30,
                        flexDirection: "column"
                    }}
                >
                    <View
                        style={{
                            width: width,
                            height: 30,
                            justifyContent: "flex-start",
                            alignContent: "center",
                            alignSelf: "center",

                        }}
                    >
                        <Text
                            style={{
                                alignText: "left",
                                fontWeight: "bold",
                                color: colors.color3,
                                fontSize: 16,
                                fontStyle: "italic",
                                textAlign: "left",
                                alignItems: "flex-end",
                                marginHorizontal: 40
                            }}
                        >
                            General
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "column"
                        }}
                    >
                        {
                            otherFeaturesArray.map((item, index) => (
                                <OtherFeatureComponent
                                    width={width}
                                    icon={item.icon}
                                    index={index}
                                    text={item.text}
                                />
                            ))
                        }
                    </View>
                </View>
            </View>
        </View>

    )

}

export default OtherFeatures