import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {BASE_URL} from "../constants/api"
export const drinkCategoriesApiSlice = createApi({
    reducerPath: 'drinkCategoriesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL + "/drinkCategories",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include"
    }),
    tagTypes: ["drinkCategories"],
    endpoints: (build) => ({
        getAllDrinkCategories: build.query({
            query: () => "/",
            providesTags: ["drinkCategories"]
        }),
    })
})
export const {useGetAllDrinkCategoriesQuery} = drinkCategoriesApiSlice