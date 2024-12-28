import * as dotenv from "dotenv";
import type { Config} from 'drizzle-kit';

dotenv.config();

let db_url = process.env.TURSO_DATABASE_URL!;
let aut_token = process.env.TURSO_AUTH_TOKEN!;
export default  {
    schema:'./Repo/database.ts',
    out:'./migrations',
    dialect:'turso',
    dbCredentials:{
        url: db_url as string,
        authToken: aut_token as string,
    }
} satisfies Config