import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Flux from './01-flux';
import ReduxHoC from './02-redux/hoc';
import ReduxHooks from './02-redux/hooks';
import Zustand from './03-zustand';
import Valtio from './04-valtio';

ReactDOM.render(
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/01-flux'>Flux</Link>
          </li>
          <li>
            <Link to='/02-redux/hoc'>Redux - HoC</Link>
          </li>
          <li>
            <Link to='/02-redux/hooks'>Redux - HoC</Link>
          </li>
          <li>
            <Link to='/03-zustand'>Zustand</Link>
          </li>
          <li>
            <Link to='/03-zustand'>Zustand</Link>
          </li>
          <li>
            <Link to='/04-valtio'>Valtio</Link>
          </li>
          <li>
            <Link to='/05-vuex'>Vuex</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path='/00-backbone'></Route>
        <Route path='/01-flux'>
          <Flux />
        </Route>
        <Route path='/02-redux/hoc'>
          <ReduxHoC />
        </Route>
        <Route path='/02-redux/hooks'>
          <ReduxHooks />
        </Route>
        <Route path='/03-zustand'>
          <Zustand />
        </Route>
        <Route path='/04-valtio'>
          <Valtio />
        </Route>
        <Route path='/05-vuex'></Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root'),
);
