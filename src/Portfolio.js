import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Introd from './Components/Introduction/Introd';

const Portfolio = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Navbar} />
        <Route />
      </Switch>
      <Introd />
    </div>
  );
};

export default Portfolio;
