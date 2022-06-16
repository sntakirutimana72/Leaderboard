import { populateScore } from './board.js';

const onready = () => {
  populateScore().then(() => {});
};

export default onready;
