import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../constants/api";

export const vehiclesApiSlice = createApi({
    reducerPath: 'vehiclesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL + "/vehicles",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        credentials: "include"
    }),
    tagTypes: ["vehicles"],
    endpoints: (build) => ({
        getAllVehicles: build.query({
            method: 'GET',
            query: () => "/",
            providesTags: ["vehicles"]
        }),
    })
})

export const {useGetAllVehiclesQuery} = vehiclesApiSlice