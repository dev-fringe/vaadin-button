import {LitElement, html, customElement } from 'lit-element';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-button/vaadin-button.js';

@customElement('lit-hello')
class DemoApp extends LitElement {
    render() {
        return html`
            <div>
                <vaadin-text-field id="firstInput"></vaadin-text-field>
                <vaadin-button id="helloButton">클릭 me!</vaadin-button>
            </div>`;
    }
}