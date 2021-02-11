import React, { useEffect } from 'react';
import { proxy, useProxy } from 'valtio';

const state = proxy({
  count: 0,
  nested: { ticks: 0 },
});
const useSnapshot = () => useProxy(state);

function Counter() {
  const snapshot = useSnapshot();
  useEffect(() => {
    console.log('render Counter');
  });
  return <h1>{snapshot.count}</h1>;
}

function Controls() {
  const incCounter = () => {
    state.count++;
  };
  const incTicks = () => {
    state.nested.ticks++;
  };
  useEffect(() => {
    console.log('render Controls');
  });
  return (
    <div>
      <button onClick={incCounter}>count</button>
      <button onClick={incTicks}>tick</button>
    </div>
  );
}

function Ticks() {
  const snapshot = useSnapshot();
  useEffect(() => {
    console.log('render Ticks');
  });
  return <h1>{snapshot.nested.ticks}</h1>;
}

export default function App() {
  return (
    <>
      <Counter />
      <Ticks />
      <Controls />
    </>
  );
}
