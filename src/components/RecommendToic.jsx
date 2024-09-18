import { TouchableOpacity, Dimensions, View, Image, Text } from "react-native"
import { colors } from "../styles/styles"
import { Avatar } from "react-native-paper"




const RecommendTopic = ({
    name,
    participants,
    image,
    index
}) => {

    const width = Dimensions.get("window").width
    const height = Dimensions.get("window").height

    return (
        <TouchableOpacity>
            <View
                style={{
                    elevation: 10,
                    width: width,
                    height: height * 1 / 6,
                    borderTopLeftRadius: 10,
                    borderBottomStartRadius: 10,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                }}
            >
                <Image style={{
                    width: "100%",
                    height: "100%",
                    zIndex: 10,
                }} source={{ uri: image }} />
                <View
                    style={{
                        position: "absolute",
                        flexDirection: "row",
                        width: "80%",
                        height: "80%",
                        top: 30,
                        zIndex: 20,
                        justifyContent: "space-between"
                    }}
                >
                    <View
                        style={{
                            flexDirection: "column",
                            justifyContent: "center"
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 25,
                                color: colors.color2,
                                fontWeight: "bold"
                            }}
                        >
                            {name}
                        </Text>
                        <Text
                            style={{
                                fontSize: 18,
                                color: colors.color7,
                                fontWeight: "500"
                            }}
                        >
                            {participants} participants
                        </Text>
                    </View>
                    <View
                        style={{
                            backgroundColor: 'transparent',
                            borderTopStartRadius: 10,
                            borderBottomStartRadius: 10,
                            borderTopEndRadius: 10,
                            borderBottomEndRadius: 10,
                            borderColor: colors.color2,
                            borderWidth: 5
                        }}
                    >
                        <Avatar.Icon
                            size={25}
                            icon={"forward"}
                            color={colors.color2}
                        />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RecommendTopic