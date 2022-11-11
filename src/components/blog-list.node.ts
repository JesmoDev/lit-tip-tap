import { Content, JSONContent, mergeAttributes, Node, nodeInputRule } from '@tiptap/core';

declare module '@tiptap/core' {
	interface Commands<ReturnType> {
		blogList: {
			addCustom: (tag: string) => ReturnType;
		};
	}
}

export default Node.create({
	name: 'blogList',
	draggable: true,

	renderHTML({ HTMLAttributes }) {
		console.log('renderHTML', HTMLAttributes);

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
			addCustom:
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
