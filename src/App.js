
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import Wordle from './Components/Wordle/Wordle'
import Navbar from './Components/Navbar/Navbar'
import Navbaar from './Components/Navbaar/Navbaar'
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
      <BrowserRouter>
        <Navbaar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wordle" element={solution && <Wordle solution={solution}/>} />
        </Routes>
      
        {/* <div>
          {solution && <Wordle solution={solution}/>}
        </div> */}

      </BrowserRouter>
    </div>
    
    
  );
}

export default App
