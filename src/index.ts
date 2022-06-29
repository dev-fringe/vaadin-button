import { LitElement, html, query } from 'lit-element';
import { customElement} from 'lit-element/decorators.js';
import '@vaadin/vaadin-grid/vaadin-grid';
import '@vaadin/vaadin-grid/vaadin-grid-column';

@customElement('demo-app')
export class DemoApp extends LitElement {

    @query('#grid')
    private grid: any;

    firstUpdated() {
        fetch(`https://demo.vaadin.com/demo-data/1.0/people?count=200`)
            .then((r) => r.json())
            .then((data) => {
                this.grid.items = data.result;
            });
    }

    render() {
        return html`
            <div>
                <vaadin-grid id="grid">
                    <vaadin-grid-column header="First name" path="firstName"></vaadin-grid-column>
                    <vaadin-grid-column header="Last name" path="lastName"></vaadin-grid-column>
                    <vaadin-grid-column header="Email" path="email"></vaadin-grid-column>
                </vaadin-grid>
            </div>
        `;
    }
}