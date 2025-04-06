

import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice"

export const store=configureStore({
    reducer:{

        cartslice :CartReducer,
    }
})