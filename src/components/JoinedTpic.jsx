import { TouchableOpacity, View, Dimensions, Image, Text } from "react-native"
import { colors } from "../styles/styles"






const JoinedTopic = ({ name, message_sum, image }) => {

    const width = Dimensions.get("window").width

    return (
        <TouchableOpacity>
            <View
                style={{
                    height: "100%",
                    width: width * 1 / 3,
                    elevation: 10
                }}
            >
                <Image
                    style={{
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                        zIndex: 10,
                        width: "100%",
                        height: "100%"
                    }}
                    source={image} />
                <View
                    style={{
                        zIndex: 20,
                        position: "absolute",
                        top: 20,

                    }}
                >
                    <Text
                        style={{
                            fontSize: 25,
                            color: colors.color2,
                            fontWeight: "bold"
                        }}
                    >{name}</Text>
                </View>
                <View
                    style={{
                        position: "absolute",
                        top: -20,
                        right: -20,
                        height: 40,
                        width: 40,
                        borderRadius: 40,
                        justifyContent: "center",
                        alignContent: "center",
                        backgroundColor: colors.color1,
                        zIndex: 30
                    }}
                >
                    <Text>
                        {message_sum}
                    </Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default JoinedTopic