import { ScrollView, Text, View } from "react-native"
import FooterChat from "../components/FooterChat"
import { Avatar } from "react-native-paper"
import { colors } from "../styles/styles"
import JoinedTopic from "../components/JoinedTpic"
import RecommendTopic from "../components/RecommendToic"





const Topic = () => {

    const joinedTopicData = [
        {
            "name": "Climate Change",
            "topic_sum": 40,
            "image": "hasdhjgashdghsjad"
        },
        {
            "name": "Climate Change",
            "topic_sum": 40,
            "image": "hasdhjgashdghsjad"
        },
        {
            "name": "Climate Change",
            "topic_sum": 40,
            "image": "hasdhjgashdghsjad"
        },
        {
            "name": "Climate Change",
            "topic_sum": 40,
            "image": "hasdhjgashdghsjad"
        },
        {
            "name": "Climate Change",
            "topic_sum": 40,
            "image": "hasdhjgashdghsjad"
        },
        {
            "name": "Climate Change",
            "topic_sum": 40,
            "image": "hasdhjgashdghsjad"
        },
        {
            "name": "Climate Change",
            "topic_sum": 40,
            "image": "hasdhjgashdghsjad"
        },
        {
            "name": "Climate Change",
            "topic_sum": 40,
            "image": "hasdhjgashdghsjad"
        },
        {
            "name": "Climate Change",
            "topic_sum": 40,
            "image": "hasdhjgashdghsjad"
        },
    ]

    const recommendTopicData = [
        {
            "name": "asdkjhasjkdhkjsad",
            "participants": 30,
            "image": "askdjsahdghsagdhsgahdj"
        },
        {
            "name": "asdkjhasjkdhkjsad",
            "participants": 30,
            "image": "askdjsahdghsagdhsgahdj"
        },
        {
            "name": "asdkjhasjkdhkjsad",
            "participants": 30,
            "image": "askdjsahdghsagdhsgahdj"
        },
        {
            "name": "asdkjhasjkdhkjsad",
            "participants": 30,
            "image": "askdjsahdghsagdhsgahdj"
        },
        {
            "name": "asdkjhasjkdhkjsad",
            "participants": 30,
            "image": "askdjsahdghsagdhsgahdj"
        },
        {
            "name": "asdkjhasjkdhkjsad",
            "participants": 30,
            "image": "askdjsahdghsagdhsgahdj"
        },
        {
            "name": "asdkjhasjkdhkjsad",
            "participants": 30,
            "image": "askdjsahdghsagdhsgahdj"
        },
        {
            "name": "asdkjhasjkdhkjsad",
            "participants": 30,
            "image": "askdjsahdghsagdhsgahdj"
        },
        {
            "name": "asdkjhasjkdhkjsad",
            "participants": 30,
            "image": "askdjsahdghsagdhsgahdj"
        },
    ]

    return (
        <View
            style={{
                width: "100%",
                height: "100%"
            }}
        >

            <View
                style={{
                    flex: 1,
                    flexDirection: "column"
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        height: 80,
                        borderTopStartRadius: 40,
                        borderBottomStartRadius: 40,
                        borderTopEndRadius: 40,
                        borderEndEndRadius: 40,
                        backgroundColor: colors.color1_light1
                    }}
                >
                    <Avatar.Icon
                        size={50}
                        icon={"magnify"}
                        color={colors.color2}
                        style={{
                            marginRight: 10,

                        }}
                    />
                    <View>
                        <Text
                            style={{
                                color: colors.color2
                            }}
                        >Search</Text>
                    </View>
                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "column",
                        height: 150
                    }}
                >
                    <View
                        style={{
                            flex: "row"
                        }}
                    >
                        <Text
                            style={{
                                color: colors.color1,
                                fontWeight: "bold",
                                fontSize: 24,
                                justifyContent: "flex-start"
                            }}
                        >Joined Topics</Text>
                    </View>
                    <ScrollView
                        horizontal={true}
                    >
                        {
                            joinedTopicData.map((joindedTopic, index) => (
                                <JoinedTopic
                                    name={joindedTopic.name}
                                    image={joindedTopic.image}
                                    message_sum={joindedTopic.topic_sum}
                                />
                            ))
                        }
                    </ScrollView>
                    <View></View>
                </View>
                <View
                    style={{
                        flexDirection: "column"
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "flex-start"
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 25,
                                color: colors.color1,
                                fontWeight: "bold"
                            }}
                        >
                            Recommended For You
                        </Text>
                    </View>
                    <ScrollView
                        horizontal={false}
                    >
                        {
                            recommendTopicData.map((recoomedTopic, index) => (
                                <RecommendTopic
                                    image={recoomedTopic.image}
                                    name={recoomedTopic.name}
                                    participants={recoomedTopic.participants}
                                />
                            ))
                        }
                    </ScrollView>
                </View>
            </View>

            <FooterChat activeRoute="TOPIC" />
        </View>
    )
}
export default Topic