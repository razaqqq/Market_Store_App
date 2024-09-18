import { View, Text } from "react-native"
import Header from "../components/Header"







const ProfileShortVideo = () => {

    return (
        <View
            style={{
                width: "100%",
                height: "100%",
                paddingTop: 30
            }}
        >
            <Header back={true} />
            <Text>Profile Video Short</Text>
        </View>
    )

}


export default ProfileShortVideo