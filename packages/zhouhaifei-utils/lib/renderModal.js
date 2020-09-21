"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyLatestModal = exports.destroyAllModal = exports.destroyModalUntil = exports.destroyModal = exports.renderModal = void 0;
var react_dom_1 = require("react-dom");
var domStack = [];
function renderModal(element) {
    var newDomElement = document.createElement('div');
    domStack.push(newDomElement);
    document.body.appendChild(newDomElement);
    react_dom_1.render(element, newDomElement);
    return newDomElement;
}
exports.renderModal = renderModal;
function destroyModal() {
    var oldDomElement = domStack.pop();
    if (oldDomElement && oldDomElement.parentElement) {
        react_dom_1.unmountComponentAtNode(oldDomElement);
        oldDomElement.parentElement.removeChild(oldDomElement);
    }
    return oldDomElement;
}
exports.destroyModal = destroyModal;
function destroyModalUntil(stopDom) {
    while (domStack.length) {
        if (destroyModal() === stopDom) {
            break;
        }
    }
}
exports.destroyModalUntil = destroyModalUntil;
function destroyAllModal() {
    while (destroyModal()) {
        // nothing to do
    }
}
exports.destroyAllModal = destroyAllModal;
function destroyLatestModal(count) {
    while (domStack.length && count > 0) {
        destroyModal();
        count -= 1;
    }
}
exports.destroyLatestModal = destroyLatestModal;
