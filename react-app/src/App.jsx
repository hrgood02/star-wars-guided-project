import { useState, useEffect } from 'react'
import { getCharacters } from './getCharacters';
import './App.css'
import { Home } from './Home';
import { CharacterPage } from './CharacterPage';
import { BrowserRouter as Router, Route, Routes}  from "react-router-dom";

function App() {

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
    
      <main>
      {/* <Home characters={characters} /> */}
        <Router> 
          <Routes>
            <Route exact path ="/" element ={<Home characters= {characters}/>}/>
            <Route path ="/CharacterPage/:id" element ={<CharacterPage />}/>
          </Routes>
        </Router>

      </main>
    </>
  )
}

export default App