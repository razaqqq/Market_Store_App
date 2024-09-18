import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { colors, defaultStyle, formHeading } from '../styles/styles'

import Loader from '../components/Loader'
import { Headline } from 'react-native-paper'
import OrdersItem from './OrdersItem'
import { useGetOrders } from '../utils/hooks'
import { useIsFocused } from '@react-navigation/native'
import Header from '../components/Header'


const Orders = () => {

    console.log("Orders Page Logg")

    console.log("Logging Params")

    const isFocused = useIsFocused()
    const { loading, orders } = useGetOrders(isFocused)


    console.log(`Orders Page loading = ${loading}`)
    console.log(`Orders Page Orders = ${orders}`)
    console.log(orders)

    return (
        <View style={{
            ...defaultStyle,
            backgroundColor: colors.color5
        }}>
            <Header back={true} />
            {
                loading ? <Loader /> : (

                    <View style={{
                        flex: 1,
                    }}>

                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            style={{
                                marginTop: 20
                            }}
                        >
                            <View style={{ marginBottom: 20 }}>
                                <Text style={formHeading}>My Orders</Text>
                            </View>
                            {
                                orders.length > 0 ?
                                    (

                                        orders.map((product, index) => (
                                            <OrdersItem
                                                key={product._id}
                                                _id={product._id}
                                                index={index}
                                                price={product.totalAmount}
                                                status={product.orderStatus}
                                                paymentMethod={product.paymentMethods}
                                                orderedOn={product.createdAt.split("T")[0]}
                                                address={`${product.shippingInfo.address}, ${product.shippingInfo.city}, ${product.shippingInfo.country} ${product.shippingInfo.pincode}`}

                                            />
                                        ))
                                    ) :
                                    <Headline style={{
                                        textAlign: 'center'
                                    }}>No Orders Yet</Headline>
                            }
                        </ScrollView>
                    </View>
                )
            }


        </View>
    )
}

export default Orders