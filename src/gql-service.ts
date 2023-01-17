import { DocumentNode, gql } from '@apollo/client';

export const GET_MOVIES: DocumentNode = gql(`
    query allFilms {
        films(order: [releaseDate_DESC]) {
            results {
                id
                title
                releaseDate
                characters {
                    count
                    results {
                        name
                    }
                }
                planets {
                    count
                    results {
                        name
                    }
                }
            }
        }
    }`);
