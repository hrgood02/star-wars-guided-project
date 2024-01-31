import './Character.css';

export function Character({characters}) {
    return (
      <div>
{characters.map((character) => <button type="button" className="character">{character.name}</button>)}
      </div>
        

    )
  }