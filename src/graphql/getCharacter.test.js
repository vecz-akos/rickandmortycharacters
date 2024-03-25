import getCharacter from "./getCharacter";

const EXPECTED_VALUE = {
        "character": {
            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            "name": "Rick Sanchez",
            "species": "Human",
            "status": "Alive",
            "gender": "Male",
            "location": {
                "name": "Citadel of Ricks",
                "dimension": "unknown"
            },
            "origin": {
                "name": "Earth (C-137)",
                "dimension": "Dimension C-137"
            }
        }
    };

it('Get character information.', async () => {
    expect(await getCharacter(1)).toEqual(EXPECTED_VALUE);
})
