import express from 'express';
import { getGames, createGame, updateGame, deleteGame } from '../controllers/sudokuController.js';
const router = express.Router();
const serverAddress=""
router.get(`${serverAddress}/`, getGames);
router.post(`${serverAddress}/`, createGame);
router.put(`${serverAddress}/:gameId`, updateGame);
router.delete(`${serverAddress}/:gameId`, deleteGame);

export default router;
