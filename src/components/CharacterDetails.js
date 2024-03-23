import { useEffect, useState } from "react";

import getCharacter from "../graphql/getCharacter";

import { Image } from "react-bootstrap";

export default function CharacterDetails(characterId) {
  const [ character, setCharacter ] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadChar = async () => {
      setLoading(true);

      const data = await getCharacter(characterId);
      setCharacter(data?.character);

      setLoading(false);
    };

    loadChar();
  }, []);

  return (loading ? <p>Loading...</p> :
          <>
            <h1>Name: {character.name}</h1>
            <Image src={character.image} />
            <p>Species: {character.species}</p>
          </>
  )
}
