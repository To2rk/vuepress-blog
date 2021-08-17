module.exports = {
    base: '/',
    locales: {
      '/': {
        lang: 'zh-CN'
      }
    },
    title: 'Torrk\'s Blog',
    description: '记录，成为更好的自己。',
    // dest: 'public',
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
      ['meta', { name: 'keywords', content: 'Torrk,博客,conimi,nico'}],
      ['script', {}, `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?xxxxxxxxxxxxxxxx"; 
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();`]
    ],
    markdown: {
      lineNumbers: true,
    },
    themeConfig: {
      nav: [
        { text: '主页', link: '/', icon: 'reco-home' },
        { text: '归档', link: '/archives.html', icon: 'reco-date' },
        { text: '标签', link: '/tags.html', icon: 'reco-tag'},
        { text: '域名', link: '/domains.html', icon: 'reco-other' },
        { text: '回顾', link: '/review.html', icon: 'reco-blog' },
        { text: '关于', link: '/about.html', icon: 'reco-account' },
      ],

      type: 'blog',
      blogConfig: {
        category: {
          location: 2, // 在导航栏菜单中所占的位置，默认2
          text: '分类' // 默认 “分类”
        },
        // tag: {
        //   location: 3, // 在导航栏菜单中所占的位置，默认3
        //   text: '标签' // 默认 “标签”
        // },
        socialLinks: [
          { icon: 'reco-github', link: 'https://github.com/To2rk' },
        ]
      },
      valineConfig: {
        appId: 'xxxxxxxxxxxxxxxxxx',
        appKey: 'xxxxxxxxxxxxxx',
      },
      logo: '/avatar.jpg',
      authorAvatar: '/avatar.jpg',
      search: true,
      searchMaxSuggestions: 10,
      subSidebar: 'auto',
      sidebarDepth: 4,
      lastUpdated: '上次更新',
      author: 'Torrk',
      // 备案号
      record: 'xxxxxx',
      startYear: '2017',
      /**
       * 密钥 (if your blog is private)
       */
      friendLink: [
        {
          title: '午后南杂',
          desc: 'Enjoy when you can, and endure when you must.',
          email: '1156743527@qq.com',
          link: 'https://www.recoluan.com'
        },
        {
          title: 'Mczo',
          desc: '_(¦з」∠)_',
          logo: 'https://gravatar.loli.net/avatar/d6fb712bdf66482e64186dea4f52868f',
          link: 'https://mczo.net/'
        },
        {
          title: '犬\'s Blog',
          desc: '咦？我是谁？我为什么会在这？',
          logo: 'https://gravatar.loli.net/avatar/5e6892e999ca8c85a358d21164167f38?s=128',
          link: 'https://moedog.org/'
        },
        {
          title: '香菇',
          desc: '普通的香菇。',
          logo: 'https://secure.gravatar.com/avatar/2fbd223c8ccde74c2e2ac9f9662249f6',
          link: 'https://siitake.cn/'
        },
        {
          title: 'SycBlog',
          desc: '始于初见，止于终老',
          logo: 'https://s.php.wf/links.png',
          link: 'https://www.php.wf'
        },
        {
          title: 'Bytecho',
          desc: '丰富想象力，激发创造力。',
          logo: 'https://images.bytecho.net/images/2020/08/09/56972305f50a7a64e63da34751242f6b.png',
          link: 'https://www.bytecho.net/'
        },
        {
          title: 'MoeShin',
          desc: '一只小萌新',
          logo: 'https://gravatar.loli.net/avatar/e988ae0aba7dbf804c476d926607aa05?s=100',
          link: 'https://moeshin.com/'
        },
        {
          title: 'FGHRSH',
          desc: 'FGHRSH 的博客',
          logo: 'https://fp1.fghrsh.net/2017/10/11/d383a9ad4318c5b4332fe02845f5323a.jpg',
          link: 'https://www.fghrsh.net/'
        },
        {
          title: 'MOREFOX',
          desc: '一个咸鱼画手，月之麻瓜一枚（自豪）。',
          logo: 'https://i2.tiimg.com/652069/db1cd26618ce97f9t.jpg',
          link: 'https://morefox.net'
        },
        {
          title: '小浣熊的技术小站',
          desc: '生命不息，折腾不止',
          logo: 'https://ftp.bmp.ovh/imgs/2020/08/af2963980918097c.jpg',
          link: 'https://www.nimitiz.cn/'
        },
        {
          title: '小马奔腾的博客',
          desc: '迷失的人迷失了，相逢的人会再相逢。',
          logo: 'https://blog.mcloc.cn/usr/uploads/2020/02/wp-favicon.png',
          link: 'https://blog.mcloc.cn'
        },
        {
          title: '上杉九月的博客',
          desc: '享生活，探索未来！',
          logo: 'https://cdn.jsdelivr.net/gh/sakurasep/images@1.1/important/touxiang.jpg',
          link: 'https://sakurasep.site/'
        },
        // {
        //   title: '',
        //   desc: '',
        //   logo: '',
        //   link: ''
        // },       {
        //   title: '',
        //   desc: '',
        //   logo: '',
        //   link: ''
        // }
      ],
      /**
       * support for
       * '' | 'default'
       * 'coy'
       * 'dark'
       * 'funky'
       * 'okaidia'
       * 'solarizedlight'
       * 'tomorrow'
       * 'twilight'
       */
    },
    plugins: [
      // 更新刷新插件
      ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
        }
      }],
    // 代码复制弹窗插件
      ["vuepress-plugin-nuggets-style-copy", {
        copyText: "copy",
        tip: {
            content: "复制成功!"
        }
      }],
      ['@vuepress/last-updated', 
        {
          transformer: (timestamp, lang) => {
            return (new Date(timestamp)).toUTCString() 
            //或者用下面这段
            // const moment = require('moment')
            // moment.locale(lang)
            // return moment(timestamp).toLocaleString()
          }
        }],
      ['@vuepress-reco/vuepress-plugin-pagation', {
        perPage: 18
      }],
      ['sitemap', {
        hostname: 'https://conimi.com'
      }],
    ]
  }