import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {BASE_URL} from "../constants/api"
export const foodItemsApiSlice = createApi({
    reducerPath: 'foodItemsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL + "/foodItems",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include"
    }),
    tagTypes: ["foodItems"],
    endpoints: (build) => ({
        getAllFoodItems: build.query({
            query: () => "/",
            providesTags: ["foodItems"]
        }),
    })
})
export const {useGetAllFoodItemsQuery} = foodItemsApiSlice