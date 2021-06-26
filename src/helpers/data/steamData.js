import axios from 'axios';
import firebaseConfig from '../apiKeys';

const steamKey = firebaseConfig.steamApiKey;

const getOwnedGames = (steamId) => new Promise((resolve, reject) => {
  axios
    .get(
      `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${steamKey}&steamid=${steamId}&format=json&include_appinfo=1.json`,
    )
    .then((response) => {
      resolve(response.data.response.games);
    })
    .catch(reject);
});

const getPlayerAchievements = (appId, steamId) => new Promise((resolve, reject) => {
  axios
    .get(
      `https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${appId}&key=${steamKey}&steamid=${steamId}&l=english.json`,
    )
    .then((response) => {
      resolve(response.data.playerstats.achievements);
    })
    .catch(reject);
});

export { getOwnedGames, getPlayerAchievements };
