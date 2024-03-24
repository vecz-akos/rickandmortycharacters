import { Image, Table } from "react-bootstrap"

export default function CharacterTable({characters, handleViewChar}) {
  return <>
    <h1>Home</h1>
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
    </Table>
  </>
}
