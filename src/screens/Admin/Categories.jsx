import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle, formHeading, inputOptions } from '../../styles/styles'
import Header from '../../components/Header'
import CategoryCard from '../../components/CategoryCard'
import { Button, TextInput } from 'react-native-paper'
import { useMessageAndErrorFromOther, useSetCategories } from "../../utils/hooks"
import { useIsFocused } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { addCategory, deleteCategory } from '../../../redux/actions/otherAction'



const loading = false


const Categories = ({ navigation }) => {


    console.log("Categories Page LOGG")

    const [category, setCategory] = useState("")
    const [categories, setCategories] = useState([])

    const isFocused = useIsFocused()

    console.log(isFocused)

    const dispatch = useDispatch()

    console.log(dispatch)

    useSetCategories(setCategories, isFocused)

    console.log(useSetCategories)


    const loading = useMessageAndErrorFromOther(dispatch, navigation, "ADMIN-PANEL")

    console.log(loading)

    const deleteHandler = (categoryId) => {
        console.log("delete Handler FUnction is Called")
        console.log("logging categoryId var")
        console.log(categoryId)
        dispatch(deleteCategory(categoryId))
    }

    const submitHandler = () => {
        console.log("submit Handler Function is Called")
        console.log("logging category var")


        try {
            console.log("Categories Trying logging category Value")
            console.log(category)

        }
        catch (error) {
            console.log("There Some Thing WIth Category")
            console.log(console.error())
        }
        dispatch(addCategory(category))

    }



    return (
        <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
            <Header back={true} />
            <ScrollView style={{

            }}
                showsVerticalScrollIndicator={false}
            >
                <View style={{ marginBottom: 20, marginTop: 20 }}>
                    <Text style={formHeading}>Categories</Text>
                </View>

                <View style={{
                    backgroundColor: colors.color2,
                    padding: 20,
                    minHeight: 400,
                }}>
                    {
                        categories.map(categoryItem => (
                            <CategoryCard
                                name={categoryItem.category}
                                id={categoryItem._id}
                                deleteHandler={deleteHandler} />
                        ))
                    }
                </View>


                <View style={StyleSheet.container}>
                    <TextInput
                        style={{ ...inputOptions }}
                        placeholder='Category'
                        value={category}
                        onChangeText={setCategory} />
                </View>
                <Button
                    textColor={colors.color2}
                    style={{
                        backgroundColor: colors.color1,
                        margin: 20,
                        padding: 6
                    }}
                    disabled={!category}
                    onPress={submitHandler}
                    loading={loading}
                >
                    Add
                </Button>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        elevation: 10,
        borderRadius: 10,
        backgroundColor: colors.color3
    }
})

export default Categories