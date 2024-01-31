export function Character({characters}) {
    return (
      <div>
{characters.map((character) => <button type="button">{character.name}</button>)}
      </div>
        

    )
  }