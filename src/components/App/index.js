import React from 'react'
import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import getCharacters from '../../graphql/getCharacters';
import CharacterDetails from '../CharacterDetails';

import CustomNavBar from '../CustomNavBar';
import CharacterTable from '../CharacterTable';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [ characters, setCharacters ] = useState([]);
  const [ viewChar, setViewChar ] = useState(-1);
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
    setViewChar(id);
    setIsViewChar(!isViewChar);
  }

  return <div className="App">
    <CustomNavBar />
    <Container className='m-5'>
      <Row m={4} className="justify-content-md-center">
        <Col md={8}>
        {
          !isViewChar ?
          (loading ? <p>Loading...</p>
          : <CharacterTable characters={characters} handleViewChar={handleViewChar} />)
          : <>
              <button type='button' className='btn btn-primary' onClick={() => handleViewChar(null)}>Back to all characters</button>
              <CharacterDetails characterId={viewChar}></CharacterDetails>
          </>
        }
        </Col>
      </Row>
    </Container>
  </div>
}

export default App;
