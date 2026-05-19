import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../constants/api";

export const circuitsApiSlice = createApi({
    reducerPath: 'circuitsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL + "/circuits",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        credentials: "include"
    }),
    tagTypes: ["circuits"],
    endpoints: (build) => ({
        getAllCircuits: build.query({
            method: 'GET',
            query: () => "/",
            providesTags: ["circuits"]
        }),
    })
})

export const {useGetAllCircuitsQuery} = circuitsApiSlice