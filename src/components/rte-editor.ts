import { LitElement, css, html, nothing } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';

import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';

import { lowlight } from 'lowlight/lib/core';
import cssStyle from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import htmlStyle from 'highlight.js/lib/languages/xml';

import { Syntax } from '../global-styles.js';
import { RTEStyles } from './rte-editor.styles.js';
import BlogList from './custom.node';
import startDocJson from './startdoc.json';
import './blog-list';
import './rte-fixed-menu';

@customElement('rte-editor')
export class RichTextEditorElement extends LitElement {
	@query('#rte')
	rte!: HTMLElement;

	@state()
	editor!: Editor;

	extensions = [
		BlogList,
		StarterKit.configure({
			codeBlock: false,
		}),
		Link,
		Image,
		Underline,
		CodeBlockLowlight.configure({
			lowlight,
			defaultLanguage: 'js',
		}),
		TextAlign.configure({
			types: ['heading', 'paragraph'],
		}),
	];

	connectedCallback(): void {
		super.connectedCallback();

		lowlight.registerLanguage('html', htmlStyle);
		lowlight.registerLanguage('css', cssStyle);
		lowlight.registerLanguage('js', js);
		lowlight.registerLanguage('ts', ts);

		requestAnimationFrame(() => {
			this.editor = new Editor({
				element: this.rte,
				extensions: this.extensions,
				content: startDocJson,
				injectCSS: false,
				onUpdate: () => this._handleUpdate(),
			});

			this.editor.commands.focus();
			this._handleUpdate();
		});
	}

	private _handleUpdate() {
		this.dispatchEvent(
			new CustomEvent('update', {
				detail: {
					editor: this.editor,
					extensions: this.extensions,
					json: this.editor.getJSON(),
				},
			})
		);
	}

	render() {
		return html`
			<div id="rte" class="rte-renderer">
				<rte-fixed-menu .editor=${this.editor}></rte-fixed-menu>
			</div>
		`;
	}

	static styles = [RTEStyles, Syntax, css``];
}

declare global {
	interface HTMLElementTagNameMap {
		'rte-editor': RichTextEditorElement;
	}
}
