import './App.css';
import React, { useContext, useState } from 'react';

const globalState = {
  title: 'O título do contexto',
  body: 'O body do contexto',
  counter: 0,
};

// eslint-disable-next-line
const Div = ({ children }) => {
  return (
    <>
      <H1 />
      <P />
    </>
  );
};

// eslint-disable-next-line
const H1 = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { title, counter },
  } = theContext;
  return (
    <h1>
      {title} {counter}
    </h1>
  );
};

// eslint-disable-next-line
const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body },
    contextState,
    setContextState,
  } = theContext;
  return <p onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }))}>{body}</p>;
};

const GlobalContext = React.createContext();

function App() {
  const [contextState, setContextState] = useState(globalState);
  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  );
}

export default App;
