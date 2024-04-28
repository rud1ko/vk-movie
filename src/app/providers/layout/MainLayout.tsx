import React, {FunctionComponent, ReactNode} from 'react';
import styles from '../../styles/MainLayout.module.css'
import Header from "../../../widgets/Header/Header";

const MainLayout = ({children}: {children: ReactNode}) => {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
};

export const withMainLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withMainLayoutComponent(props: T): JSX.Element{
        return (
            <MainLayout>
                <Component {...props}/>
            </MainLayout>
        )
    }
}