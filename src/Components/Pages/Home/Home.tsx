import React, { FC, useEffect } from 'react';
import Header from '../../Header/Header';
import Output from '../Output/Output';
import { useAppDispatch } from '../../../Store/Hooks/Hooks';
import { fetchByAllCoctails } from '../../../Store/coctailSlice';

const Home: FC = () => {

    const dispath = useAppDispatch()

    useEffect(() => {
        dispath(fetchByAllCoctails())

    }, [dispath])


    return (
        <div>
            <>
                <Header />
                <section>
                    <Output />
                </section>
            </>
        </div>
    );
};

export default Home;