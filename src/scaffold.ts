import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('scaffold-element')
export class ScaffoldElement extends LitElement {
	render() {
		return html``;
	}

	static styles = css``;
}

declare global {
	interface HTMLElementTagNameMap {
		'scaffold-element': ScaffoldElement;
	}
}
