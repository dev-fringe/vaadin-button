import {LitElement, html} from 'lit-element';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import { customElement, state } from 'lit/decorators.js';
import  '@vaadin/vaadin-lumo-styles/color.js';
import  '@vaadin/vaadin-lumo-styles/typography.js';
import  '@vaadin/vaadin-lumo-styles/sizing.js';
import  '@vaadin/vaadin-lumo-styles/spacing.js';
import  '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/typography.js';

// Import the <custom-style> element from Polymer and include
// the style sheets in the global scope
import '@polymer/polymer/lib/elements/custom-style.js';
import  '@vaadin/vaadin-lumo-styles/presets/compact.js';
@customElement('demo-app')
export class DemoApp extends LitElement {
    @state()
    private counter = 0;

    render() {
        return html`
        <vaadin-horizontal-layout theme="spacing" style="align-items: baseline">
        <vaadin-button @click="${() => this.counter++}">Button</vaadin-button>
        <p>Clicked ${this.counter} times</p>
      </vaadin-horizontal-layout>
      <vaadin-horizontal-layout theme="spacing">
      <vaadin-button theme="primary">Primary</vaadin-button>
      <vaadin-button theme="secondary">Secondary</vaadin-button>
      <vaadin-button theme="tertiary">Tertiary</vaadin-button>
    </vaadin-horizontal-layout>   
        `;
    }
}