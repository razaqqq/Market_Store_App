import Main from './Main';
import {Provider}  from "react-redux"
import { store } from './redux/store';
import {StripeProvider} from '@stripe/stripe-react-native'

const stripeKey = "pk_test_51OYnJRGJemxzZT0TLOSrtXbSOC5bFzKemUReCXc1sTDPXimrR99BgaIV67jyGXCNbO2RY3T2GfPlZ2uBnUcF1iMB00Jx8SrgIj"
const merchantIdentifier = "anjay-gggg"


export default function App() {
  return (
   <StripeProvider
    merchantIdentifier={merchantIdentifier}
    publishableKey={stripeKey}
    threeDSecureParams={{ 
      backgroundColor: "#fff",
      timeout: 5
    }}
   >
      <Provider store={store}>
        <Main/>
      </Provider>
   </StripeProvider>
  );
}

