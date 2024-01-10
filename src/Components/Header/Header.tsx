import React, { FC, FormEventHandler, useState } from 'react';
import { useAppDispatch } from '../../Store/Hooks/Hooks';
import { fetchByAllCoctails, fetchByName, fetchByNameAlc } from '../../Store/coctailSlice';



const Header: FC = () => {




    const [value, setValue] = useState('')
    const dispath = useAppDispatch()

    const hendallSearch: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        if (value.trim().length) {
            dispath(fetchByName(value))
        }
        setValue('')
    }



    const adi = (value: string) => {
        if (value === 'All') {
            dispath(fetchByAllCoctails())
        } else {
            dispath(fetchByNameAlc(value))
        }

    }







    return (
        <div>
            <form onSubmit={hendallSearch}>
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type="text" placeholder='Coctail Name' />
                <button>Search</button>
            </form>
            <select onChange={(e) => adi(e.target.value)}>
                <option value="All">All</option>
                <option value="Alcoholic">Alcoholick</option>
                <option value="Non_Alcoholic">Non Alcoholick</option>
            </select>

            <button>Мне повезет!</button>
        </div>
    );
};

export default Header;