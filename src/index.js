import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Flux from './01-flux';
import ReduxHoC from './02-redux/hoc';
import ReduxHooks from './02-redux/hooks';
import ReduxVanilla from './02-redux/vanilla';
import Zustand from './03-zustand';
import Valtio from './04-valtio/react';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to='/01-flux'>Flux</Link>
      </li>
      <li>
        <Link to='/02-redux/hoc'>Redux / React / HoC</Link>
      </li>
      <li>
        <Link to='/02-redux/hooks'>Redux / React / Hooks</Link>
      </li>
      <li>
        <Link to='/02-redux/vanilla'>Redux / Vanilla</Link>
      </li>
      <li>
        <Link to='/03-zustand/react'>Zustand / React</Link>
      </li>
      <li>
        <Link to='/03-zustand/vanilla'>Zustand / Vanilla</Link>
      </li>
      <li>
        <Link to='/04-valtio/react'>Valtio / React</Link>
      </li>
      <li>
        <Link to='/04-valtio/vanilla'>Valtio / Vanilla</Link>
      </li>
    </ul>
  </nav>
);

const router = (
  <Router>
    <div>
      <Switch>
        <Route path='/01-flux'>
          <Flux />
        </Route>
        <Route path='/02-redux/hoc'>
          <ReduxHoC />
        </Route>
        <Route path='/02-redux/hooks'>
          <ReduxHooks />
        </Route>
        <Route path='/02-redux/vanilla'>
          <ReduxVanilla />
        </Route>
        <Route path='/03-zustand'>
          <Zustand />
        </Route>
        <Route path='/04-valtio'>
          <Valtio />
        </Route>
        <Route path='/'>
          <Navigation />
        </Route>
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(router, document.getElementById('root'));
