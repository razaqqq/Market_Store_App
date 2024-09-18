import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { colors, defaultStyle, formHeading } from '../../styles/styles'
import Header from '../../components/Header'
import { orders } from '../Orders'
import { useGetOrders, useMessageAndErrorFromOther } from '../../utils/hooks'
import { useIsFocused } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { processOrder } from '../../../redux/actions/otherAction'
import Loader from '../../components/Loader'
import { Headline } from 'react-native-paper'
import OrdersItem from '../OrdersItem'

const AdminOrders = (navigation) => {

    const isFocused = useIsFocused()
    const dispatch = useDispatch()

    console.log("Admin Orders Page LOGG")

    const { loading, orders } = useGetOrders(isFocused, true)

    console.log("Admin Order Logging laoding and order")
    console.log(loading)
    console.log(orders)

    const processingOrderLoading = useMessageAndErrorFromOther(dispatch, navigation, "ADMIN-PANEL")

    const updateHandler = (id) => {
        dispatch(processOrder(id))
    }



    return (
        <View style={{
            ...defaultStyle,
            backgroundColor: colors.color5
        }}>

            <Header back={true} />


            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                { /* Heading */}
                <View
                    style={{ marginBottom: 20, marginTop: 20 }}
                >
                    <Text style={formHeading}>Admin Orders</Text>
                </View>
                { /* Heading */}

                {
                    loading ? (
                        <Loader />
                    ) : (

                        <View
                            style={{

                                flex: 1
                            }}
                        >
                            {
                                orders?.length > 0 ?
                                    orders.map((product, index) => (
                                        <OrdersItem
                                            key={product._id}
                                            _id={product._id}
                                            index={index}
                                            price={product.totalAmount}
                                            address={`${product.shippingInfo.address}, ${product.shippingInfo.city}, ${product.shippingInfo.country} ${product.shippingInfo.pinCode}`}
                                            orderedOn={product.createdAt.split("T")[0]}
                                            paymentMethod={product.paymentMethod}
                                            status={product.orderStatus}
                                            admin={true}
                                            updateHandler={updateHandler}
                                            loading={processingOrderLoading}
                                        />
                                    )) :
                                    <Headline style={{
                                        textAlign: 'center',
                                    }}>No Orders Yet</Headline>
                            }

                        </View>

                    )
                }
            </ScrollView>
        </View>
    )
}



export default AdminOrders