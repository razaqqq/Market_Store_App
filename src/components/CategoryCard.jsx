

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'
import { Avatar } from 'react-native-paper'

const CategoryCard = ({ name, id, deleteHandler }) => {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.cardText}>{name}</Text>
            <TouchableOpacity
                onPress={() => deleteHandler(id)}
            >
                <Avatar.Icon icon={"delete"} size={30} style={{ backgroundColor: colors.color1 }} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.color2,
        elevation: 5,
        margin: 10,
        padding: 50,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10
    },
    cardText: {
        fontWeight: "600",
        textTransform: "uppercase",
        letterSpacing: 1
    }
})

export default CategoryCard