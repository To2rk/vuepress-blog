module.exports = {
    base: '/',
    locales: {
      '/': {
        lang: 'zh-CN'
      }
    },
    title: 'Torrk\'s Blog | 月光下的旋律',
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
        })();`],
      ['script', { src: "https://gpt.conimi.com/js/iframe.js", id: "chatbot-iframe", 
        'data-bot-src': "https://gpt.conimi.com/chat/share?shareId=qqqswxnchglp1ie8av25b3sy", 
        'data-default-open': "false", 'data-drag': "true", 
        'data-open-icon': "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzMwNTM4NjY2MDA1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUwOTciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTMyOS4zMTg0IDcwLjM0ODhjLTQ3LjAwMTYgMC04NS42MDY0IDM4LjYwNDgtODUuNjA2NCA4NS42MDY0djM2LjE0NzJoNDI2LjM5MzZjNzQuMTM3NiAwIDEzNC40NTEyIDYwLjMxMzYgMTM0LjQ1MTIgMTM0LjQ1MTJ2MzQwLjY4NDhjMCAxOC4xMjQ4LTMuNTg0IDM1LjAyMDgtMTAuMjQgNTEuMzAyNGw4NC4zNzc2IDg0LjM3NzZjOC4zOTY4IDguMzk2OCAyMy41NTIgMi40NTc2IDIzLjU1Mi05LjYyNTZWNjA3Ljc0NGgzNi4xNDcyYzQ3LjAwMTYgMCA4NS42MDY0LTM4LjYwNDggODUuNjA2NC04NS42MDY0VjE1Ny4yODY0YzAtNDcuMDAxNi0zOC42MDQ4LTg1LjYwNjQtODUuNjA2NC04NS42MDY0SDMyOS4zMTg0di0xLjMzMTJ6IG0tMjQzLjcxMiAxNzAuNzAwOEMzOC42MDQ4IDI0MS4wNDk2IDAgMjc5LjY1NDQgMCAzMjYuNjU2djM0MC42ODQ4YzAgNDcuMDAxNiAzOC42MDQ4IDg1LjYwNjQgODUuNjA2NCA4NS42MDY0SDEyMS44NTZWOTQwLjAzMmMwIDEyLjA4MzIgMTQuNDM4NCAxOC4xMjQ4IDIyLjkzNzYgOS42MjU2bDE5Ni42MDgtMTk2LjYwOGgzMjguNzA0YzQ3LjAwMTYgMCA4NS42MDY0LTM4LjYwNDggODUuNjA2NC04NS42MDY0VjMyNi42NTZjMC00Ny4wMDE2LTM4LjYwNDgtODUuNjA2NC04NS42MDY0LTg1LjYwNjRIODUuNjA2NHogbTEyMS44NTYgMjA2Ljg0OGMyNy4xMzYgMCA0OC44NDQ4IDIxLjcwODggNDguODQ0OCA0OC44NDQ4cy0yMS43MDg4IDQ4Ljg0NDgtNDguODQ0OCA0OC44NDQ4Yy0yNy4xMzYgMC00OC44NDQ4LTIxLjcwODgtNDguODQ0OC00OC44NDQ4IDAtMjYuNTIxNiAyMS43MDg4LTQ4Ljg0NDggNDguODQ0OC00OC44NDQ4eiBtMTcwLjA4NjQgMGMyNy4xMzYgMCA0OC44NDQ4IDIxLjcwODggNDguODQ0OCA0OC44NDQ4cy0yMS43MDg4IDQ4Ljg0NDgtNDguODQ0OCA0OC44NDQ4Yy0yNy4xMzYgMC00OC44NDQ4LTIxLjcwODgtNDguODQ0OC00OC44NDQ4IDAuNjE0NC0yNi41MjE2IDIyLjMyMzItNDguODQ0OCA0OC44NDQ4LTQ4Ljg0NDh6IG0xNzAuNTk4NCAwYzI3LjEzNiAwIDQ4Ljg0NDggMjEuNzA4OCA0OC44NDQ4IDQ4Ljg0NDhzLTIxLjcwODggNDguODQ0OC00OC44NDQ4IDQ4Ljg0NDhjLTI3LjEzNiAwLTQ4Ljg0NDgtMjEuNzA4OC00OC44NDQ4LTQ4Ljg0NDggMC0yNi41MjE2IDIyLjMyMzItNDguODQ0OCA0OC44NDQ4LTQ4Ljg0NDh6IiBwLWlkPSI1MDk4IiBmaWxsPSIjNTE1MTUxIj48L3BhdGg+PC9zdmc+",
        'data-close-icon': "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzMwNTM4ODQyNDk1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijg3NDUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTUxMiAxMDI0QTUxMiA1MTIgMCAxIDEgNTEyIDBhNTEyIDUxMiAwIDAgMSAwIDEwMjR6IG0wLTU4NC40NDhMNDAzLjM3MDY2NyAzMzEuMDkzMzMzYTUxLjIgNTEuMiAwIDAgMC03Mi40NDggNzIuNDQ4TDQzOS42MzczMzMgNTEyIDMzMS4wOTMzMzMgNjIwLjYyOTMzM2E1MS4yIDUxLjIgMCAwIDAgNzIuNDQ4IDcyLjQ0OEw1MTIgNTg0LjM2MjY2NyA2MjAuNjI5MzMzIDY5Mi45MDY2NjdhNTEuMiA1MS4yIDAgMSAwIDcyLjM2MjY2Ny03Mi4zNjI2NjdMNTg0LjUzMzMzMyA1MTIgNjkyLjkwNjY2NyA0MDMuMzcwNjY3YTUxLjIgNTEuMiAwIDAgMC03Mi4zNjI2NjctNzIuMzYyNjY3TDUxMiA0MzkuNDY2NjY3eiIgZmlsbD0iIzUxNTE1MSIgcC1pZD0iODc0NiI+PC9wYXRoPjwvc3ZnPg==",
        defer: true 
      }],
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
          { icon: 'reco-wechat', link: 'https://conimi.com/files/images/Torrk_wechat.jpg' },
          { icon: 'reco-zhihu', link: 'https://www.zhihu.com/people/torrk' },
        ]
      },
      valineConfig: {
        appId: '3znsWxW1sRV7n0V9JLVnvNvU-gzGzoHsz',
        appKey: 'A86PspcsyWBHnmoP9ck4Af54',
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
      recordLink: 'https://beian.miit.gov.cn/',
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
          logo: 'https://conimi.com/favicon.ico',
          link: 'https://www.php.wf'
        },
        {
          title: '字节星球',
          desc: '丰富想象力，激发创造力。',
          logo: 'https://www.bytecho.net/static/icon.png',
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
        // {
        //   title: 'MOREFOX',
        //   desc: '一个咸鱼画手，月之麻瓜一枚（自豪）。',
        //   // logo: 'https://morefox.net/img/avatar.png',
        //   logo: 'https://conimi.com/favicon.ico',
        //   link: 'https://morefox.net'
        // },
        // {
        //   title: '小浣熊的技术小站',
        //   desc: '生命不息，折腾不止',
        //   logo: 'https://ftp.bmp.ovh/imgs/2020/08/af2963980918097c.jpg',
        //   link: 'https://www.nimitiz.cn/'
        // },
        {
          title: '小马奔腾',
          desc: '迷失的人迷失了，相逢的人会再相逢。',
          logo: 'https://blog.mcloc.cn/upload/icon.png',
          // logo: 'https://blog.mcloc.cn/usr/uploads/2020/02/wp-favicon.png',
          link: 'https://blog.mcloc.cn'
        },
        {
          title: '上杉九月',
          desc: '分享生活，探索未来！',
          logo: 'https://conimi.com/favicon.ico',
          // logo: 'https://conimi.com/favicon.ico',
          link: 'https://blog.sakurasep.site/'
        },
        // {
        //   title: '素履',
        //   desc: '世界上只有一种英雄主义，就是看清生活的真相之后依然热爱生活',
        //   logo: 'https://cravatar.cn/avatar/0ae1108f852a66a3e776d04c156085b3?d=identicon',
        //   link: 'https://xyming108.top'
        // },       
        // {
        //   title: '',
        //   desc: '',
        //   logo: '',
        //   link: ''
        // }
        // {
        //   title: 'Sunday',
        //   desc: '代码改变世界',
        //   logo: 'https://conimi.com/favicon.ico',
        //   // logo: 'https://mysource-hexo.wyun521.top/img/avator/7.jpg',
        //   link: 'https://blog.wyun521.top/'
        // },
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
    // // 评论插件
    //   ['vuepress-plugin-comment',
    //   {
    //     choosen: 'valine', 
    //     // options选项中的所有参数，会传给Valine的配置
    //     options: {
    //       el: '#valine-vuepress-comment',
    //       appId: 'xxxxxxxxxxxxxxxxxx',
    //       appKey: 'xxxxxxxxxxxxxx'
    //     }
    //   }],
    // 代码复制弹窗插件
      ['vuepress-plugin-nuggets-style-copy', {
        copyText: 'copy',
        tip: {
            content: '复制成功!'
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