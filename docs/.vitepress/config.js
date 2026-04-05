import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'xf-push',
  description: 'FiveM 多渠道消息推送插件',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#6366f1' }],
  ],

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'xf-push',

    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/install' },
      { text: '功能配置', link: '/guide/config' },
      { text: '常见问题', link: '/faq' },
    ],

    sidebar: [
      {
        text: '📦 安装配置',
        items: [
          { text: '快速开始', link: '/guide/install' },
          { text: '基础配置', link: '/guide/config' },
        ]
      },
      {
        text: '🔧 功能模块',
        items: [
          { text: '玩家进出通知', link: '/guide/player-notify' },
          { text: 'TX Admin 事件', link: '/guide/txadmin' },
          { text: '心跳健康检查', link: '/guide/healthcheck' },
          { text: '定时公告推送', link: '/guide/scheduled' },
          { text: '消息聚合', link: '/guide/batching' },
          { text: '测试模式', link: '/guide/test' },
        ]
      },
      {
        text: '❓ 常见问题',
        link: '/faq'
      }
    ],

    footer: {
      text: 'xf-push / xf-pushplus | FiveM 多渠道消息推送插件',
      copyright: '© 2026 君临 | QQ：226666429'
    },

    socialLinks: [
      { icon: 'qq', link: 'tencent://226666429' }
    ]
  }
})
