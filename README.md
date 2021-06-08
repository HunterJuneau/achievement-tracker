# Achievement Tracker

## Planning

[ERD](https://dbdiagram.io/d/606d049decb54e10c33f0196)

[Wireframe](https://www.figma.com/file/zyEKuuJzwq1R8pZr4SvO1j/Achievement-Tracker?node-id=0%3A1)

## Steam API Responses

### GetOwnedGames

For geting the APP ID of user's games. Could also be used to display playtime of user's games.

```
{
    "response": {
        "game_count": 492,
        "games": [
            {
                "appid": 10,
                "playtime_forever": 0,
                "playtime_windows_forever": 0,
                "playtime_mac_forever": 0,
                "playtime_linux_forever": 0
            },
            {
                "appid": 80,
                "playtime_forever": 0,
                "playtime_windows_forever": 0,
                "playtime_mac_forever": 0,
                "playtime_linux_forever": 0
            },
            {
                "appid": 100,
                "playtime_forever": 0,
                "playtime_windows_forever": 0,
                "playtime_mac_forever": 0,
                "playtime_linux_forever": 0
            }...
```
### GetSchemaForGame

For getting the achievement stats like name, description, icon, etc.

```
"game": {
        "gameName": "Rocket League BETA",
        "gameVersion": "46",
        "availableGameStats": {
            "achievements": [
                {
                    "name": "Virtuoso",
                    "defaultvalue": 0,
                    "displayName": "Virtuoso",
                    "hidden": 0,
                    "description": "Unlock All Original Achievements",
                    "icon": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/252950/d63287a74492218ac97000af0147f6e40bd51f1d.jpg",
                    "icongray": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/252950/18817c941e75bdc1c4b1ef4cafb50e57741fa6ff.jpg"
                },
                {
                    "name": "Stocked",
                    "defaultvalue": 0,
                    "displayName": "Stocked",
                    "hidden": 0,
                    "description": "Collect 150 Items",
                    "icon": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/252950/689d4370df62dab7b3f904d4f7b182310958efd2.jpg",
                    "icongray": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/252950/9e446f8213d7a3518163532790e137b448bc0713.jpg"
                },
                {
                    "name": "FarFarAway",
                    "defaultvalue": 0,
                    "displayName": "Far, Far Away...",
                    "hidden": 0,
                    "description": "Drive a total of 50 km",
                    "icon": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/252950/c3c40f439d804bbcf892229ed76b2bedb25058c7.jpg",
                    "icongray": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/252950/5d6a645124bef11bc0adcf69172fd39c6628be5e.jpg"
                }...
```

### GetPlayerAchievements

For checking what achievements the user has completed and when they were completed.

```
{
    "playerstats": {
        "steamID": "76561198092859323",
        "gameName": "Rocket League",
        "achievements": [
            {
                "apiname": "Virtuoso",
                "achieved": 1,
                "unlocktime": 1495308948
            },
            {
                "apiname": "Stocked",
                "achieved": 1,
                "unlocktime": 1451203240
            },
            {
                "apiname": "FarFarAway",
                "achieved": 1,
                "unlocktime": 1451345072
            }...
```

### AppDetails

For getting info on Steam games

```

  "218620": {
    "success": true,
    "data": {
      "type": "game",
      "name": "PAYDAY 2",
      "steam_appid": 218620,
      "required_age": "18",
      "is_free": false,
      "controller_support": "full",
      "dlc": [
        1619070,
        1555040,
        1555050...
```
