import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66c48afb003353790b8b')

export const account = new Account(client);
export { ID } from 'appwrite';
