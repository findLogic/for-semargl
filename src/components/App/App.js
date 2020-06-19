import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage from '../Pages/MainPage/MainPage';
import Layout from '../../hoc/Layout';
// import './App.scss';

const App = () => {
  const routes = (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Redirect to="/" />
    </Switch>
  );

  return <Layout>{routes}</Layout>;
};

export default App;
