import React from 'react'
import { useState, useEffect } from 'react';
import { Container, Image, Table } from 'react-bootstrap'

import getCharacters from '../../graphql/getCharacters'
import getCharacter from '../../graphql/getCharacter';
import CharacterDetails from '../CharacterDetails';

import CustomNavBar from '../CustomNavBar';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [ characters, setCharacters ] = useState([]);
  const [ viewChar, setViewChar ] = useState({});
  const [ isViewChar, setIsViewChar ] = useState(false);

  useEffect(() => {
    const loadChars = async () => {
      setLoading(true);

      const data = await getCharacters();
      setCharacters(data?.characters?.results);

      setLoading(false);
    };

    loadChars();
  }, []);

  const handleViewChar = async (id) => {
    const character = await getCharacter(id);
    setViewChar(character);
    setIsViewChar(!isViewChar);
  }

  return <div className="App">
    <CustomNavBar />
    <Container>
      {
      !isViewChar ?
      <Table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Species</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {loading ? "Loading..." :
            isViewChar ? <button onClick={() => handleViewChar(null)}>Back to all characters</button>
            : characters.map((char) => 
            <tr key={char.id}>
              <td><Image src={char.image} thumbnail fluid /></td>
              <td><button onClick={() => handleViewChar(char.id)}>{char.name}</button></td>
              <td>{char.species}</td>
              <td>{char.status}</td>
            </tr>
          )}
        </tbody>
      </Table>
      : <CharacterDetails characterId={viewChar}></CharacterDetails>
      }
    )
    </Container>
  </div>
}

export default App;
