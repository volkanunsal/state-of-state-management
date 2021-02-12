import React from 'react';
import { proxy, subscribe, snapshot } from 'valtio';
import useHighlight from '../lib/useHighlight';

const state = proxy({ count: 0, nested: { tick: 0 } });

subscribe(state, () => {
  const obj = snapshot(state);
  console.log('render Counter');
  document.querySelector('#counter').innerText = obj.count;
});

subscribe(state.nested, () => {
  const obj = snapshot(state);
  console.log('render Ticker');
  document.querySelector('#ticker').innerText = obj.nested.tick;
});

const App = () => {
  useHighlight(html);

  return (
    <div>
      <h1 id='counter'>0</h1>
      <h1 id='ticker'>0</h1>
      <button
        onClick={() => {
          state.count += 1;
        }}>
        increment count
      </button>
      <button
        onClick={() => {
          state.nested.tick += 1;
        }}>
        increment tick
      </button>
    </div>
  );
};

export default App;

const html = `import React from 'react';
import { proxy, subscribe, snapshot } from 'valtio';

const state = proxy({ count: 0, nested: { tick: 0 } });

subscribe(state, () => {
  const obj = snapshot(state);
  console.log('render Counter');
  document.querySelector('#counter').innerText = obj.count;
});

subscribe(state.nested, () => {
  const obj = snapshot(state);
  console.log('render Ticker');
  document.querySelector('#ticker').innerText = obj.nested.tick;
});

const App = () => (
  <div>
    <h1 id='counter'>0</h1>
    <h1 id='ticker'>0</h1>
    <button
      onClick={() => {
        state.count += 1;
      }}>
      increment count
    </button>
    <button
      onClick={() => {
        state.nested.tick += 1;
      }}>
      increment tick
    </button>
  </div>
);

export default App;`;
