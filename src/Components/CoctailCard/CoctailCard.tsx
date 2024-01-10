import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IDrink } from '../../Store/Modules';

const CoctailCard: FC<IDrink> = ({ idDrink, strDrink, strDrinkThumb }) => {



    return (
        <Link
            to={`/coctail/${strDrink}?c=${idDrink}`}
            className='animate__animated animate__bounceIn'>
            <img width={400} src={strDrinkThumb} alt={strDrinkThumb} />
            <h1>{strDrink}</h1>
        </Link>
    );
};

export default CoctailCard;