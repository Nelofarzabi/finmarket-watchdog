import React from 'react';
import { Outlet } from 'react-router-dom';
import OverView from '../components/OverView';

const Details = () => (
  <div>
    <OverView />
    <Outlet />
  </div>
);

export default Details;
