import gqlClient from './client.js';
import { gql } from 'graphql-request';

export default async function getCharacters(page=1) {
    const data = await gqlClient.request(gql`
    query {
        characters(page: ${page}) {
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
