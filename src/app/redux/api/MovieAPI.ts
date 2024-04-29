import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {token} from "../../token";
import {MovieCard} from "../../types/MovieCard";
import {TopFilms} from "../../types/TopFilms";

const BASE_URL = "https://api.kinopoisk.dev/v1.4/movie"

export const MovieAPI = createApi({
    reducerPath: "movieAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers) => {
            headers.set("X-API-KEY", token);
            headers.set("accept", "application/json")
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getMovieById: builder.query<MovieCard, number>({query: (id)=> `/${id}` }),
        getTopFilms: builder.query<TopFilms, void>({query: () => "?page=1&limit=10&selectFields=id&selectFields=name&selectFields=description&selectFields=rating&selectFields=movieLength&selectFields=genres&selectFields=poster&selectFields=premiere&selectFields=similarMovies&notNullFields=id&notNullFields=name&notNullFields=description&notNullFields=rating.kp&notNullFields=movieLength&notNullFields=genres.name&notNullFields=poster.url&notNullFields=premiere.world&notNullFields=similarMovies.name&notNullFields=similarMovies.poster.url&notNullFields=similarMovies.rating.kp&sortField=rating.kp&sortType=-1"})
    })
})

export const {useGetMovieByIdQuery, useGetTopFilmsQuery} = MovieAPI