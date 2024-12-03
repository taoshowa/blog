import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://aifly.one',
	integrations: [mdx(), sitemap({
		// 忽略demos目录下页面的sitemap生成
		filter: (page) => !page.includes('demos')
	})],
	trailingSlash: 'never',
	build: {
		// 示例：在构建过程中生 成`page.html` 而不是 `page/index.html`。
		format: 'file'
	}
});
