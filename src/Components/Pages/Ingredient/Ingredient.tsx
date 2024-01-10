import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../Store/Hooks/Hooks';
import { useParams, useSearchParams } from 'react-router-dom';
import { fetchByDetailIngredient } from '../../../Store/detailSlice';

const Ingredient: FC = () => {


    const { detail, loading } = useAppSelector(state => state.details)

    const dispath = useAppDispatch()
    const { name } = useParams()
    useEffect(() => {
        name && dispath(fetchByDetailIngredient(name))
    }, [name, dispath])
    // console.log(name);
    if (loading) {
        return <h1>LOading</h1>
    }



    return (
        <div>
            <img src={`https://www.thecocktaildb.com/images/ingredients/${name}.png`} alt={name} />
            <h1>{detail?.strIngredient}</h1>
            <p>{detail?.strDescription ? detail.strDescription : 'No description Broooo'}</p>
        </div>
    );
};

export default Ingredient;