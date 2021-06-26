import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const updateLink = (obj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/links/${obj.key}.json`, obj)
    .then(() => resolve(obj.key))
    .catch(reject);
});

const createLink = (uid) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/links.json`, { uid, steam: false })
    .then((response) => resolve(updateLink({ key: response.data.name })))
    .catch(reject);
});

const checkIn = (uid) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/links.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const linkObject = Object.values(response.data);
      if (linkObject) {
        resolve({ steam: linkObject[0].steam, key: linkObject[0].key });
      } else {
        createLink(uid).then((key) => resolve({ steam: false, key }));
      }
    })
    .catch(reject);
});

export { updateLink, checkIn };
