import React, { FC } from 'react';
import { useAppSelector } from '../../../Store/Hooks/Hooks';
import CoctailCard from '../../CoctailCard/CoctailCard';
import './Output.css'
const Output: FC = ({ }) => {
    const { error, list, loading } = useAppSelector(state => state.coctails)
    return (
        <div className='coctails-wrapper'>
            {
                loading ?
                    <h1>Looading...</h1>
                    : error ?
                        <span className='error animate__backOutUp animate__animated'>{error}</span>
                        :
                        list.length > 0 ?
                            list.map(el => <CoctailCard key={el.idDrink} {...el} />)
                            :
                            <h2> No Broouuuu,No coctails!</h2>
            }
        </div>
    );
};

export default Output;