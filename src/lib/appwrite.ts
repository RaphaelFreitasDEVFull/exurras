import { Client, Storage } from "node-appwrite";

const client: Client = new Client()
  .setEndpoint(process.env.APPWRITE_ENDPOINT!) // https://cloud.appwrite.io/v1 ou sua self-hosted
  .setProject(process.env.APPWRITE_PROJECT_ID!)
  .setKey(process.env.APPWRITE_API_KEY!); // API key com permissão no bucket

export const storage = new Storage(client);
