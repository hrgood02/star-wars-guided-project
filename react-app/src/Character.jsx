import './Character.css';

export function Character({characters}) {
    return (
      <div>
{characters.map((character) => <button type="button" className="character" onClick={()=>alert('hi')}>{character.name}</button>)}
      </div>
        

    )
  }