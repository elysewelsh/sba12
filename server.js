import express from 'express';
import movieRoutes from './routes/movieRoutes.js';
import { apiClient } from './config/apiClient.js';

// import axios from 'axios';

// import dotenv from 'dotenv';

// dotenv.config({ path: './routes/.env' })

// export const key = process.env.OMDB_API_KEY;

// export const apiClient = axios.create({
// baseURL: `http://www.omdbapi.com`
// })


apiClient.interceptors.request.use(request => {
    console.log(`BaseUrl: ${request.baseURL}${request.url}`)
    console.log(`Requesting: ${request.method}${request.url}`)
    return request
})

const app = express();

app.use(express.json())


app.use('/api', movieRoutes)


export const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});