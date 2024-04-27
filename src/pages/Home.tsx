import React from 'react';
import Header from "../widgets/Header/Header";
import styles from '../../src/app/styles/Home.module.css'
import {data} from "../app/services/service";
import {store} from "../app/redux/store";
import FilmCard from "../widgets/FilmCard/FilmCard";

const Home = () => {

    return (
        <div>
            <Header/>
            <h1 className={styles.title}>
                Лучшие фильмы
            </h1>
            <div className={styles.container}>
                {data.map((el) => {
                    return (
                        <FilmCard
                            id={el.id}
                            key={el.id}
                            name={el.name}
                            poster={el.poster.url}
                            rating={el.rating.kp}
                            realise={el.premiere.world}/>
                    )
                })}
            </div>
        </div>
    );
};

export default Home;