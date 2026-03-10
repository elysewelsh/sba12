import express from 'express'
import movieController from '../controllers/movieController.js';

const router = express.Router();

router.get('/search', movieController.searchMovies);
router.get('/id/:id', movieController.getMovie);

// api/search?title=thin+man
// api/id/tt0025878

export default router;

