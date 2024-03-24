import gqlClient from './client.js';
import { gql } from 'graphql-request';

export default async function getCharacters(page=1, search="") {
    const data = await gqlClient.request(gql`
    query {
        characters(${search === "" ? `page: ${page}` : `filter: { name: "${search}" }`}) {
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
