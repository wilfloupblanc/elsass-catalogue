import {configureStore} from "@reduxjs/toolkit"
import {vehiclesApiSlice} from "./vehiclesApiSlice"
import {circuitsApiSlice} from "./circuitsApiSlice"
import {categoriesApiSlice} from "./categoriesApiSlice"
import {foodCategoriesApiSlice} from "./foodCategoriesApiSlice"
import {foodItemsApiSlice} from "./foodItemsApiSlice"
import {drinkCategoriesApiSlice} from "./drinkCategoriesApiSlice"
import {drinkItemsApiSlice} from "./drinkItemsApiSlice"
import {arcadeItemsApiSlice} from "./arcadeItemsApiSlice"

const store = configureStore({
    reducer: {
        [vehiclesApiSlice.reducerPath]: vehiclesApiSlice.reducer,
        [circuitsApiSlice.reducerPath]: circuitsApiSlice.reducer,
        [categoriesApiSlice.reducerPath]: categoriesApiSlice.reducer,
        [foodCategoriesApiSlice.reducerPath]: foodCategoriesApiSlice.reducer,
        [foodItemsApiSlice.reducerPath]: foodItemsApiSlice.reducer,
        [drinkCategoriesApiSlice.reducerPath]: drinkCategoriesApiSlice.reducer,
        [drinkItemsApiSlice.reducerPath]: drinkItemsApiSlice.reducer,
        [arcadeItemsApiSlice.reducerPath]: arcadeItemsApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(vehiclesApiSlice.middleware)
            .concat(circuitsApiSlice.middleware)
            .concat(categoriesApiSlice.middleware)
            .concat(foodCategoriesApiSlice.middleware)
            .concat(foodItemsApiSlice.middleware)
            .concat(drinkCategoriesApiSlice.middleware)
            .concat(drinkItemsApiSlice.middleware)
            .concat(arcadeItemsApiSlice.middleware),
})

export default store