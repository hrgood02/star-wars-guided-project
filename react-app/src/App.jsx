import { useState, useEffect } from 'react'
import { getCharacters } from './getCharacters';
import './App.css'
import { Character } from './Character';
import { CharacterButton } from './CharacterPage';

function App() {
  const [count, setCount] = useState(0)

  let [characters, setCharacters] = useState([]);
  let [films, setFilms] = useState([]);
  let [planets, setPlanets] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(characters => setCharacters(characters))
  }, []);
  useEffect(() => {
    getFilms()
      .then(films => setsetFilms(films))
  }, []);
  useEffect(() => {
    getPlanetss()
      .then(planets => setPlanets(planets))
  }, []);

  console.log(characters);



  return (
    <>

   <h1>Star Wars Universe Lookup</h1>
   <main>
       <CharacterButton characters = {characters}/>
   </main>
    </>
  )
}

export default App
