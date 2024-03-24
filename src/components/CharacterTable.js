import { useEffect, useState } from "react";

import { Image, InputGroup, Form, Table } from "react-bootstrap"

import getCharacters from "../graphql/getCharacters";

export default function CharacterTable({ handleViewChar }) {
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ characters, setCharacters ] = useState([]);
  const [ haveNextPage, setHaveNextPage ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ search, setSearch ] = useState("");

  useEffect(() => {
    const loadChars = async () => {
      setLoading(true);

      const data = await getCharacters(currentPage, search);
      setCharacters(data?.characters?.results);
      const data2 = await getCharacters(currentPage+1, search);
      setHaveNextPage(data2?.characters?.results?.length > 0);

      setLoading(false);
    };

    loadChars();
  }, [currentPage, search]);

  const handleNextPage = (d) => {
    setCurrentPage(currentPage + d);
  }
  
  const handleSearch = (search) => {
    setCurrentPage(1);
    setSearch(search);
  }

  return <>
    <h1>Home</h1>
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon3">
        Search
      </InputGroup.Text>
      <Form.Control id="basic-url" aria-describedby="basic-addon3" onChange={(event) => handleSearch(event.target.value)} />
    </InputGroup>
    {loading ? "Loading..." :
    characters.length === 0 ? <h2>Character not found.</h2> :
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
    
    {currentPage > 1 &&
      <button type='button' className='btn btn-primary' onClick={() => handleNextPage(-1)}>Previous</button>}
    <p>Current page: {currentPage}</p>
    {haveNextPage &&
      <button type='button' className='btn btn-primary' onClick={() => handleNextPage(+1)}>Next</button>}
  </>
}
