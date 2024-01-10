import './App.css';
import Main from './Components/Main/Main';
// import React, { useEffect } from 'react';
import 'animate.css'
// import { useAppDispatch } from './Store/Hooks/Hooks';
// import { fetchByNameGlasses } from './Store/detailSlice';
const App = () => {

  // const dispath = useAppDispatch()
  // useEffect(() => {
  //   dispath(fetchByNameGlasses())
  // }, [dispath])

  return (
    <div>
      <Main />
    </div>
  );
};

export default App;
