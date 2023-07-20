import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [learns, setLearns] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/')
      .then(res => res.json())
      .then(data => setLearns(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Road Map</h1>
        {learns && learns.map(learn => (
          <div key={learn.id}>{learn.title}</div>
        ))}
      </header>
    </div>
  );
}

export default App;