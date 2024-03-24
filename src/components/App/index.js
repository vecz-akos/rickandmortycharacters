import React from 'react'
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import CharacterDetails from '../CharacterDetails';

import CustomNavBar from '../CustomNavBar';
import CharacterTable from '../CharacterTable';

const App = () => {
  const [ viewChar, setViewChar ] = useState(-1);
  const [ isViewChar, setIsViewChar ] = useState(false);

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
            <>
              <CharacterTable handleViewChar={handleViewChar} />
            </>
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
