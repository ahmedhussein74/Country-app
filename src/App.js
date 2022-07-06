import React , { useState , useEffect } from 'react'
import './App.css';

function App() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="App">
      <button onClick={ () => { setCount (count - 1) }}>-</button>
      <button onClick={ () => { setCount (0) }}>Reset</button>
      <button onClick={ () => { setCount (count + 1) }}>+</button>
      <h3>you click me {count} times</h3>
    </div>
  );
}

export default App;
