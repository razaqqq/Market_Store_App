import { useState } from "react"
import { Modal, TouchableOpacity, View } from "react-native"
import { colors } from "../styles/styles"






const ChangeBackgroundImageProfileModal = () => {
    const [visible, setVisible] = useState(false)
    const hide = () => setVisible(false)
    const show = () => setVisible(true)
    console.log("change Background Image")
    return (

        <View
            style={{
                width: 150,
                height: 150,
                backgroundColor: colors.color1,
                borderRadius: 30,
                zIndex: 99,
                position: "absolute",
                left: 100,
                right: 100
            }}
        >
            <Modal
                visible={visible}
                onRequestClose={hide}
                animationType="fade"
            >
                <TouchableOpacity
                    onPress={hide}
                    style={{

                    }}
                >
                    <Text>Hide</Text>
                </TouchableOpacity>
            </Modal>
        </View>

    )

}

export default ChangeBackgroundImageProfileModal