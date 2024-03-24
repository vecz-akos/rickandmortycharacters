import { useEffect, useState } from "react";

import { Image, Table } from "react-bootstrap"

import getCharacters from "../graphql/getCharacters";

export default function CharacterTable({ currentPage, handleViewChar }) {
  const [ characters, setCharacters ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    const loadChars = async () => {
      setLoading(true);

      const data = await getCharacters(currentPage);
      setCharacters(data?.characters?.results);

      setLoading(false);
    };

    loadChars();
  }, [currentPage]);

  return <>
    <h1>Home</h1>
    {loading ? "Loading..." :
    <Table hover>
        <thead>
        <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Species</th>
            <th>Status</th>
        </tr>
        </thead>
        <tbody>
            {characters.map((char) => 
            <tr key={char.id}>
                <td><Image src={char.image} thumbnail fluid /></td>
                <td><button type='button' className='btn btn-primary' onClick={() => handleViewChar(char.id)}>{char.name}</button></td>
                <td>{char.species}</td>
                <td>{char.status}</td>
            </tr>
        )}
        </tbody>
    </Table>}
  </>
}
