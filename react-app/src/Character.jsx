export function Character({}) {
    return (
      <section className="Character">
        <h2>{header}</h2>
        <div className="character-wrapper">
          {character.map(character => <PersonCard person={person} key={person.name} />)}
        </div>
      </section>
    )
  }