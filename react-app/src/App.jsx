import { useState, useEffect } from 'react'
import { getCharacters } from './getCharacters';
import './App.css'
import { Home } from './Home';
import {
  BrowserRouter as Router, Routes,
  Route
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  let [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(characters => setCharacters(characters))
  }, []);

  console.log(characters);


  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Sixtyfour&display=swap');
      </style>
      <h1>Star Wars Universe Lookup</h1>
      <main>
        <Home characters={characters} />
        {/* <Routes>
          <Route path="/" element={<Character characters={characters}/>} />
          <Route path="/character"element={<Profile />} />
        </Routes> */}
      </main>
    </>
  )
}

export default App