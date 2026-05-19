import {configureStore} from "@reduxjs/toolkit";
import {vehiclesApiSlice} from "./vehiclesApiSlice";
import {circuitsApiSlice} from "./circuitsApiSlice";
import {categoriesApiSlice} from "./categoriesApiSlice";

const store = configureStore({
    reducer: {
        [vehiclesApiSlice.reducerPath]: vehiclesApiSlice.reducer,
        [circuitsApiSlice.reducerPath]: circuitsApiSlice.reducer,
        [categoriesApiSlice.reducerPath]: categoriesApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(vehiclesApiSlice.middleware, circuitsApiSlice.middleware, categoriesApiSlice.middleware),
})

export default store