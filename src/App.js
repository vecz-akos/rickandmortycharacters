import CharactersTable from './components/CharactersTable';
import CustomNavBar from './components/CustomNavBar';
import './App.css';
import React, { useEffect } from 'react';

import { Container } from 'react-bootstrap';

function App() {
  useEffect(() => {
    document.title = 'Rick and Morty characters';
  }, []);
  
  return (
    <div className="App">
      <CustomNavBar />
      <Container>
        <CharactersTable />
      </Container>
    </div>
  );
}

export default App;
