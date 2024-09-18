import { View, Text } from 'react-native'
import React from 'react'

const Heading = ({ Text1 = "Our", Text2 = "Products", containerStyle }) => {
    return (
        <View style={containerStyle}>
            <Text style={{ fontSize: 25 }}>{Text1}</Text>
            <Text style={{ fontSize: 25, fontWeight: '900' }}>{Text2}</Text>
        </View>
    )
}

export default Heading