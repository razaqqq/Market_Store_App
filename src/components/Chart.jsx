import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { PieChart } from 'react-native-chart-kit'
import { colors } from '../styles/styles'

const screenWidth = Dimensions.get("screen").width - 30 - 35

const Chart = ({ inStock = 0, outStock = 0 }) => {

    const chartConfig = {
        color: (opacity = 1) => `rgba(26,255,146,${opacity})`,
    }

    const data = [
        {
            name: "Out Of Stock",
            population: outStock,
            color: colors.color1_light1,
            legendFontColor: colors.color2,
        },
        {
            name: "In Of Stock",
            population: inStock,
            color: colors.color1_light2,
            legendFontColor: colors.color2
        },
    ]


    return (
        <View>
            <PieChart
                data={data}
                width={screenWidth}
                height={150}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={colors.color3}
                paddingLeft={"15"}
                center={[-10, -10]}

                style={{
                    paddingTop: 20,
                    borderRadius: 10,

                }}
                absolute
            />
        </View>
    )
}

export default Chart