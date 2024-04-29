import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {token} from "../../token";

const BASE_URL = "https://api.kinopoisk.dev/v1.4/movie"

export interface MovieCard{
    id: number
    name: string,
    poster: any,
    rating: any,
    premiere: any,
    description: string,
    movieLength: number,
    genres: any[],
    similarMovies: any[]
}

export interface TopFilms{
    docs: MovieCard[]
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
        getMovieById: builder.query<MovieCard, number>({query: (id)=> `/${id}` }),
        getTopFilms: builder.query<TopFilms, void>({query: () => "?page=1&limit=10&selectFields=id&selectFields=name&selectFields=rating&selectFields=poster&selectFields=premiere&notNullFields=id&notNullFields=name&notNullFields=rating.kp&notNullFields=poster.url&notNullFields=premiere.world&sortField=rating.kp&sortType=-1"})
    })
})

export const {useGetMovieByIdQuery, useGetTopFilmsQuery} = MovieAPI