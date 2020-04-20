import { Component, h, Prop } from '@stencil/core';
export class MyFirstComponent {
    constructor() {
        this.name = 'somename';
    }
    render() {
        return (
        // <Host>
        //   <slot></slot>
        // </Host>
        h("p", null,
            "My name is ",
            this.name));
    }
    static get is() { return "my-first-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["my-first-component.css"]
    }; }
    static get styleUrls() { return {
        "$": ["my-first-component.css"]
    }; }
    static get properties() { return {
        "name": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "name",
            "reflect": false,
            "defaultValue": "'somename'"
        }
    }; }
}
