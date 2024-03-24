import React from 'react'
import { useState, useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import CharacterDetails from '../CharacterDetails';

import CustomNavBar from '../CustomNavBar';
import CharacterTable from '../CharacterTable';

const App = () => {
  const [ viewChar, setViewChar ] = useState(-1);
  const [ isViewChar, setIsViewChar ] = useState(false);
  const [ currentPage, setCurrentPage ] = useState(1);
  const lastPage = 42; // believe me

  const handleViewChar = async (id) => {
    setViewChar(id);
    setIsViewChar(!isViewChar);
  }

  const handleNextPage = (d) => {
    setCurrentPage(currentPage + d);
  }

  return <div className="App">
    <CustomNavBar />
    <Container className='m-5'>
      <Row m={4} className="justify-content-md-center">
        <Col md={8}>
        {
          !isViewChar ?
            <>
              <CharacterTable handleViewChar={handleViewChar} currentPage={currentPage} />
              {currentPage > 1 && <button type='button' className='btn btn-primary' onClick={() => handleNextPage(-1)}>Previous</button>}
              <p>Current page: {currentPage}</p>
              {currentPage < lastPage && <button type='button' className='btn btn-primary' onClick={() => handleNextPage(+1)}>Next</button>}
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
