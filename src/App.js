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

// Override styles / Top level styles
import './styles/override/override.scss';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/bio" component={Band} />
      </Switch>
    </>
  );
};

export default App;
