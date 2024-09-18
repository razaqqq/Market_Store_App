import React, { useEffect } from 'react'
import { NavigationContainer, StackActions } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from './src/screens/Home'
import ProductDetails from './src/screens/ProductDetails'
import Login from './src/screens/Login'
import Toast from "react-native-toast-message"
import Cart from './src/screens/Cart'
import ConfirmOrder from './src/screens/ConfirmOrder'
import Payment from './src/screens/Payment'
import ForgetPassword from './src/screens/ForgetPassword'
import Verivy from './src/screens/Verivy'
import SignUp from './src/screens/SignUp'
import Profile from './src/screens/Profile'
import UpdateProfile from './src/screens/UpdateProfile'
import ChangePassword from './src/screens/ChangePassword'
import Orders from './src/screens/Orders'
import AdminPanel from './src/screens/Admin/AdminPanel'
import Categories from './src/screens/Admin/Categories'
import AdminOrders from './src/screens/Admin/AdminOrders'
import UpdateProduct from './src/screens/Admin/UpdateProduct'
import NewProduct from './src/screens/Admin/NewProduct'
import ProductImages from './src/screens/Admin/ProductImages'

import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from './redux/actions/userActions'
import SeeAllProduct from './src/screens/SeeAllProduct'
import ChatPage from './src/screens/ChatPage'
import ChatDashboard from './src/screens/ChatDashboard'
import ShortVideo from './src/screens/ShortVideo'
import ContactList from './src/screens/ContactList'
import Topic from './src/screens/Topic'
import AddShortVideo from './src/screens/AddShortVideo'
import ProfileShortVideo from './src/screens/ProfileShortVideo'
import SearchShortVideo from './src/screens/SearchShortVideo'
import ProfileMessage from './src/screens/ProfileChat'
import ChatProfileNotUser from './src/screens/ChatProfileNotUser'
import CameraComponent from './src/screens/Admin/Camera'
import ShopDetails from './src/screens/ShopDetails'
import OtherFeatures from './src/screens/OtherFeatures'
import ShopDetailNonUser from './src/screens/ShopDetailsNonUser'




const Main = () => {

    const Stack = createNativeStackNavigator()

    const dispatch = useDispatch()

    const { user } = useSelector(state => state.user)

    console.log(user)

    useEffect(() => {
        dispatch(loadUser())
    }, [dispatch])

    return (
        <NavigationContainer

        >
            <Stack.Navigator
                initialRouteName='HOME'

            >
                <Stack.Group >
                    <Stack.Screen name="HOME" component={Home} options={{ headerShown: false }} />
                    <Stack.Screen name="PRODUCT-DETAILS" component={ProductDetails} options={{ headerShown: false }} />
                    <Stack.Screen name="CART" component={Cart} options={{ headerShown: false }} />
                    <Stack.Screen name="CONFIRM-ORDER" component={ConfirmOrder} options={{ headerShown: false }} />
                    <Stack.Screen name="PAYMENT" component={Payment} options={{ headerShown: false }} />
                    <Stack.Screen name="FORGET-PASSWORD" component={ForgetPassword} options={{ headerShown: false }} />
                    <Stack.Screen name="LOGIN" component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name="PROFILE" component={Profile} options={{ headerShown: false }} />
                    <Stack.Screen name='VERIVY' component={Verivy} options={{ headerShown: false }} />
                    <Stack.Screen name="UPDATE-PROFILE" component={UpdateProfile} options={{ headerShown: false }} />
                    <Stack.Screen name="CHANGE-PASSWORD" component={ChangePassword} options={{ headerShown: false }} />
                    <Stack.Screen name="ORDERS" component={Orders} options={{ headerShown: false }} />
                    <Stack.Screen name="SIGN-UP" component={SignUp} options={{ headerShown: false }} />
                    <Stack.Screen name="SEE-ALL-PRODUCT" component={SeeAllProduct} options={{ headerShown: false }} />
                    <Stack.Screen name="CHAT-DASBOARD" component={ChatDashboard} options={{ headerShown: false }} />
                    <Stack.Screen name="CHAT" component={ChatPage} options={{ headerShown: false }} />
                    <Stack.Screen name="VIDEO-SHORT" component={ShortVideo} options={{ headerShown: false }} />
                    <Stack.Screen name="CONTACT-LIST" component={ContactList} options={{ headerShown: false }} />
                    <Stack.Screen name="TOPIC" component={Topic} options={{ headerShown: false }} />
                    <Stack.Screen name="ADD-VIDEO-SHORT" component={AddShortVideo} options={{ headerShown: false }} />
                    <Stack.Screen name="PROFILE-SHORT-VIDEO" component={ProfileShortVideo} options={{ headerShown: false }} />
                    <Stack.Screen name="SEARCH-SHORT-VIDEO" component={SearchShortVideo} options={{ headerShown: false }} />
                    <Stack.Screen name="PROFILE-MESSAGE" component={ProfileMessage} options={{ headerShown: false }} />
                    <Stack.Screen name="CHAT-PROFILE-NOT-USER" component={ChatProfileNotUser} options={{ headerShown: false }} />
                    <Stack.Screen name="SHOP-DETAILS" component={ShopDetails} options={{ headerShown: false }} />
                    <Stack.Screen name="OTHER-FEATURES" component={OtherFeatures} options={{ headerShown: false }} />
                    <Stack.Screen name="SHOPE-DETAILS-NON-USER" component={ShopDetailNonUser} options={{ headerShown: false }} />

                    {/* ADMIN ROUTES */}
                    <Stack.Screen name="ADMIN-PANEL" component={AdminPanel} options={{ headerShown: false }} />
                    <Stack.Screen name="CATEGORIES" component={Categories} options={{ headerShown: false }} />
                    <Stack.Screen name="ADMIN-ORDERS" component={AdminOrders} options={{ headerShown: false }} />
                    <Stack.Screen name="UPDATE-PRODUCT" component={UpdateProduct} options={{ headerShown: false }} />
                    <Stack.Screen name="NEW-PRODUCT" component={NewProduct} options={{ headerShown: false }} />
                    <Stack.Screen name="PRODUCT-IMAGES" component={ProductImages} options={{ headerShown: false }} />
                    <Stack.Screen name="CAMERA" component={CameraComponent} options={{ headerShown: false }} />
                    {/* PRODUCT IMAGE REMAINING */}


                </Stack.Group>
            </Stack.Navigator>

            <Toast position='top' topOffset={50} />

        </NavigationContainer>
    )
}

export default Main