import { Content, JSONContent, mergeAttributes, Node, nodeInputRule, wrappingInputRule } from '@tiptap/core';

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
	group: 'block',
	addAttributes() {
		return {
			tag: {
				default: '',
			},
		};
	},

	renderHTML({ HTMLAttributes }) {
		return [HTMLAttributes.tag, HTMLAttributes];
	},
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
