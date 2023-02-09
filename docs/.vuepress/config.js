const sidebar = {
  "/gongchenghua/": [
    "/gongchenghua/vite.md",
    // '/gongchenghua/cli.md',
    "/gongchenghua/openapi.md",
    "/gongchenghua/pwa.md",
    "/gongchenghua/小程序.md",
    "/gongchenghua/qiankun.md",
    "/gongchenghua/createReactApp.md",
  ],
  "/mianshi/": [
    "/mianshi/",
    "/mianshi/mianshi-react.md",
    "/mianshi/mianshi-vue.md",
    "/mianshi/mianshi-cssHtml.md",
  ],
  "/tool/": [
    "/tool/vscode.md",
    "/tool/",
    "/tool/yarn.md",
    "/tool/RegExp.md",
    "/tool/github.md",
    "/tool/typescript.md",
  ],
  "/vue/": [
    "/vue/",
    "/vue/slot.md",
    "/vue/event.md",
    "/vue/props.md",
    "/vue/setup.md",
    "/vue/ClassStyle.md",
    "/vue/ProvideInject.md",
    "/vue/directive.md",
    "/vue/element-plus.md",
  ],
  "/react/": [
    "/react/",
    "/react/mobx.md",
    "/react/react-router-dom.md",
    "/react/hooks.md",
    "/react/ahooks.md",
    "/react/AntDesignPro.md",
  ],
  "/css/": [
    "/css/",
    "/css/less.md",
    "/css/sass.md",
    "/css/flex.md",
    "/css/css-module.md",
    "/css/animation.md",
    "/css/selector.md",
    "/css/transform.md",
    "/css/background.md",
  ],
  "/js/": [
    "/js/node.md",
    "/js/element.md",
    "/js/document.md",
    "/js/nodeList.md",
    "/js/htmlCollection.md",
    "/js/event.md",
    "/js/request.md",
    "/js/",
  ],
  "/other/": [
    "/other/",
    "/other/api.md",
    "/other/suanfa.md",
    "/other/package.md",
    "/other/GraphQL.md",
  ],
};

module.exports = {
  // dest: 'build',
  // 配置插件  plugins: ["demo-container"],
  plugins: [
    [
      "@vuepress/search",
      {
        searchMaxSuggestions: 10,
      },
    ],
  ],
  head: [
    ["link", { rel: "icon", href: "/img/avatar.png" }],
    ["link", { rel: "stylesheet", href: "/scroll.css" }],
  ],
  title: "ZShuai",
  description: "ZShuai's Blog ",
  theme: "gungnir",
  port: "8880",
  evergreen: true,
  themeConfig: {
    hitokoto: true,
    footer: `
        &copy; <a href="https://github.com/66njk" target="_blank">ZShuai</a>
        <br>
        Powered by <a href="https://vuepress.vuejs.org" target="_blank">VuePress</a> &
        <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
      `,
    personalInfo: {
      name: "ZShuai",
      avatar: "/img/avatar.png",
      description: "新的风暴已经出现",
      sns: {
        github: "66njk", // Github
        email: "2927136497@qq.com", // 邮箱
      },
    },
    homeHeaderImages: {
      local: [
        {
          path: "/img/home-bg/1.jpeg",
          mask: "rgba(40, 57, 101, .4)",
        },
        {
          path: "/img/home-bg/2.jpeg",
          mask: "rgba(40, 57, 101, .4)",
        },
        {
          path: "/img/home-bg/3.jpg",
          mask: "rgba(40, 57, 101, .4)",
        },
        {
          path: "/img/home-bg/4.jpg",
          mask: "rgba(40, 57, 101, .4)",
        },
        {
          path: "/img/home-bg/5.jpg",
          mask: "rgba(40, 57, 101, .4)",
        },
        {
          path: "/img/home-bg/7.jpg",
          mask: "rgba(40, 57, 101, .4)",
        },
      ],
    },
    pages: {
      vue: {
        subtitle: "永远骄傲！～",
        bgImage: {
          path: "/img/home-bg/0.jpg",
          mask: "rgba(211, 136, 37, .5)",
        },
      },
      react: {
        subtitle: "永远自豪！～",
        bgImage: {
          path: "/img/home-bg/0.jpg",
          mask: "rgba(211, 136, 37, .5)",
        },
      },
      tags: {
        subtitle: "Black Sheep Wall",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)",
        },
      },
      links: {
        subtitle:
          "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
        bgImage: {
          path: "/img/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.5)",
        },
      },
    },
    locales: {
      "/": {
        label: "English",
        selectText: "Languages",
        // nav: require('./configs/navBar/en'),
        nav: [
          { text: "Home", link: "/", icon: "fa-home" },
          { text: "Tags", link: "/tags/", icon: "fa-tag" },
          { text: "Links", link: "/links/", icon: "fa-satellite-dish" },
          {
            text: "前端工程化",
            link: "/gongchenghua/vite.md",
            icon: "co-webpack",
          },
          { text: "工具", link: "/tool/", icon: "bi-tools" },
          { text: "vue3", link: "/vue/", icon: "fa-vuejs" },
          { text: "react", link: "/react/", icon: "co-react" },
          { text: "javascript", link: "/js/" },
          { text: "css", link: "/css/" },
          { text: "面试", link: "/mianshi/" },
          { text: "其他", link: "/other/" },
        ],
      },
    },
    comment: {
      platform: "github",
      owner: "66njk", // 用于放评论的仓库的拥有者 ID
      repo: "comments", // 用于放评论的仓库名
      clientId: "acb0866a678cf5d87167", // OAuth App Client ID
      clientSecret: "72bbe1249299976fd299ed0a04398790f3ca6d19", // OAuth App Client Secret
    },
    readingTime: {
      excludes: ["/url1", "/url2/.*"], // 不需要进行统计的页面路径，默认为 ["/tags/.*", "/links"]
      wordsPerMinuteCN: 500, // 一分钟可以阅读多少个中文字符，默认为 300
      wordsPerMinuteEN: 200, // 一分钟可以阅读多少个英文字符，默认为 160
      excludeCodeBlock: true, // 是否排除所有代码块内的字符，默认为 false
      excludeTexBlock: true, // 是否排除所有公式块内的字符，默认为 false
    },
    // Markdown 增强样式
    mdPlus: {
      all: true, // 全部启用
    },

    markdown: {},
    sidebarDepth: 2,
    sidebar,
    // nav: [
    //   { text: '前端工程化', link: '/gongchenghua/vite.md', icon: 'fa-fort-awesome' },
    //   { text: '工具', link: '/tool/', icon: 'fa-tag' },
    //   { text: 'vue', link: '/vue/', icon: 'fa-satellite-dish' },
    //   { text: 'react', link: '/react/' },
    //   { text: 'javascript', link: '/js/' },
    //   { text: 'css', link: '/css/' },
    //   { text: '面试', link: '/mianshi/' },
    //   { text: '其他', link: '/other/' },
    // ],
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@alias": "path/to/some/dir",
      },
    },
  },
};
