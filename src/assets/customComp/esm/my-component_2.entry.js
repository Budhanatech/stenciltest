import { r as registerInstance, h } from './index-d3ce77b9.js';

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}

const myComponentCss = ":host{display:block}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return h("div", null, "Hello, World! I'm ", this.getText());
    }
};
MyComponent.style = myComponentCss;

const myFirstComponentCss = ":host{display:block}";

const MyFirstComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.name = 'somename';
    }
    render() {
        return (
        // <Host>
        //   <slot></slot>
        // </Host>
        h("p", null, "My name is ", this.name));
    }
};
MyFirstComponent.style = myFirstComponentCss;

export { MyComponent as my_component, MyFirstComponent as my_first_component };
