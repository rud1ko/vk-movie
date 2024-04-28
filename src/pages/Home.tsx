import React, {useEffect, useRef, useState} from 'react';
import Header from "../widgets/Header/Header";
import styles from '../../src/app/styles/Home.module.css'
import {data} from "../app/services/service";
import {store} from "../app/redux/store";
import FilmCard from "../widgets/FilmCard/FilmCard";
import {Splide, SplideProps, SplideSlide, SplideTrack} from "@splidejs/react-splide";
import '@splidejs/react-splide/css'
import '@splidejs/splide/dist/css/splide.min.css'
import cn from 'classnames'
import {withMainLayout} from "../app/providers/layout/MainLayout";

const Home = () => {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Лучшие фильмы
            </h1>
            <Splide hasTrack={false} className={styles.slider} options={{
                rewind: true,
                autoplay: true,
                interval: 5000,
                pauseOnHover: true,
                classes: {
                    pagination: styles.pagination,
                    page: styles.page,
                    active: styles.active
                },
                perPage: 1,
                pagination: true,
                paginationDirection: "ltr",
                focus: 0,
            }}>
                <SplideTrack>
                    {data.map((el) => {
                        return (
                            <SplideSlide className={styles.wrapper}>
                                <FilmCard
                                    id={el.id}
                                    key={el.id}
                                    name={el.name}
                                    poster={el.poster.previewUrl}
                                    rating={el.rating.kp}
                                    realise={el.premiere.world}/>
                            </SplideSlide>
                        )
                    })}
                </SplideTrack>
            </Splide>

        </div>
    );
};

export default withMainLayout(Home);

