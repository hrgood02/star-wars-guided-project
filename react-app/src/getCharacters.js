export async function getCharacters(){
    const url = `/api/characters`;
    let characters = await fetch(url).then((res) => res.json());
    return characters;
}