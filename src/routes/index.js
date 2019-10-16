import React from 'react';
import { useSelector } from 'react-redux';

import createRouter from './createRouter';

export default () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const Routes = createRouter(isAuthenticated);
  return <Routes />;
};
