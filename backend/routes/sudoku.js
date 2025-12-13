import express from 'express';
import { getGames, createGame, updateGame, deleteGame } from '../controllers/sudokuController.js';
const router = express.Router();

router.get('https://cs5610-final-wxzl.onrender.com/', getGames);
router.post('https://cs5610-final-wxzl.onrender.com/', createGame);
router.put('https://cs5610-final-wxzl.onrender.com/:gameId', updateGame);
router.delete('https://cs5610-final-wxzl.onrender.com/:gameId', deleteGame);

export default router;
