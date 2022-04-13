import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

const eventFn = () => {
  console.log('h1 clicado');
};

function App() {
  const [counter, setCounter] = useState(0);

  // componentDidUpdate - executa toda a vez que o componente atualiza
  useEffect(() => {
    console.log('componente montado');
  });

  // componentDidMount - executa 1x
  useEffect(() => {
    console.log('componente montado uma vez');
  }, []);

  // componentDidMount - executa 1x
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);
    // componenteWillUnnmount - limpeza do componente
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  // com dependência - executa toda a vez que a dependencia mudar
  useEffect(() => {
    console.log('Contador mudou para', counter);
  }, [counter]);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default App;
