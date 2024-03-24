import { useEffect, useState } from "react";

import { Image, InputGroup, Form, Table } from "react-bootstrap"

import getCharacters from "../graphql/getCharacters";

export default function CharacterTable({ currentPage, handleViewChar }) {
  const [ characters, setCharacters ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ search, setSearch ] = useState("");

  useEffect(() => {
    const loadChars = async () => {
      setLoading(true);

      const data = await getCharacters(currentPage, search);
      setCharacters(data?.characters?.results);

      setLoading(false);
    };

    loadChars();
  }, [currentPage, search]);
  
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  return <>
    <h1>Home</h1>
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon3">
        Search
      </InputGroup.Text>
      <Form.Control id="basic-url" aria-describedby="basic-addon3" onChange={handleSearch} />
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
  </>
}
