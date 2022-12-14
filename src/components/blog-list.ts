import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import Refresh from '../assets/icons/refresh-line.svg';

@customElement('blog-list')
export class BlogListElement extends LitElement {
	blogs = [
		{
			title: 'My First blog',
			image: 'https://i.picsum.photos/id/483/300/200.jpg?hmac=36AfCnRl-Q3x7op1D-N7PmguK47nNm4or6JCX5UgT18',
			content: 'deserunt eaque voluptatum accusantium dolorem molestiae natus at autem eum ducimus, sunt nobis!',
		},
		{
			title: 'New Tech',
			image: 'https://i.picsum.photos/id/835/300/200.jpg?hmac=6prW6m5NwhylSB-z_Eua5kDJCj_bVP9kNvn75jipl6U',
			content:
				'Eos et quisquam recusandae quaerat alias dolores suscipit, deserunt eaque voluptatum accusantium dolorem molestiae natus at autem eum ducimus, sunt nobis accusamus!',
		},
		{
			title: 'A nice day!',
			image: 'https://i.picsum.photos/id/128/300/200.jpg?hmac=3HvAZLJ0Qw_qAfnBLf5X8t0-kHyFBLuYMGGzPONjokU',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit, deserunt eaque voluptatum accusantium dolorem molestiae natus at autem eum ducimus, sunt nobis accusamus!',
		},
		{
			title: 'Another one',
			image: 'https://i.picsum.photos/id/460/300/200.jpg?hmac=BnPkmWAxs-vklFl1lq0xhDAESNUZzynRHPtgbhU4vl0',
			content:
				'Ur adipisicing elit, deserunt eaque voluptatum accusantium dolorem molestiae natus at autem eum ducimus, sunt nobis accusamus!',
		},
		{
			title: 'My blog post',
			image: 'https://i.picsum.photos/id/908/300/200.jpg?hmac=LA1p9bVQc1HGV9GlGc98YnSM0L_VJe3AxOFUa0vF7JY',
			content:
				'Dolor sit amet consectetur adipisicing elit, deserunt eaque voluptatum accusantium dolorem molestiae natus at autem eum ducimus, sunt nobis accusamus!',
		},
		{
			title: 'A trip to the lake',
			image: 'https://i.picsum.photos/id/569/300/200.jpg?hmac=WYBCYTFYaZQusFUsEn3xihlt-q7kbnkAWBXSJ26tiMo',
			content:
				'Elit, deserunt eaque voluptatum accusantium dolorem molestiae natus at autem eum ducimus, sunt nobis accusamus!',
		},
	];

	@state()
	showcasedBlogs = this._getRandomBlogs(3);

	private _getRandomBlogs(count: number) {
		const shuffled = this.blogs.sort(() => 0.5 - Math.random());

		return shuffled.slice(0, count);
	}

	private _refreshBlogs() {
		this.showcasedBlogs = this._getRandomBlogs(3);
	}

	render() {
		return html`
			<div id="top-bar">
				<h2>New Blogs</h2>
				<button @click=${this._refreshBlogs}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
						<path fill="none" d="M0 0h24v24H0z" />
						<path
							d="M5.463 4.433A9.961 9.961 0 0 1 12 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 0 0 6.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0 0 13.54 5.772l.997 1.795z"
							fill="currentColor" />
					</svg>
				</button>
			</div>
			<div id="blogs">
				${repeat(
					this.showcasedBlogs,
					(blog) => blog.title,
					(blog) => html`
						<div class="blog">
							<h3>${blog.title}</h3>
							<img src="${blog.image}" />
							<p>${blog.content}</p>
						</div>
					`
				)}
			</div>
		`;
	}

	static styles = [
		css`
			:host {
				color: var(--color-text);
				display: flex;
				gap: 16px;
				flex-direction: column;
				padding: 32px;
				box-sizing: border-box;
				background-color: var(--color-background);
				border: 1px solid var(--color-border);
				border-radius: 4px;
			}

			#blogs {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				gap: 16px;
			}

			#top-bar {
				display: flex;
				justify-content: space-between;
			}

			.blog {
				display: flex;
				flex-direction: column;
				background-color: var(--color-surface);
				height: 400px;
				box-shadow: var(--shadow-1);
				border-radius: 4px;
			}

			h2 {
				margin: 0;
			}

			.blog h2,
			.blog h3,
			.blog p {
				margin: 16px;
			}
			.blog p {
				white-space: pre-wrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			img {
				width: 100%;
			}

			button {
				color: var(--color-text);
				background-color: var(--color-surface);
				border: 1px solid var(--color-border);
				border-radius: 4px;
				box-shadow: var(--shadow-1);
				margin: 0;
				box-sizing: border-box;
				display: flex;
				padding: 8px;
				width: 42px;
				cursor: pointer;
			}
			button:hover {
				color: var(--color-primary);
			}
		`,
	];
}

declare global {
	interface HTMLElementTagNameMap {
		'blog-list': BlogListElement;
	}
}
