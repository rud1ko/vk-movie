import React, {useEffect, useState} from 'react';
import styles from '../../app/styles/FilmCard.module.css'
import {Link} from "react-router-dom";

interface FilmCardProps{
    id: number
    name: string,
    poster: string
    rating: any,
    realise?: string
}

const FilmCard = ({id, name, poster, rating, realise}: FilmCardProps) => {
    const[date, setDate] = useState<string>('')

    useEffect(() => {
        if (realise){
            const dateArray: string[] = realise?.slice(0, 10)?.split('-')
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
        }

    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <Link to={`/films/${id}`}>
                    <img src={poster} alt={"poster"}/>
                </Link>
            </div>
            <div className={styles.infoFilm}>
                <span className={styles.rating}>{rating?.toFixed(2)}</span>
                <div className={styles.shortDesc}>
                    <h2>{name}</h2>
                    <p>{date}</p>
                </div>
            </div>
        </div>
    );
};

export default FilmCard;