import axios from 'axios';
import { serverAddress } from './config.js';

export const getGames = () => axios.get(`${serverAddress}/api/sudoku`).then(res => res.data);
export const createGame = (difficulty, creator) => axios.post(`${serverAddress}/api/sudoku`, { difficulty, creator }).then(res => res.data);
export const updateGame = (gameId, update) => axios.put(`${serverAddress}/api/sudoku/${gameId}`, update).then(res => res.data);
export const deleteGame = (gameId) => axios.delete(`${serverAddress}/api/sudoku/${gameId}`).then(res => res.data);
