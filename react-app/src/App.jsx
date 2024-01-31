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
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Sixtyfour&display=swap');
      </style>
      <h1>Star Wars Universe Lookup</h1>
      <main>
        <Character characters={characters} />
      </main>
    </>
  )
}

export default App
