import logo from './logo_w.png'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Hero from './Components/Hero'
import Wordle from './Components/Wordle'
import Navbar from './Components/Navbar'
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [solution, setSolution] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3002/solutions')
    .then(res => res.json())
    .then(json => {
      const randSol = json[Math.floor(Math.random()*json.length)]
      setSolution(randSol.word)
  })
}, [setSolution])

  return (
    <div>

      <Navbar/>
    <BrowserRouter>
    <Routes>
          <Route path="/home" element={<Hero />} />
          <Route path="/wordle" element={<Wordle/>} />
        </Routes>
      </BrowserRouter>



    <div className="App">
      <h1 className="App-header">
          Wordle Clone.
      </h1>

      {solution && <div>Solution is: {solution}</div>}
    </div>

    </div>
  );
}

export default App
