import React from 'react';

// Routing
import { Route, Switch } from 'react-router-dom';

// Global styles
import 'normalize.css/normalize.css';
import './styles/vendor/vendor.scss';
import './styles/global.scss';

// Components
import Header from './components/Header/index';
import Home from './pages/Home';
import Band from './pages/Band';
import Music from './pages/Music';
import Tour from './pages/Tour';

// Override styles / Top level styles
import './styles/override/override.scss';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Home {...props} classadd="some" />}
        />
        <Route exact path="/bio" component={Band} />
        <Route exact path="/music" component={Music} />
        <Route exact path="/tour" component={Tour} />
      </Switch>
    </>
  );
};

export default App;
