import './Home.css';
import { CharacterPage } from './CharacterPage';

export function Home({characters}) {
    return (
      <div>
{characters.map((character) => <button type="button" className="character" onClick={()=> Alert('Hi')}>{character.name}</button>)}
      </div>
        

    )
  }