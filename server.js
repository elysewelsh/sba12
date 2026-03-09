const exress = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
import 'dotenv/config'

import {checkApiKey, requestLogger } from './middleware/generalMiddleware'

const {requestLogger, checkApiKey } = middleware;

app.use(requestLogger)

app.use('/api', checkApiKey)

//example of how to use route
app.use('/api/users', userRoutes);

app.get('/api/fun-fact', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ error: error.message})
        console.error(error.message)
    }

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});