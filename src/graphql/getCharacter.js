import gqlClient from './client.js';
import { gql } from 'graphql-request';

export default async function getCharacter(characterId) {
    const data = await gqlClient.request(gql`
    query {
        character(id: ${characterId}) {
            image
            name
            species
            status
                type
        }
    }
    `)

    return data;
};
