import { getScores, postScore } from './board.js';
import { Elements } from './elements.js';

const onready = async () => {
  await getScores();

  Elements.form.addEventListener('submit', postScore);

  Elements.refresh.addEventListener('click', getScores);
};

export default onready;
