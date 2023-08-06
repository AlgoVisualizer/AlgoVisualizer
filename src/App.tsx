import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import GraphVisualizer from './GraphVisulizer';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';

const App: React.FC<{}> = (): ReactElement => {

  return (
    <>
      <Routes>
        <Route path="/" element = {<HomePage/>}/>
        <Route path='/graph' element = {<GraphVisualizer/>}/>
        <Route path='/sorting' element = {<SortingVisualizer/>}/>
      </Routes>
    </>
  );
};

export default App;
