import React from 'react'
import { useState, useEffect } from 'react';
import { Image, Table } from 'react-bootstrap'
import getCharacters from '../graphql/getCharacters'

export default function CharactersTable() {
  const [loading, setLoading] = useState(false);
  const [ characters, setCharacters ] = useState([]);

  useEffect(() => {
    const loadChars = async () => {
      setLoading(true);

      const data = await getCharacters();
      setCharacters(data?.characters?.results);

      setLoading(false);
    };

    loadChars();
  }, [])

  return (
    <Table>
      <thead>
        <th>Avatar</th>
        <th>Name</th>
        <th>Species</th>
        <th>Status</th>
      </thead>
      <tbody>
        {loading ? "Loading..." : characters.map((char) => 
          <tr>
            <td><Image src={char.image} thumbnail fluid /></td>
            <td>{char.name}</td>
            <td>{char.species}</td>
            <td>{char.status}</td>
          </tr>
        )}
      </tbody>
    </Table>
  )
}
