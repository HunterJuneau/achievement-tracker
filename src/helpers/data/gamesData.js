import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getGames = (uid) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/games.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const getSingleGame = (key) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/games/${key}.json`).then((response) => resolve(response.data)).catch(reject);
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

const deleteGame = (key, uid) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/games/${key}.json`)
    .then(() => resolve(getGames(uid)))
    .catch(reject);
});

export {
  getGames, getSingleGame, updateGame, createGame, deleteGame
};
