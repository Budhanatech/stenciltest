import { r as registerInstance, h } from './index-d3ce77b9.js';
function format(first, middle, last) {
    return ((first || '') +
        (middle ? " " + middle : '') +
        (last ? " " + last : ''));
}
var myComponentCss = ":host{display:block}";
var MyComponent = /** @class */ (function () {
    function MyComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    MyComponent.prototype.getText = function () {
        return format(this.first, this.middle, this.last);
    };
    MyComponent.prototype.render = function () {
        return h("div", null, "Hello, World! I'm ", this.getText());
    };
    return MyComponent;
}());
MyComponent.style = myComponentCss;
var myFirstComponentCss = ":host{display:block}";
var MyFirstComponent = /** @class */ (function () {
    function MyFirstComponent(hostRef) {
        registerInstance(this, hostRef);
        this.name = 'somename';
    }
    MyFirstComponent.prototype.render = function () {
        return (
        // <Host>
        //   <slot></slot>
        // </Host>
        h("p", null, "My name is ", this.name));
    };
    return MyFirstComponent;
}());
MyFirstComponent.style = myFirstComponentCss;
export { MyComponent as my_component, MyFirstComponent as my_first_component };
