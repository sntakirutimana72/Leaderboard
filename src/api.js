export const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9r8y77GrUc6tYpR94O07/scores/';

export const postData = (url, data = {}) => fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});
