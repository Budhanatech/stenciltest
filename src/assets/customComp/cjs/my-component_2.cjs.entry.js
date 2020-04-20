'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-91159be9.js');

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}

const myComponentCss = ":host{display:block}";

const MyComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return index.h("div", null, "Hello, World! I'm ", this.getText());
    }
};
MyComponent.style = myComponentCss;

const myFirstComponentCss = ":host{display:block}";

const MyFirstComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.name = 'somename';
    }
    render() {
        return (
        // <Host>
        //   <slot></slot>
        // </Host>
        index.h("p", null, "My name is ", this.name));
    }
};
MyFirstComponent.style = myFirstComponentCss;

exports.my_component = MyComponent;
exports.my_first_component = MyFirstComponent;
