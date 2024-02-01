import './Home.css';
import { CharacterPage } from './CharacterPage';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';


export function Home({ characters }) {
  const [goToCharacters, setGoToCharacters] = useState(false);
  if (goToCharacters) {
    return <Navigate to="/CharacterPage"  />
  }

  return (
    <div>
      <h1>Star Wars Universe Lookup</h1>
      <main>
        {characters.map((character) =>
          <button type="button" className="character" onClick={() => setGoToCharacters(true)}>{character.name}</button>)}
      </main>
    </div>


  )
}