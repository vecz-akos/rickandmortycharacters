import gqlClient from './client.js';
import { gql } from 'graphql-request';

export default async function getCharacters() {
    const data = await gqlClient.request(gql`
    query {
        characters(page: 1) {
        results {
                id
                image
                name
                species
                status
            }
        }
    }
    `)

    return data;
};
