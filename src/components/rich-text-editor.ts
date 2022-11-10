import { LitElement, css, html, nothing } from "lit";
import { customElement, query, state } from "lit/decorators.js";

import { Editor, JSONContent } from "@tiptap/core";
import cssStyle from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import htmlStyle from "highlight.js/lib/languages/xml";

import { lowlight } from "lowlight/lib/core";
import startDocJson from "./startdoc.json";
import "./rte-fixed-menu";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import { Syntax, Icons } from "../global-styles.js";
import "./blog-list";

@customElement("rich-text-editor")
export class RichTextEditorElement extends LitElement {
  @query("#rte")
  rte!: HTMLElement;

  @query("#rte-readonly")
  rteReadonly!: HTMLElement;

  @state()
  editor!: Editor;

  @state()
  editorReadOnly!: Editor;

  @state()
  editorJSON?: JSONContent;

  @state()
  showJSON = false;

  blogList = Image.extend({
    name: "blogList",
    parseHTML() {
      return [
        {
          tag: "blog-list",
        },
      ];
    },
    renderHTML({ HTMLAttributes }) {
      return ["blog-list", HTMLAttributes];
    },
  });

  extensions = [
    this.blogList,
    StarterKit.configure({
      codeBlock: false,
    }),
    Link,
    Image,
    Underline,
    CodeBlockLowlight.configure({
      lowlight,
      defaultLanguage: "js",
    }),
    TextAlign.configure({
      types: ["heading", "paragraph"],
    }),
  ];

  connectedCallback(): void {
    super.connectedCallback();

    lowlight.registerLanguage("html", htmlStyle);
    lowlight.registerLanguage("css", cssStyle);
    lowlight.registerLanguage("js", js);
    lowlight.registerLanguage("ts", ts);

    this.addEventListener("drop", (e: DragEvent) => e.preventDefault());

    requestAnimationFrame(() => {
      this.editor = new Editor({
        element: this.rte,
        extensions: this.extensions,
        content: startDocJson,
        injectCSS: false,
        onUpdate: ({ editor }) => {
          this.editorReadOnly.commands.setContent(editor.getHTML());
          this.editorJSON = editor.getJSON();
        },
      });

      this.editor.commands.focus();
      this.editorJSON = this.editor.getJSON();

      this.editorReadOnly = new Editor({
        element: this.rteReadonly,
        extensions: this.extensions,
        content: this.editor.getHTML(),
        injectCSS: false,
        editable: false,
      });
    });
  }

  render() {
    return html`
      <div id="rte" class="rte-renderer">
        <rte-fixed-menu .editor=${this.editor}></rte-fixed-menu>
      </div>

      <button id="json-toggle" @click=${() => (this.showJSON = !this.showJSON)}>
        Toggle JSON
      </button>
      <div
        id="rte-readonly"
        class="rte-renderer ${this.showJSON ? "hide" : ""}"
      ></div>
      <div
        id="json-overlay"
        class="rte-renderer ${this.showJSON ? "" : "hide"}"
      >
        <pre>
            ${this.editor ? JSON.stringify(this.editorJSON, null, 2) : nothing}
        </pre
        >
      </div>
    `;
  }

  static styles = [
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
      .rte-renderer {
        max-width: 1200px;
        border-radius: 4px;
        margin: 0 auto;
        background-color: var(--color-surface);
        box-shadow: var(--shadow-1);
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        padding: 128px;
        overflow: clip;
      }
      #rte {
        position: relative;
      }
      #json-overlay {
        padding: 32px;
      }
      .ProseMirror {
        height: 100%;
        width: 100%;
        outline: none;
        white-space: pre-wrap;
      }
      .ProseMirror p {
        margin-top: 0;
        margin-bottom: 0.1rem;
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

      pre {
        white-space: pre-wrap;
      }

      blockquote {
        border-left: 4px solid var(--color-primary);
        padding: 16px;
        font-style: italic;
      }

      .rte-renderer pre {
        background: var(--color-background);
        border-radius: 0.5rem;
        padding: 0.75rem 1rem;
        border: 1px solid var(--color-border);
      }

      .rte-renderer code {
        font-family: "Roboto Mono", monospace;
        background: none;
        color: inherit;
        font-size: 0.8rem;
        padding: 0;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "rich-tex": RichTextEditorElement;
  }
}
