import { View, Text, StyleSheet, Touchable, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Avatar, Headline } from 'react-native-paper'
import { colors } from '../styles/styles'

const SelectComponent = ({
    visible,
    setVisible,
    setCategory,
    setCategoryID,
    categories = []
}) => {

    const selectCategoryHandler = (category) => {
        setCategory(category.category)
        setCategoryID(category._id)
        setVisible(false)
    }

    return (
        visible && (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => setVisible(false)}>
                    <Avatar.Icon size={30} style={{
                        alignSelf: "flex-end",
                        backgroundColor: colors.color1
                    }} icon={"close"} />
                </TouchableOpacity>
                <Headline
                    style={styles.heading}
                >
                    Select Category
                </Headline>
                <ScrollView>
                    {
                        categories.map(category => (
                            <Text
                                key={category._id}
                                onPress={() => selectCategoryHandler(category)}
                                style={styles.text}
                            >
                                {category.category}
                            </Text>
                        ))
                    }
                </ScrollView>
            </View>
        )
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.color2,
        position: "absolute",
        padding: 35,
        borderRadius: 20,
        width: "90%",
        height: "90%",
        alignSelf: "center",
        elevation: 5,
        top: 50
    },
    heading: {
        textAlign: "center",
        marginVertical: 10,
        backgroundColor: colors.color3,
        borderRadius: 5,
        padding: 3,
        color: colors.color2,
    },
    text: {
        fontSize: 17,
        fontWeight: "100",
        textTransform: "uppercase",
        marginVertical: 10
    }
})

export default SelectComponent