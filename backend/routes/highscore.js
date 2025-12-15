import express from 'express';
import { serverAddress } from '../config.js';
import { getHighscores, postHighscore, getHighscoreByGame } from '../controllers/highscoreController.js';
const router = express.Router();

router.get(`${serverAddress}/`, getHighscores);
router.post(`${serverAddress}/`, postHighscore);
router.get(`${serverAddress}/:gameId`, getHighscoreByGame);

export default router;
