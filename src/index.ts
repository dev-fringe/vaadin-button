import {LitElement, html} from 'lit-element';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-button/vaadin-button.js';

class DemoApp extends LitElement {
    render() {
        return html`
            <div>
                <vaadin-text-field id="firstInput"></vaadin-text-field>
                <vaadin-button id="helloButton">클릭 me!</vaadin-button>
            </div>`;
    }
}

customElements.define('demo-app', DemoApp);