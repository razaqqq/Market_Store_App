import { SafeAreaView, Text, View } from "react-native"
import Header from "../components/Header"




const AddShortVideo = () => {

    return (
        <View
            style={{
                width: "100%",
                height: "100%",
                paddingTop: 30
            }}
        >
            <Header back={true} />
            <Text>Add Short Video</Text>
        </View>
    )

}

export default AddShortVideo