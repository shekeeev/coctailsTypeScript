import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../Store/Hooks/Hooks';
import { NavLink, useSearchParams } from 'react-router-dom';
import { fetchByDetailCoctails } from '../../../Store/detailSlice';

const Coctail: FC = () => {

    const dispath = useAppDispatch()
    const [searchParams] = useSearchParams()
    const [query] = useState(searchParams.get('c'))

    useEffect(() => {
        query && dispath(fetchByDetailCoctails(query))
    }, [dispath, query])

    const { detail, error, loading } = useAppSelector(state => state.details)
    if (loading) {
        return <h1>loading</h1>
    }


    const rebderIngr = () => {
        const arr = []
        for (let key in detail) {
            if (key.includes('strIngredient') && detail[key] !== null) {
                arr.push(detail[key])
            }
        }
        return arr
    }

    return (
        <div>


            <>
                <img width={200} src={detail?.strDrinkThumb} alt="" />
                <h2>{detail?.strDrink}</h2>
                <h5>тип:{detail?.strAlcoholic}</h5>
                {/* <h3>категория:{detail.strCategory}</h3> */}
                <h4>инструкция:{detail?.strInstructions}</h4>
                <ol>
                    {
                        rebderIngr().length > 0 &&
                        rebderIngr().map((el, i) => (
                            <NavLink key={i} to={`/ingredient/${el}`}><li key={i}>{el}</li></NavLink>
                        ))
                    }
                </ol>

            </>


        </div>
    );
};

export default Coctail;