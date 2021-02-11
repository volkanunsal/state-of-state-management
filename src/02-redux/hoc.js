import React, { useEffect } from 'react';
import { connect, Provider, useStore } from 'react-redux';
import { createStore } from 'redux';

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

const mapStateToProps = (state) => {
  return {
    count: state.count,
    tick: state.tick,
  };
};

const Counter = connect(mapStateToProps)((props) => {
  useEffect(() => {
    console.log('render Counter');
  });
  return <h1>{props.count}</h1>;
});

const Ticker = connect(mapStateToProps)((props) => {
  useEffect(() => {
    console.log('render Ticker');
  });
  return <h1>{props.tick}</h1>;
});

function Controls() {
  const store2 = useStore();
  const inc = () => store2.dispatch({ type: 'INC' });
  const tick = () => store2.dispatch({ type: 'TICK' });
  useEffect(() => {
    console.log('render Controls');
  });
  return (
    <>
      <button onClick={inc}>count</button>
      <button onClick={tick}>tick</button>
    </>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
      <Ticker />
      <Controls />
    </Provider>
  );
};

export default App;
