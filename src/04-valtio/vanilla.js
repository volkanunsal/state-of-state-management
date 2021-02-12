import React from 'react';
import { proxy, subscribe, snapshot } from 'valtio';

const state = proxy({ count: 0 });

subscribe(state, () => {
  const obj = snapshot(state);
  const v = document.querySelector('#counter');
  if (!v) return;
  v.innerText = obj.count;
});

const App = () => (
  <div>
    <h1 id='counter'>0</h1>
    <button
      onClick={() => {
        state.count += 1;
      }}>
      increment
    </button>
  </div>
);

export default App;
