import express from 'express';
import { getHighscores, postHighscore, getHighscoreByGame } from '../controllers/highscoreController.js';
const router = express.Router();

router.get('https://cs5610-final-wxzl.onrender.com/', getHighscores);
router.post('https://cs5610-final-wxzl.onrender.com/', postHighscore);
router.get('https://cs5610-final-wxzl.onrender.com/:gameId', getHighscoreByGame);

export default router;
