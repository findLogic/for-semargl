import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage from '../Pages/MainPage/MainPage';
import Layout from '../../hoc/Layout';
import LoginPage from '../Pages/LoginPage/LoginPage';
import NewsPage from '../Pages/NewsPage/NewsPage';
import ProfilePage from '../Pages/ProfilePage/ProfilePage';
import './App.scss';

const App = () => {
  const routes = (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/news" exact component={NewsPage} />
      <Route path="/profile" exact component={ProfilePage} />

      <Redirect to="/" />
    </Switch>
  );

  return <Layout>{routes}</Layout>;
};

export default App;
