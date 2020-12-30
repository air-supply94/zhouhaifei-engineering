import React from 'react';
import ReactDOM from 'react-dom';

const domStack: HTMLElement[] = [];

export function renderModal(element: React.ReactElement): HTMLElement {
  const newDomElement = document.createElement('div');
  domStack.push(newDomElement);
  document.body.appendChild(newDomElement);
  ReactDOM.render(element, newDomElement);
  return newDomElement;
}

export function destroyModal(): HTMLElement | undefined {
  const oldDomElement = domStack.pop();
  if (oldDomElement && oldDomElement.parentElement) {
    ReactDOM.unmountComponentAtNode(oldDomElement);
    oldDomElement.parentElement.removeChild(oldDomElement);
  }
  return oldDomElement;
}

export function destroyModalUntil(stopDom: HTMLElement): void {
  while (domStack.length) {
    if (destroyModal() === stopDom) {
      break;
    }
  }
}

export function destroyAllModal(): void {
  while (destroyModal()) {
    // nothing to do
  }
}

export function destroyLatestModal(count: number): void {
  while (domStack.length && count > 0) {
    destroyModal();
    count -= 1;
  }
}
