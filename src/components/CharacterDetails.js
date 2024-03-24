import { useEffect, useState } from "react";

import getCharacter from "../graphql/getCharacter";

import { Badge, Image } from "react-bootstrap";

export default function CharacterDetails(characterId) {
  const [ character, setCharacter ] = useState({});
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    const loadChar = async () => {
      setLoading(true);

      const data = await getCharacter(characterId);
      setCharacter(data?.character);

      setLoading(false);
    };

    loadChar();
  }, [characterId]);

  return (loading ? <p>Loading...</p> :
          <>
            <h1>Profile</h1>
            <h2>Name: {character.name}</h2>
            <Image thumbnail fluid src={character.image} />
            <p>Species: {character.species}</p>
            <p>Status: {character.status}</p>
            <p>Gender: {character.gender}</p>
            <p>Location <Badge>and dimension</Badge>: {character?.location?.name} <Badge>{character?.location?.dimension || "NA"}</Badge></p>
            <p>Origin <Badge>and dimension</Badge>: {character?.origin?.name} <Badge>{character?.origin?.dimension || "NA"}</Badge></p>
          </>
  )
}
