import React from 'react';
import { render as reactDomRender, unmountComponentAtNode } from 'react-dom';

const domStack: HTMLElement[] = [];

export function renderModal(element: React.ReactElement): HTMLElement {
  const newDomElement = document.createElement('div');
  domStack.push(newDomElement);
  document.body.appendChild(newDomElement);
  reactDomRender(element, newDomElement);
  return newDomElement;
}

export function destroyModal(): HTMLElement | undefined {
  const oldDomElement = domStack.pop();
  if (oldDomElement && oldDomElement.parentElement) {
    unmountComponentAtNode(oldDomElement);
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
