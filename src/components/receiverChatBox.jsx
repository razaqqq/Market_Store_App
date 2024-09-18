import { View, Image } from "react-native"
import { colors } from "../styles/styles"
import ChatBubble from "react-native-chat-bubble"
import { Text } from "react-native-svg"





const ReceiverChatBox = ({
    message,
    image,
    audio,
    sender
}) => {
    return (
        <View
            style={{
                width: "100%",
                height: 100,
                flexDirection: "row",
                justifyContent: "flex-end",
                paddingVertical: 5,
                paddingHorizontal: 5
            }}
        >
            <ChatBubble
                isOwnMessage={false}
                bubbleColor={colors.color1}
                tailColor={colors.color1}
                withTail={true}
            >
                {
                    message === undefined ? (
                        <View></View>
                    ) :
                        (
                            <Text>{message}</Text>
                        )
                }
            </ChatBubble>

            <Image
                style={{
                    height: 80,
                    width: 80,
                    borderRadius: 80,
                    marginLeft: 10
                }}
                source={{
                    uri: image
                }}
            />
        </View>
    )
}

export default ReceiverChatBox