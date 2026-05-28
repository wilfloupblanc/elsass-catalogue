import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {BASE_URL} from "../constants/api"
export const drinkItemsApiSlice = createApi({
    reducerPath: 'drinkItemsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL + "/drinkItems",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include"
    }),
    tagTypes: ["drinkItems"],
    endpoints: (build) => ({
        getAllDrinkItems: build.query({
            query: () => "/",
            providesTags: ["drinkItems"]
        }),
    })
})
export const {useGetAllDrinkItemsQuery} = drinkItemsApiSlice