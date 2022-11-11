import Image from '@tiptap/extension-image';

export default Image.extend({
	name: 'blogList',
	parseHTML() {
		return [
			{
				tag: 'blog-list',
			},
		];
	},
	renderHTML({ HTMLAttributes }) {
		return ['blog-list', HTMLAttributes];
	},
});
