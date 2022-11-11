import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import Bold from '../assets/icons/bold.svg';
import AlignLeft from '../assets/icons/align-left.svg';
import AlignRight from '../assets/icons/align-right.svg';
import AlignCenter from '../assets/icons/align-center.svg';
import AlignJustify from '../assets/icons/align-justify.svg';
import Italic from '../assets/icons/italic.svg';
import Underline from '../assets/icons/underline.svg';
import Strikethrough from '../assets/icons/strikethrough.svg';
import H1 from '../assets/icons/h-1.svg';
import H2 from '../assets/icons/h-2.svg';
import H3 from '../assets/icons/h-3.svg';
import H4 from '../assets/icons/h-4.svg';
import H5 from '../assets/icons/h-5.svg';
import Paragraph from '../assets/icons/paragraph.svg';
import Blockquote from '../assets/icons/double-quotes-l.svg';
import Code from '../assets/icons/code-view.svg';
import BulletList from '../assets/icons/list-unordered.svg';
import OrderedList from '../assets/icons/list-ordered.svg';
import HorizontalRule from '../assets/icons/separator.svg';
import Image from '../assets/icons/image-fill.svg';
import { Editor } from '@tiptap/core';

@customElement('rte-fixed-menu')
export class RTEFixedMenuElement extends LitElement {
	@state()
	actions = [
		{
			name: 'paragraph',
			icon: Paragraph,
			command: () => this.editor?.chain().focus().setParagraph().run(),
		},
		{
			name: 'bold',
			icon: Bold,
			command: () => this.editor?.chain().focus().toggleBold().run(),
		},
		{
			name: 'italic',
			icon: Italic,
			command: () => this.editor?.chain().focus().toggleItalic().run(),
		},
		{
			name: 'underline',
			icon: Underline,
			command: () => this.editor?.chain().focus().toggleUnderline().run(),
		},
		{
			name: 'strikethrough',
			icon: Strikethrough,
			command: () => this.editor?.chain().focus().toggleStrike().run(),
		},
		{
			name: 'heading-1',
			icon: H1,
			command: () => this.editor?.chain().focus().toggleHeading({ level: 1 }).run(),
		},
		{
			name: 'heading-2',
			icon: H2,
			command: () => this.editor?.chain().focus().toggleHeading({ level: 2 }).run(),
		},
		{
			name: 'heading-3',
			icon: H3,
			command: () => this.editor?.chain().focus().toggleHeading({ level: 3 }).run(),
		},
		{
			name: 'heading-4',
			icon: H4,
			command: () => this.editor?.chain().focus().toggleHeading({ level: 4 }).run(),
		},
		{
			name: 'heading-5',
			icon: H5,
			command: () => this.editor?.chain().focus().toggleHeading({ level: 5 }).run(),
		},
		{
			name: 'blockquote',
			icon: Blockquote,
			command: () => this.editor?.chain().focus().toggleBlockquote().run(),
		},
		{
			name: 'code',
			icon: Code,
			command: () => this.editor?.chain().focus().toggleCodeBlock().run(),
		},
		{
			name: 'bullet-list',
			icon: BulletList,
			command: () => this.editor?.chain().focus().toggleBulletList().run(),
		},
		{
			name: 'ordered-list',
			icon: OrderedList,
			command: () => this.editor?.chain().focus().toggleOrderedList().run(),
		},
		{
			name: 'horizontal-rule',
			icon: HorizontalRule,
			command: () => this.editor?.chain().focus().setHorizontalRule().run(),
		},
		{
			name: 'align-left',
			icon: AlignLeft,
			command: () => this.editor?.chain().focus().setTextAlign('left').run(),
		},
		{
			name: 'align-center',
			icon: AlignCenter,
			command: () => this.editor?.chain().focus().setTextAlign('center').run(),
		},
		{
			name: 'align-right',
			icon: AlignRight,
			command: () => this.editor?.chain().focus().setTextAlign('right').run(),
		},
		{
			name: 'align-justify',
			icon: AlignJustify,
			command: () => this.editor?.chain().focus().setTextAlign('justify').run(),
		},
		{
			name: 'image',
			icon: Image,
			command: () => {
				const url = prompt('Enter the image URL');
				if (url) {
					this.editor?.chain().focus().setImage({ src: url }).run();
				}
			},
		},
	];

	@property()
	editor?: Editor;

	render() {
		return html`
			${this.actions.map(
				(action) => html`
					<button @click=${action.command} title=${action.name}>
						<img src=${action.icon} alt=${action.name} />
					</button>
				`
			)}
		`;
	}

	static styles = css`
		:host {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(32px, 1fr));
			gap: 8px;
			position: sticky;
			margin: -128px -128px 90px;
			top: -18px;
			left: 0px;
			right: 0px;
			border-bottom: 2px solid var(--color-border);
			height: 32px;
			padding: 8px;
			background-color: var(--color-surface);
		}

		button {
			border: none;
			background: none;
			cursor: pointer;
			padding: 4px;
			margin: 0;
			border-radius: 4px;
			box-sizing: border-box;
		}

		button img {
			width: 100%;
			height: 100%;
		}

		button:hover {
			background-color: var(--color-background);
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		'rte-fixed-menu': RTEFixedMenuElement;
	}
}
