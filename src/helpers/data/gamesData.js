import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getGames = (uid) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/games.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const updateGame = (obj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/games/${obj.key}.json`, obj)
    .then(resolve)
    .catch(reject);
});

const createGame = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/games.json`, obj)
    .then((response) => updateGame({ key: response.data.name }).then(resolve))
    .catch(reject);
});

export { getGames, updateGame, createGame };
