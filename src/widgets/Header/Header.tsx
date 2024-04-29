import React from 'react';
import styles from '../../app/styles/Header.module.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to={"/films"}>
                Кино справочник
            </Link>
        </header>
    );
};

export default Header;