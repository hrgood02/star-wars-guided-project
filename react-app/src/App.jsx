import { useState, useEffect } from 'react'
import { getCharacters } from './getCharacters';
import './App.css'

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

   <h1>Star Wars Universe Lookup</h1>
   <main>
      {characters.map((character) => {return character.name})}
   </main>
    </>
  )
}

export default App
