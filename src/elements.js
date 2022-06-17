export class Elements {
  static get scoreList() {
    return document.querySelector('.scores');
  }

  static get form() {
    return document.querySelector('form');
  }

  static get refresh() {
    return document.querySelector('.refresh-btn');
  }

  static get submit() {
    return document.querySelector('button[type=\'submit\']');
  }
}

/**
 *
 * @param {String} selector
 * @param {HTMLElement} parentTree
 * @returns
 */
export const $select = (selector, parentTree = document.body) => parentTree.querySelector(selector);
