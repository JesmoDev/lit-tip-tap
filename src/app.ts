import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "./components/rich-text-editor";

@customElement("app-element")
export class AppElement extends LitElement {
  render() {
    return html`<rich-text-editor></rich-text-editor>`;
  }
  static styles = css`
    :host {
      display: block;
      height: 100vh;
      width: 100vw;
      color: var(--color-text);
      background-color: var(--color-background);
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "app-element": AppElement;
  }
}
