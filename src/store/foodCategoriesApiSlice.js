import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {BASE_URL} from "../constants/api"
export const foodCategoriesApiSlice = createApi({
    reducerPath: 'foodCategoriesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL + "/foodCategories",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include"
    }),
    tagTypes: ["foodCategories"],
    endpoints: (build) => ({
        getAllFoodCategories: build.query({
            query: () => "/",
            providesTags: ["foodCategories"]
        }),
    })
})
export const {useGetAllFoodCategoriesQuery} = foodCategoriesApiSlice