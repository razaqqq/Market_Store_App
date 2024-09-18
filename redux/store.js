import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { otherReducer } from "./reducers/otherReducer";
import { productReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import { videoReducer } from "./reducers/videoReducer";
import { chatReducer } from "./reducers/chatReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    other: otherReducer,
    product: productReducer,
    cart: cartReducer,
    video: videoReducer,
    chat: chatReducer,
  },
});

// I Will Host My Server After I Check all The
// Error and Upload To Github
// Is There are Another Options That Profide Free Tier
// For Learner Before Usually Everyone Use Heroku,
// but in 2022 For Some Reason They Remove they Service for Free Tier

// Another Solution ???
// 1. Render
// Is There any More Web Hosting That Profide Free Tier ??? for Learner

// export const server = "This is The Url Hosting of Your Server That Before RUn Locally in Your Computer"
// export const server = "http://localhost:6000/api/v1";

export const server = "http://192.168.100.66:5000/api/v1";
