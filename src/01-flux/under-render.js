import React, { useReducer, useContext, createContext, useEffect } from 'react';
import useHighlight from '../lib/useHighlight';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INC':
      return { ...state, count: state.count + 1 };
    case 'TICK':
      state.tick += 1;
    default:
      break;
  }
  return state;
};
const Context = createContext(null);

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { count: 0, tick: 0 });
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

function Counter() {
  const { state } = useContext(Context);
  useEffect(() => {
    console.log('render Counter');
  });
  return <h1>{state.count}</h1>;
}

function Ticker() {
  const { state } = useContext(Context);
  useEffect(() => {
    console.log('render Ticker');
  });
  return <h1>{state.tick}</h1>;
}

function Controls() {
  const { dispatch } = useContext(Context);
  const inc = () => dispatch({ type: 'INC' });
  const tick = () => dispatch({ type: 'TICK' });
  useEffect(() => {
    console.log('render Controls');
  });
  return (
    <>
      <button onClick={inc}>increment counter</button>
      <button onClick={tick}>increment ticker</button>
    </>
  );
}

const App = () => {
  useHighlight(html);

  return (
    <Provider>
      <Counter />
      <Ticker />
      <Controls />
    </Provider>
  );
};

export default App;

const html = `import React, { useReducer, useContext, createContext, useEffect } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INC':
      return { ...state, count: state.count + 1 };
    case 'TICK':
      state.tick += 1;
    default:
      break;
  }
  return state;
};
const Context = createContext(null);

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { count: 0, tick: 0 });
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

function Counter() {
  const { state } = useContext(Context);
  useEffect(() => {
    console.log('render Counter');
  });
  return <h1>{state.count}</h1>;
}

function Ticker() {
  const { state } = useContext(Context);
  useEffect(() => {
    console.log('render Ticker');
  });
  return <h1>{state.tick}</h1>;
}

function Controls() {
  const { dispatch } = useContext(Context);
  const inc = () => dispatch({ type: 'INC' });
  const tick = () => dispatch({ type: 'TICK' });
  useEffect(() => {
    console.log('render Controls');
  });
  return (
    <>
      <button onClick={inc}>increment counter</button>
      <button onClick={tick}>increment ticker</button>
    </>
  );
}


const App = () => {
  return (
    <Provider>
      <Counter />
      <Ticker />
      <Controls />
    </Provider>
  );
};`;
