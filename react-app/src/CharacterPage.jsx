import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getCharacters } from "./getCharacters";


export function CharacterPage() {
    const {id}= useParams()

    
  let [characters, setCharacters] = useState([]);
    useEffect(() => {
        getCharacters()
          .then(characters => setCharacters(characters))
      }, []);

      let character = characters[id];
    return(
        <h1>Hello {id}</h1>
    )
  
}