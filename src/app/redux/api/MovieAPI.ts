import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {token} from "../../token";

const BASE_URL = "https://api.kinopoisk.dev/v1.4/movie"

export interface MovieTitle{
    name: string,
    movieLength: any,
    genres: any,
    releaseYears: any
}

export const MovieAPI = createApi({
    reducerPath: "movieAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers) => {
            headers.set("X-API-KEY", token);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getMovieById: builder.query<MovieTitle, number>({query: (id)=> `/${id}` }),
        // getTopFilms: builder.query(<)
    })
})

export const {useGetMovieByIdQuery} = MovieAPI