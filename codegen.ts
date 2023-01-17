import { CodegenConfig } from '@graphql-codegen/cli';
import { APP_ID, APP_KEY } from './src/Utils/Constants'
const config: CodegenConfig = {
    schema: {
        'https://parseapi.back4app.com/graphql':
            {
                headers: {
                    'x-parse-application-id': APP_ID,
                    'x-parse-master-key': APP_KEY
                }
            }
    },
    documents: ['src/**/*.tsx', 'src/**/!(*.generated).ts'],
    generates: {
        './src/__generated__/': {
            preset: 'client',
            plugins: [],
            presetConfig: {
                gqlTagName: 'gql',
            }
        }
    },
    ignoreNoDocuments: true,
};

export default config;
