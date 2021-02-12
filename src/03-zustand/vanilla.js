import React, { useEffect, useState } from 'react';
import create from 'zustand';
import useHighlight from '../lib/useHighlight';

const store = create((set) => ({
  count: 0,
  tick: 0,
  incCount: () => set((s) => ({ count: s.count + 1 })),
  incTick: () => set((s) => ({ tick: s.tick + 1 })),
}));

const App = () => {
  useHighlight(html);

  useEffect(() => {
    document
      .getElementById('incCounter')
      .addEventListener('click', function () {
        store.getState().incCount();
        document.getElementById('counter').innerText = store.getState().count;
      });

    document.getElementById('incTicker').addEventListener('click', function () {
      store.getState().incTick();
      document.getElementById('ticker').innerText = store.getState().tick;
    });
  }, []);
  return (
    <div>
      <h1 id='counter'>0</h1>
      <h1 id='ticker'>0</h1>
      <button id='incCounter'>count</button>
      <button id='incTicker'>tick</button>
    </div>
  );
};

export default App;

const html = `import React, { useEffect, useState } from 'react';
import create from 'zustand';

const store = create((set) => ({
  count: 0,
  tick: 0,
  incCount: () => set((s) => ({ count: s.count + 1 })),
  incTick: () => set((s) => ({ tick: s.tick + 1 })),
}));

const App = () => {
  useEffect(() => {
    document
      .getElementById('incCounter')
      .addEventListener('click', function () {
        store.getState().incCount();
        document.getElementById('counter').innerText = store.getState().count;
      });

    document.getElementById('incTicker').addEventListener('click', function () {
      store.getState().incTick();
      document.getElementById('ticker').innerText = store.getState().tick;
    });
  }, []);
  return (
    <div>
      <h1 id='counter'>0</h1>
      <h1 id='ticker'>0</h1>
      <button id='incCounter'>count</button>
      <button id='incTicker'>tick</button>
    </div>
  );
};
`;
