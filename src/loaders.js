const URL = "https://randomuser.me/api/?results=50&seed=d71be3c141d8ac7b&inc=name,email,id,picture"

export async function loadContacts(){
    const result = await fetch(URL);
    return (await result.json())?.results;
}