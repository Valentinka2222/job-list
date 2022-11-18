import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/layout';
import Details from './components/details/Details';
import { IJobList } from './interfaces';

import './index.scss';

const App = (): ReactElement<IJobList> => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="details/:detailsId" element={<Details />} />
    </Routes>
  );
};

export default App;
