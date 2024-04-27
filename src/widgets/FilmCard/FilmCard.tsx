import React from 'react';
import styles from '../../app/styles/FilmCard.module.css'
import {Link} from "react-router-dom";

interface FilmCardProps{
    id: number
    name: string,
    poster: string
    rating: any,
    realise: string
}

const FilmCard = ({id, name, poster, rating, realise}: FilmCardProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <Link to={`/films/${id}`}>
                    <img src={poster} alt={"poster"}/>
                </Link>
            </div>
            <span>{rating.toFixed(1)}</span>
            <h2>{name}</h2>
            <p>{realise}</p>
        </div>
    );
};

export default FilmCard;