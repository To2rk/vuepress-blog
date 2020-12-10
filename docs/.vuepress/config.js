const path = require('path')
const fs = require('fs')
const rootpath = path.dirname(__dirname) //执行一次dirname将目录定位到docs目录

const Array = getCategoriesSidebar(rootpath + '/categories/') //存储所有类别和文章


module.exports = {
  title: 'Torrk\'s Blog',
  description: '记录，成为更好的自己。',
  head: [
    ['script', {}, `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?xxxxxxxxxxxxxxxx";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
    `]
  ],
  markdown: {
      lineNumbers: true,
    },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom', // 图片缩放插件
    ['@vuepress/plugin-blog', {
        comment: {
        service: 'vssue',
        platform: 'github-v4',
        prefix: '',
        autoCreateIssue: true,
        owner: 'To2rk',
        repo: 'vuepress-blog',
        clientId: 'd452f772d48767627929',
        clientSecret: '6b3f8d4b1bee66988c531259c459a1a412c44b35',
        locale: 'zh',
        },
      sitemap: {
        hostname: 'https://conimi.com/'
        },
      // frontmatters: [
      //   {
      //     id: "tag",
      //     keys: ['tag', 'tags'],
      //   },
      // ]
    }],
  ],
  themeConfig: {
      repo: 'To2rk/vuepress-blog',
      lastUpdated: '上次更新：',
      docsRepo: 'To2rk/vuepress-blog',
      smoothScroll: true, //平滑滚动
      // 我自己的函数，供分类和归档页面调用
      categories: Array,
      categoriesSum: Array.length,
      articleSum: getArticleSum(),
      // end
      nav: [
        { text: '主页', link: '/' },
        { text: '分类', link: '/categories.html' },
        { text: '归档', link: '/archives.html' },
        { text: '友链', link: '/links.html' },
        { text: '关于', link: '/about.html' },
        { text: '域名', link: '/domains.html' },
      ],
      sidebar: {
        '/categories/': Array,
      }
  }
}

function getCategoriesSidebar(dir, collapsable = true, sidebarDepth = 2 ){

  var folder = fs.readdirSync(dir);
  let array = [];

  for (var i in folder){
    // 获取到的分类文件夹绝对路径
    var absoluteFolder = dir + '/' + folder[i];

    if(fs.statSync(absoluteFolder).isDirectory()){

      var file = fs.readdirSync(absoluteFolder);
      let fileNames = [];
      let fileTypes = /\.md$/;

      for (var j in file){

        var absoluteFile = absoluteFolder + '/' + file[j];

        if (fs.statSync(absoluteFile).isFile()){
          if(fileTypes.test(file[j]) > 0){
            file[j] = file[j].replace('.md', '');
            fileNames.push([folder[i] + '/' + file[j], file[j]]);
          }
        }
        else continue;
      }
      array.push(
        {
          title: folder[i],
          collapsable,
          sidebarDepth,
          children: fileNames
        }
      );
    }
    else continue;
  }
  // console.log(array); 
  // 调试用
  return array;
}

function getArticleSum(){
  let articleSum = 0;

  for(var i in Array){
    articleSum = articleSum + Array[i].children.length;
  }
  return articleSum;
}

