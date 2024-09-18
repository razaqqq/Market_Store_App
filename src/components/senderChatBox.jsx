import { Image, View } from "react-native"
import ChatBubble from "react-native-chat-bubble"
import { colors } from "../styles/styles"




const SenderChatBox = ({
    image,
    message,

    sender
}) => {
    return (
        <View
            style={{
                width: "100%",
                height: 100,
                flexDirection: "row",
                justifyContent: "flex-start",
                paddingVertical: 5,
                paddingHorizontal: 5,

            }}
        >
            <Image
                style={{
                    height: 80,
                    width: 80,
                    borderRadius: 80,
                    marginRight: 10
                }}
                source={{
                    uri: image
                }}
            />
            <ChatBubble
                isOwnMessage={true}
                bubbleColor={colors.color7}
                tailColor={colors.color7}
                withTail={true}
                onPress={() => console.log("Sender Buble Pressed")}
            >
                {
                    message === undefined ? (<View></View>) : (
                        <Text>{message}</Text>
                    )
                }
            </ChatBubble>
        </View>

    )
}

export default SenderChatBox