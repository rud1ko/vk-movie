import React, {JSX, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useGetMovieByIdQuery} from "../app/redux/api/MovieAPI";
import styles from '../app/styles/FilmDetail.module.css'
import {film} from "../app/services/film";
import {withMainLayout} from "../app/providers/layout/MainLayout";
import {Splide, SplideSlide, SplideTrack} from "@splidejs/react-splide";
import {data} from "../app/services/service";
import FilmCard from "../widgets/FilmCard/FilmCard";
import '@splidejs/react-splide/css'
import '@splidejs/splide/dist/css/splide.min.css'


const FilmDetail = (): JSX.Element => {
    const param = useParams()
    // const {data, isError, isLoading} = useGetMovieByIdQuery(Number(param.id))

    const[date, setDate] = useState<string>('')

    useEffect(() => {
        const dateArray = film.premiere.world.slice(0, 10).split('-')
        if (dateArray[2].charAt(0) == '0'){
            dateArray[2] = dateArray[2].slice(1, 2)
        }

        const mounth = dateArray[1]

        switch (mounth){
            case '01':
                dateArray[1] = 'января'
                break
            case '02':
                dateArray[1] = 'февраля'
                break
            case '03':
                dateArray[1] = 'марта'
                break
            case '04':
                dateArray[1] = 'апреля'
                break
            case '05':
                dateArray[1] = 'мая'
                break
            case '06':
                dateArray[1] = 'июня'
                break
            case '07':
                dateArray[1] = 'июля'
                break
            case '08':
                dateArray[1] = 'августа'
                break
            case '09':
                dateArray[1] = 'сентября'
                break
            case '10':
                dateArray[1] = 'октября'
                break
            case '11':
                dateArray[1] = 'ноября'
                break
            case '12':
                dateArray[1] = 'декабря'
                break
            default:
                break
        }

        setDate(dateArray.reverse().join(' '))
    }, [])

    console.log(param)

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                {`${film.rating.kp.toFixed(1)} ${film.name}`}
            </h1>
            <div className={styles.content}>
                <div className={styles.info}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            {`Описание: ${film.description}`}
                        </li>
                        <li className={styles.item}>
                            {`Длительность: ${film.movieLength} мин`}
                        </li>
                        <li className={styles.item}>
                            {`Жанры: ${film.genres.map((el) => {
                                return el.name
                            })}`}
                        </li>
                        <li className={styles.item}>
                            {`Дата выхода: ${date}`}
                        </li>
                    </ul>
                    <div className={styles.sliderContainer}>
                        <h1 className={styles.titleSlider}>
                            Похожие фильмы
                        </h1>
                        <Splide hasTrack={false} options={{
                            rewind: true,
                            perPage: 1,
                            pagination: true,
                        }}>
                            <SplideTrack>
                                {film.similarMovies.map((el) => {
                                    return (
                                        <SplideSlide className={styles.wrapper}>
                                            <FilmCard
                                                id={el.id}
                                                key={el.id}
                                                name={el.name}
                                                poster={el.poster.previewUrl}
                                                rating={el.rating.kp}
                                            />
                                        </SplideSlide>
                                    )
                                })}
                            </SplideTrack>
                        </Splide>
                    </div>
                </div>
                <img src={film.poster.url} className={styles.img}/>
            </div>
        </div>
    );
};

export default withMainLayout(FilmDetail);