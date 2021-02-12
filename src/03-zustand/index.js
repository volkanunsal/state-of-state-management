import React, { useEffect } from 'react';
import create from 'zustand';
import useHighlight from '../lib/useHighlight';

const useStore = create((set) => ({
  count: 0,
  tick: 0,
  incCount: () => set((s) => ({ count: s.count + 1 })),
  incTick: () => set((s) => ({ tick: s.tick + 1 })),
}));

function Controls() {
  const incCount = useStore((s) => s.incCount);
  const incTick = useStore((s) => s.incTick);
  useEffect(() => {
    console.log('render Controls');
  });
  return (
    <>
      <button onClick={incCount}>count</button>
      <button onClick={incTick}>tick</button>
    </>
  );
}

function Counter() {
  const count = useStore((s) => s.count);
  useEffect(() => {
    console.log('render Counter');
  });
  return <h1>{count}</h1>;
}

function Ticker() {
  const tick = useStore((s) => s.tick);
  useEffect(() => {
    console.log('render Ticker');
  });
  return <h1>{tick}</h1>;
}

const App = () => {
  useHighlight(html);

  return (
    <>
      <Counter />
      <Ticker />
      <Controls />
    </>
  );
};

export default App;

const html = `import React, { useEffect } from 'react';
import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  tick: 0,
  incCount: () => set((s) => ({ count: s.count + 1 })),
  incTick: () => set((s) => ({ tick: s.tick + 1 })),
}));

function Controls() {
  const incCount = useStore((s) => s.incCount);
  const incTick = useStore((s) => s.incTick);
  useEffect(() => {
    console.log('render Controls');
  });
  return (
    <>
      <button onClick={incCount}>count</button>
      <button onClick={incTick}>tick</button>
    </>
  );
}

function Counter() {
  const count = useStore((s) => s.count);
  useEffect(() => {
    console.log('render Counter');
  });
  return <h1>{count}</h1>;
}

function Ticker() {
  const tick = useStore((s) => s.tick);
  useEffect(() => {
    console.log('render Ticker');
  });
  return <h1>{tick}</h1>;
}

const App = () => {
  return (
    <>
      <Counter />
      <Ticker />
      <Controls />
    </>
  );
};`;
