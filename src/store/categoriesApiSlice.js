import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../constants/api";

export const categoriesApiSlice = createApi({
    reducerPath: 'categories',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL + "/vehicleCategories",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        credentials: "include"
    }),
    tagTypes: ["categories"],
    endpoints: (build) => ({
        getAllCategories: build.query({
            method: 'GET',
            query: () => "/",
            providesTags: ["categories"]
        }),
    })
})

export const {useGetAllCategoriesQuery} = categoriesApiSlice