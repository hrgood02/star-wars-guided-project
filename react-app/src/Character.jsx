export function Character({characters}) {
    return (
      <div>
{characters.map((character) => <h1>{character.name}</h1>)}
      </div>
        

    )
  }