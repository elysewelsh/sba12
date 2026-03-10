import dotenv from 'dotenv';

dotenv.config({ path: './routes/.env' })

export const key = process.env.OMDB_API_KEY;