import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    // GitHubPagesにデプロイする際に base の指定が必須
    // https://vitepress.dev/reference/site-config#base
    base: '/vite_press_demo/',
    title: "仕様書デモ",
    description: "VitePressで仕様書を管理できるか",
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: 'Home', link: '/' },
        {
          text: 'サンプル画面',
          items: [
            { text: '機能一覧', link: '/functions' },
            { text: '画像添付サンプル', link: '/images' },
          ]
        }
      ],

      sidebar: [
        { text: 'Home', link: '/' },
        {
          text: 'サンプル画面',
          items: [
            { text: '機能一覧', link: '/functions' },
            { text: '画像添付サンプル', link: '/images' },
          ]
        }
      ],

      socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      ]
    },
  })
)
