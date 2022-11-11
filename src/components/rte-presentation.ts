import { LitElement, css, html } from "lit";
import { customElement, query, state } from "lit/decorators.js";

import { Editor, Extension, JSONContent } from "@tiptap/core";

import { Syntax } from "../global-styles.js";
import { RTEStyles } from "./rte-editor.styles.js";
import "./rte-editor";
import "./blog-list";
import "./rte-fixed-menu";

@customElement("rte-presentation")
export class RTEPresentationElement extends LitElement {
  @query("#rte-readonly")
  editorElement!: HTMLElement;

  @state()
  editor?: Editor;

  @state()
  editorJSON: JSONContent = {};

  @state()
  showJSON = false;

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener("drop", (e: DragEvent) => e.preventDefault());
  }

  private _handleUpdate(event: CustomEvent) {
    this.editorJSON = event.detail.json;

    if (!this.editor) {
      this._initEditor(event.detail.extensions);
    } else {
      this.editor.commands.setContent(event.detail.json);
    }
  }

  private _initEditor(extensions: Extension[]) {
    this.editor = new Editor({
      element: this.editorElement,
      extensions: extensions,
      content: this.editorJSON,
      injectCSS: false,
    });
  }

  render() {
    return html`
      <rte-editor @update=${this._handleUpdate}></rte-editor>
      <div
        id="rte-readonly"
        class="rte-renderer ${this.showJSON ? "hide" : ""}"
      ></div>
      <button id="json-toggle" @click=${() => (this.showJSON = !this.showJSON)}>
        Toggle JSON
      </button>
      <div
        id="json-overlay"
        class="rte-renderer ${this.showJSON ? "" : "hide"}"
      >
        <pre>
            ${JSON.stringify(this.editorJSON, null, 2)}
        </pre
        >
      </div>
    `;
  }

  static styles = [
    RTEStyles,
    Syntax,
    css`
      :host {
        color: var(--color-text);
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 18px;
        padding: 18px;
        box-sizing: border-box;
        overflow-y: auto;
      }
      #rte {
        position: relative;
      }
      #json-overlay {
        padding: 32px;
      }
      .hide {
        display: none;
      }
      #json-toggle {
        position: absolute;
        top: 18px;
        right: 18px;

        background-color: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: 4px;
        padding: 8px 16px;
        cursor: pointer;
        box-shadow: var(--shadow-1);
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "rte-presentation": RTEPresentationElement;
  }
}
