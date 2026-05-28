import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {BASE_URL} from "../constants/api"
export const arcadeItemsApiSlice = createApi({
    reducerPath: 'arcadeItemsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL + "/arcadeItems",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include"
    }),
    tagTypes: ["arcadeItems"],
    endpoints: (build) => ({
        getAllArcadeItems: build.query({
            query: () => "/",
            providesTags: ["arcadeItems"]
        }),
    })
})
export const {useGetAllArcadeItemsQuery} = arcadeItemsApiSlice