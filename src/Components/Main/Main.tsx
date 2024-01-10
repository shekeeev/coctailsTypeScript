import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Coctail from '../Pages/Coctail/Coctail';
import Ingredient from '../Pages/Ingredient/Ingredient';

const Main: FC = () => {
    return (
        <div className='App'>
            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/coctail/:id' element={<Coctail />} />
                <Route path='/ingredient/:name' element={<Ingredient />} />

            </Routes>
        </div>
    );
};

export default Main;