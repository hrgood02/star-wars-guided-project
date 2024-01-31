export async function getCharacters(){
    const url = `/api/planets`;
    let characters = await fetch(url).then((res) => res.json());
    return characters;
}