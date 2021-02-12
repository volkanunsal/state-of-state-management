import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Flux from './01-flux';
import FluxUnderrender from './01-flux/under-render';
import ReduxHoC from './02-redux/hoc';
import ReduxHooks from './02-redux/hooks';
import ReduxVanilla from './02-redux/vanilla';
import Zustand from './03-zustand';
import ZustandVanilla from './03-zustand/vanilla';
import Valtio from './04-valtio/react';
import ValtioVanilla from './04-valtio/vanilla';
import ValtioAdvanced from './04-valtio/advanced';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to='/01-flux'>Flux</Link>
      </li>
      <li>
        <Link to='/01-flux/under-render'>Flux / Under-render</Link>
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
        <Link to='/03-zustand'>Zustand / React</Link>
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
        <Route exact path='/01-flux'>
          <Flux />
        </Route>
        <Route exact path='/01-flux/under-render'>
          <FluxUnderrender />
        </Route>
        <Route exact path='/02-redux/hoc'>
          <ReduxHoC />
        </Route>
        <Route exact path='/02-redux/hooks'>
          <ReduxHooks />
        </Route>
        <Route exact path='/02-redux/vanilla'>
          <ReduxVanilla />
        </Route>
        <Route exact path='/03-zustand'>
          <Zustand />
        </Route>
        <Route exact path='/03-zustand/vanilla'>
          <ZustandVanilla />
        </Route>
        <Route exact path='/04-valtio'>
          <Valtio />
        </Route>
        <Route exact path='/04-valtio/vanilla'>
          <ValtioVanilla />
        </Route>
        <Route exact path='/04-valtio/advanced'>
          <ValtioAdvanced />
        </Route>
        <Route exact path='/'>
          <Navigation />
        </Route>
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(router, document.getElementById('root'));
