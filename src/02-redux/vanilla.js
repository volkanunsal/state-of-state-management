import React, { useEffect } from 'react';
import { createStore } from 'redux';

function render() {
  document.getElementById('counter').innerText = store.getState().count;
  document.getElementById('ticker').innerText = store.getState().tick;
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'INC':
      return { ...state, count: state.count + 1 };
    case 'TICK':
      return { ...state, tick: state.tick + 1 };
    default:
      break;
  }
  return state;
};

const store = createStore(reducer, { tick: 0, count: 0 });

const App = () => {
  useEffect(() => {
    store.subscribe(render);
    document
      .getElementById('incCounter')
      .addEventListener('click', function () {
        store.dispatch({ type: 'INC' });
      });

    document.getElementById('incTicker').addEventListener('click', function () {
      store.dispatch({ type: 'TICK' });
    });
  }, []);
  return (
    <div>
      <div id='counter'>0</div>
      <div id='ticker'>0</div>
      <button id='incCounter'>count</button>
      <button id='incTicker'>tick</button>
    </div>
  );
};

export default App;
