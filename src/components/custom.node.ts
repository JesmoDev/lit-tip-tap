import { Content, JSONContent, mergeAttributes, Node, nodeInputRule } from '@tiptap/core';

declare module '@tiptap/core' {
	interface Commands<ReturnType> {
		customNode: {
			addCustomNode: (tag: string) => ReturnType;
		};
	}
}

export default Node.create({
	name: 'customNode',
	draggable: true,

	renderHTML({ HTMLAttributes }) {
		return [HTMLAttributes.tag, HTMLAttributes];
	},
	addAttributes() {
		return {
			tag: {
				default: '',
			},
		};
	},
	group: 'block',
	addCommands() {
		return {
			addCustomNode:
				(tag) =>
				({ commands }) => {
					return commands.insertContent({
						type: this.name,
						attrs: {
							tag: tag,
						},
					});
				},
		};
	},
});
