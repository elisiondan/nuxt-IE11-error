import { RemoteInstance } from 'directus-sdk-javascript';

const client = new RemoteInstance({
  url: process.env.API_URL,
  accessToken: process.env.API_KEY,
});

export default client;
