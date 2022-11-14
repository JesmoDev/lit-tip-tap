import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('big-header')
export class BigHeaderElement extends LitElement {
	render() {
		return html`
			<div>
				<h1>Welcome to the Lit Tip Tap Demo!</h1>
				<p>Here's a showcase of tip tap written in lit with custom blocks</p>
			</div>
		`;
	}

	static styles = [
		css`
			:host {
				display: flex;
				flex-direction: column;
				background-image: url('https://static.identity.umbraco.com/azure-ad-b2c/assets/images/background-login.svg');
				background-size: cover;
				margin: -128px;
				margin-bottom: 0;
				color: white;
				padding: 64px;
			}

			div {
				display: flex;
				flex-direction: column;
				height: 200px;
			}
		`,
	];
}

declare global {
	interface HTMLElementTagNameMap {
		'big-header': BigHeaderElement;
	}
}
