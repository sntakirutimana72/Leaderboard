import _ from 'lodash';
import './index.css';

function rootComponent() {
  const element = document.createElement('main');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(rootComponent());
