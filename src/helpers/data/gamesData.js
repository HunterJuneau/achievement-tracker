import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getGames = (uid) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/games.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getGames;
