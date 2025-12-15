import axios from 'axios';
import { serverAddress } from './config.js';

export const getHighscores = () => axios.get(`${serverAddress}/api/highscore`).then(res => res.data);
export const postHighscore = (gameId, username) => axios.post(`${serverAddress}/api/highscore`, { gameId, username }).then(res => res.data);
export const getHighscoreByGame = (gameId) => axios.get(`${serverAddress}/api/highscore/${gameId}`).then(res => res.data);
