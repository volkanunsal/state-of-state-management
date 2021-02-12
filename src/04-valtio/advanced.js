import React from 'react';
import { useProxy } from 'valtio';
import { proxyWithComputed } from 'valtio/utils';

const state = proxyWithComputed(
  { firstName: 'Alec', lastName: 'Baldwin' },
  {
    fullName: {
      get: (snap) => [snap.firstName, snap.lastName].filter(Boolean).join(' '),
      set: (state, newValue) => {
        [state.firstName, state.lastName] = newValue.split(' ');
      },
    },
  },
);

const App = () => {
  const snap = useProxy(state);
  return (
    <div>
      <input
        type='text'
        value={snap.fullName}
        onChange={(e) => {
          state.fullName = e.target.value;
        }}
      />
    </div>
  );
};

export default App;
