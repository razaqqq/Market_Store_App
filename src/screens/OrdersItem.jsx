import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'
import { Button } from 'react-native-paper'

const OrdersItem = ({
    _id,
    price,
    address,
    status,
    paymentMethod,
    orderedOn,
    updateHandler,
    admin = false,
    loading,
    index = 0
}) => {

    console.log("OrderItem Component Loggg")

    return (
        <View style={{
            ...styles.container,
            backgroundColor:
                index % 2 === 0 ?
                    colors.color2 : colors.color3
        }}>
            <Text style={{
                ...styles.text,

                backgroundColor: index % 2 === 0 ? colors.color3 : colors.color1
            }}>ID - #{_id}</Text>

            <TextBox title={"Address"} value={address} index={index} />
            <TextBox title={"Ordered ON"} value={orderedOn} index={index} />
            <TextBox title={"Price"} value={price} index={index} />
            <TextBox title={"Status"} value={status} index={index} />
            <TextBox title={"Payment Method"} value={paymentMethod} index={index} />

            {
                admin && (
                    <Button
                        icon={"update"}
                        mode={"contained"}
                        textColor={index % 2 === 0 ? colors.color2 : colors.color3}
                        style={{
                            width: 120,
                            alignSelf: "center",
                            marginTop: 10,
                            backgroundColor: index % 2 === 0 ? colors.color3 : colors.color2
                        }}
                        onPress={() => updateHandler(_id)}
                        loading={loading}
                        disabled={loading}
                    >Update</Button>
                )
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 10,
        marginVertical: 10,
        elevation: 5,

    },
    text: {
        color: colors.color2,
        fontSize: 16,
        fontWeight: "900",
        marginHorizontal: -20,
        marginTop: -20,
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    }
})


const TextBox = ({ title, value, index }) => (
    <Text style={{
        color: index % 2 === 0 ? colors.color3 : colors.color2
    }}>
        <Text style={{
            fontWeight: "900"
        }} >{title} - </Text>
        {title === "Price" ? "$" : ""}
        {value}
    </Text>
)

export default OrdersItem