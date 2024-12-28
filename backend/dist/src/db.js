import { createClient } from '@libsql/client';
import defineConfig from '../drizzle.config';
import { drizzle } from 'drizzle-orm/libsql';
const client = createClient(defineConfig);
export default drizzle({ client });
