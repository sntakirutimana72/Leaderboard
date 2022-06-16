export const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

export const API_NAME = 'sntakirutimana72-leaderboard';

export const postData = (url, data = {}) => fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});
