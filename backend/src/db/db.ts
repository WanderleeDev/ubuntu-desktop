import 'dotenv/config'
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

const client = createClient({ 
  url: process.env.DATABASE_URL_LOCAL!,
  // authToken: process.env.DATABASE_AUTH_TOKEN
});

export const db = drizzle({ client });