import { BOARD_SCORES } from './storage.js';

const renderScoreTemplate = (name, score) => {;
  const scoreElement = document.createElement('li');
  scoreElement.textContent = `${name}: ${score}`;

  return scoreElement;
};

export const populateScore = () => {
  return new Promise((resolve, reject) => {
    const scoreView = document.querySelector('.scores');
    Object.entries(BOARD_SCORES).forEach(
      ([name, score]) => scoreView.appendChild(renderScoreTemplate(name, score))
    );
    resolve();
  });
};
