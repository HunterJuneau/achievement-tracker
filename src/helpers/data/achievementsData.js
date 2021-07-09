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
    .patch(`${dbUrl}/achievements/${obj.key}.json`, obj)
    .then(resolve)
    .catch(reject);
});

const createAchievement = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/achievements.json`, obj)
    .then((response) => {
      updateAchievement({ key: response.data.name }).then(resolve);
    })
    .catch(reject);
});

const deleteAchievement = (key, uid) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/achievements/${key}.json`)
    .then(() => resolve(getAchievements(uid)))
    .catch(reject);
});

export {
  getAchievements,
  getSingleAchievement,
  updateAchievement,
  createAchievement,
  deleteAchievement,
};
