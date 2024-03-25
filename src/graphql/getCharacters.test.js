import getCharacters from "./getCharacters";

const EXPECTED_VALUE = {
      "characters": {
        "results": [
          {
            "id": "1",
            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            "name": "Rick Sanchez",
            "species": "Human",
            "status": "Alive"
          },
          {
            "id": "2",
            "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            "name": "Morty Smith",
            "species": "Human",
            "status": "Alive"
          },
          {
            "id": "3",
            "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
            "name": "Summer Smith",
            "species": "Human",
            "status": "Alive"
          },
          {
            "id": "4",
            "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
            "name": "Beth Smith",
            "species": "Human",
            "status": "Alive"
          },
          {
            "id": "5",
            "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
            "name": "Jerry Smith",
            "species": "Human",
            "status": "Alive"
          },
          {
            "id": "6",
            "image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
            "name": "Abadango Cluster Princess",
            "species": "Alien",
            "status": "Alive"
          },
          {
            "id": "7",
            "image": "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
            "name": "Abradolf Lincler",
            "species": "Human",
            "status": "unknown"
          },
          {
            "id": "8",
            "image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
            "name": "Adjudicator Rick",
            "species": "Human",
            "status": "Dead"
          },
          {
            "id": "9",
            "image": "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
            "name": "Agency Director",
            "species": "Human",
            "status": "Dead"
          },
          {
            "id": "10",
            "image": "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
            "name": "Alan Rails",
            "species": "Human",
            "status": "Dead"
          },
          {
            "id": "11",
            "image": "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
            "name": "Albert Einstein",
            "species": "Human",
            "status": "Dead"
          },
          {
            "id": "12",
            "image": "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
            "name": "Alexander",
            "species": "Human",
            "status": "Dead"
          },
          {
            "id": "13",
            "image": "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
            "name": "Alien Googah",
            "species": "Alien",
            "status": "unknown"
          },
          {
            "id": "14",
            "image": "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
            "name": "Alien Morty",
            "species": "Alien",
            "status": "unknown"
          },
          {
            "id": "15",
            "image": "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
            "name": "Alien Rick",
            "species": "Alien",
            "status": "unknown"
          },
          {
            "id": "16",
            "image": "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
            "name": "Amish Cyborg",
            "species": "Alien",
            "status": "Dead"
          },
          {
            "id": "17",
            "image": "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
            "name": "Annie",
            "species": "Human",
            "status": "Alive"
          },
          {
            "id": "18",
            "image": "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
            "name": "Antenna Morty",
            "species": "Human",
            "status": "Alive"
          },
          {
            "id": "19",
            "image": "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
            "name": "Antenna Rick",
            "species": "Human",
            "status": "unknown"
          },
          {
            "id": "20",
            "image": "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
            "name": "Ants in my Eyes Johnson",
            "species": "Human",
            "status": "unknown"
          }
        ]
      }
    };

const EXPECTED_VALUE_FOR_SEARCH = {
      "characters": {
        "results": [
          {
            "id": "1",
            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            "name": "Rick Sanchez",
            "species": "Human",
            "status": "Alive"
          },
          {
            "id": "8",
            "image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
            "name": "Adjudicator Rick",
            "species": "Human",
            "status": "Dead"
          },
          {
            "id": "15",
            "image": "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
            "name": "Alien Rick",
            "species": "Alien",
            "status": "unknown"
          },
          {
            "id": "19",
            "image": "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
            "name": "Antenna Rick",
            "species": "Human",
            "status": "unknown"
          },
          {
            "id": "22",
            "image": "https://rickandmortyapi.com/api/character/avatar/22.jpeg",
            "name": "Aqua Rick",
            "species": "Humanoid",
            "status": "unknown"
          },
          {
            "id": "48",
            "image": "https://rickandmortyapi.com/api/character/avatar/48.jpeg",
            "name": "Black Rick",
            "species": "Human",
            "status": "Alive"
          },
          {
            "id": "56",
            "image": "https://rickandmortyapi.com/api/character/avatar/56.jpeg",
            "name": "Bootleg Portal Chemist Rick",
            "species": "Human",
            "status": "Dead"
          },
          {
            "id": "69",
            "image": "https://rickandmortyapi.com/api/character/avatar/69.jpeg",
            "name": "Commander Rick",
            "species": "Human",
            "status": "Dead"
          },
          {
            "id": "72",
            "image": "https://rickandmortyapi.com/api/character/avatar/72.jpeg",
            "name": "Cool Rick",
            "species": "Human",
            "status": "Alive"
          },
          {
            "id": "74",
            "image": "https://rickandmortyapi.com/api/character/avatar/74.jpeg",
            "name": "Cop Rick",
            "species": "Human",
            "status": "Alive"
          },
          {
            "id": "78",
            "image": "https://rickandmortyapi.com/api/character/avatar/78.jpeg",
            "name": "Cowboy Rick",
            "species": "Human",
            "status": "Alive"
          },
          {
            "id": "82",
            "image": "https://rickandmortyapi.com/api/character/avatar/82.jpeg",
            "name": "Cronenberg Rick",
            "species": "Cronenberg",
            "status": "unknown"
          },
          {
            "id": "86",
            "image": "https://rickandmortyapi.com/api/character/avatar/86.jpeg",
            "name": "Cyclops Rick",
            "species": "Humanoid",
            "status": "Dead"
          },
          {
            "id": "103",
            "image": "https://rickandmortyapi.com/api/character/avatar/103.jpeg",
            "name": "Doofus Rick",
            "species": "Human",
            "status": "unknown"
          },
          {
            "id": "119",
            "image": "https://rickandmortyapi.com/api/character/avatar/119.jpeg",
            "name": "Evil Rick",
            "species": "Humanoid",
            "status": "Dead"
          },
          {
            "id": "135",
            "image": "https://rickandmortyapi.com/api/character/avatar/135.jpeg",
            "name": "Garment District Rick",
            "species": "Human",
            "status": "Dead"
          },
          {
            "id": "164",
            "image": "https://rickandmortyapi.com/api/character/avatar/164.jpeg",
            "name": "Insurance Rick",
            "species": "Human",
            "status": "unknown"
          },
          {
            "id": "165",
            "image": "https://rickandmortyapi.com/api/character/avatar/165.jpeg",
            "name": "Investigator Rick",
            "species": "Human",
            "status": "Dead"
          },
          {
            "id": "187",
            "image": "https://rickandmortyapi.com/api/character/avatar/187.jpeg",
            "name": "Juggling Rick",
            "species": "Human",
            "status": "unknown"
          },
          {
            "id": "215",
            "image": "https://rickandmortyapi.com/api/character/avatar/215.jpeg",
            "name": "Maximums Rickimus",
            "species": "Human",
            "status": "Dead"
          }
        ]
      }
    };

it('Get first page of characters.', async () => {
    expect(await getCharacters(1)).toEqual(EXPECTED_VALUE);
})

it('Get search result.', async () => {
    expect(await getCharacters(1, "rick")).toEqual(EXPECTED_VALUE_FOR_SEARCH)
})
