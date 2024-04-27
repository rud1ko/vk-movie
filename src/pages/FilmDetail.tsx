import React, {JSX, useState} from 'react';
import {useParams} from "react-router-dom";
import {useGetMovieByIdQuery} from "../app/redux/api/MovieAPI";


const FilmDetail = (): JSX.Element => {
    const param = useParams()
    const {data, isError, isLoading} = useGetMovieByIdQuery(Number(param.id))

    console.log(param)

    return (
        <div>
            {data && data.name}
        </div>
    );
};

export default FilmDetail;