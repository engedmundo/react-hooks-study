import P from 'prop-types';
import './App.css';
import React, { useState, useEffect, useCallback, useMemo } from 'react';

const Post = ({ post }) => {
  console.log('Filho renderizou');
  return (
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  console.log('Pai renderizou');

  useEffect(() => {
    setTimeout(function () {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 3000);
  }, []);

  return (
    <div className="App">
      <p>
        <input type="search" value={value} onChange={(e) => setValue(e.target.value)} />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })
        );
      }, [posts])}
      {posts.length <= 0 && <p>Ainda não existem posts</p>}
    </div>
  );
}

export default App;

// const Button = ({ incrementButton }) => {
//   console.log('Filho renderizou');
//   return <button onClick={() => incrementButton(10)}>+</button>;
// };

// Button.propTypes = {
//   incrementButton: P.func,
// };

// function App() {
//   const [counter, setCounter] = useState(0);

//   const incrementCounter = useCallback((num) => {
//     setCounter((c) => c + num);
//   }, []);

//   console.log('Pai renderizou');

//   const btn = useMemo(() => {
//     return <Button incrementButton={incrementCounter} />;
//   }, [incrementCounter]);

//   return (
//     <div className="App">
//       <p>Teste</p>
//       <h1>Contador: {counter}</h1>
//       {btn}
//     </div>
//   );
// }

// export default App;
