import * as dotenv from 'dotenv';

// Using this way rather than VITE_* to minimise risk of variables leaking to the client.
dotenv.config();

export const getConfig = (key: string) => process.env[key];
