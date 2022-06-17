import { API_URL, postData } from './api.js';
import { Elements, $select } from './elements.js';

const renderScore = ({ user, score }) => {
  const element = document.createElement('li');
  element.textContent = `${user}: ${score}`;

  return element;
};

const sortByHighestScore = (...scores) => {
  for (let l = 1; l < scores.length; l++) {
    let current = scores[l];
    let j = l - 1;

    while ((j > -1) && (current.score > scores[j].score)) {
      scores[j + 1] = scores[j];
      j--;
    }
    scores[j + 1] = current;
  }
  return scores;
};

const getAdjacentSibling = ({score}) => Array.from(Elements.scoreList.children).find(
  ({textContent}) => score > parseInt(textContent.split(':').pop(), 10)
);

const flagTrigger = (trigger) => {
  const { disabled = false } = trigger;
  trigger.disabled = !disabled;

  $select('span', trigger).classList.toggle('hidden');
  $select('.lds-dots', trigger).classList.toggle('hidden');
};

const populateScore = ({ result: scores }) => {
  const listView = Elements.scoreList;
  listView.innerHTML = '';
  sortByHighestScore(...scores).forEach((player) => listView.appendChild(renderScore(player)));

  flagTrigger(Elements.refresh);
};

export async function postScore(evt) {
  evt.preventDefault();
  flagTrigger(Elements.submit);

  const player = {
    user: this.elements.user.value,
    score: parseInt(this.elements.score.value, 10),
  };
  const response = await postData(API_URL, player);
  const { result } = await response.json();

  if (result === 'Leaderboard score created correctly.') {
    this.reset();

    const adjacentSibling = getAdjacentSibling(player);
    const newSibling = renderScore(player);

    if (adjacentSibling === null) Elements.scoreList.appendChild(newSibling);

    else adjacentSibling.insertAdjacentElement('beforebegin', newSibling);
  }

  flagTrigger(Elements.submit);
}

export const getScores = async () => {
  flagTrigger(Elements.refresh);

  const response = await fetch(API_URL);
  const result = await response.json();

  populateScore(result);
};
