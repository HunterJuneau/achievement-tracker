import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getAchievements = (uid) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/achievements.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getSingleAchievement = (key) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/achievements/${key}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const updateAchievement = (obj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/achievements/${obj.firebaseKey}.json`, obj)
    .then(resolve)
    .catch((error) => reject(error));
});

const createAchievement = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/achievements.json`, obj)
    .then((response) => {
      updateAchievement({ firebaseKey: response.data.name }).then(resolve);
    })
    .catch((error) => reject(error));
});

export {
  getAchievements, getSingleAchievement, updateAchievement, createAchievement
};
