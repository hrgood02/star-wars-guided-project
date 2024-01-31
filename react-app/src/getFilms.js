export async function getCharacters(){
    const url = `/api/films`;
    let characters = await fetch(url).then((res) => res.json());
    return characters;
}