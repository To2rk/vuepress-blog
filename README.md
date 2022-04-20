**最新文档：** [从零开始搭建vuepress博客并使用本地reco主题](https://conimi.com/archives/146)

## 0x00 说明

在[vuepress-theme-reco](https://github.com/vuepress-reco/vuepress-theme-reco)的基础上修改，仅修改了少量代码

> 注意：由于lastUpdate是使用git的提交时间，所以确保在一个git项目中。

## 0x01 快速搭建博客

### 1. 安装yarn和vupress

如果已安装，则跳过这步；

如果没有安装，请参考这篇博客安装yarn和vuepress：[vuepress-theme-reco主题的安装和使用](https://conimi.com/archives/145)

### 2. 快速启动

```bash
git clone https://github.com/To2rk/vuepress-blog.git
# 或者使用 wget 方式，再自行解压
cd vuepress-blog
yarn dev    # 本地测试命令，访问http://localhost:8080可访问

# 编译成静态文件，生成静态文件默认位置：blog/.vuepress/dist，后续用于部署到服务器或者Github Page
yarn build  
```

## 0x02 修改的地方

### 1. 文章时间格式由：2021/01/13 上午8:00:00 改为 2021-01-13

找到`theme/components/PageInfo.vue`组件，从68行的 `formatDateValue`开始，

原始内容：

```js
    formatDateValue (value) {
      let localDate = new Date(value).toLocaleString()
      if (value.split(' ').length === 1) localDate = localDate.split(' ')[0]
      return localDate
    }
```

修改为：

```js
    formatDateValue (value) {
      let localDate = new Date(value).toJSON().split('T')[0]
      return localDate
    }
```

说明：

`toLocaleString()`在未设置参数的情况下(语言zh)返回：`2021/01/13 上午8:00:00`，原始的代码通过split方法从空格处进行分割，获得字符串数组，取第一个值，也就是获得了年/月/日（2021/01/13）。

在edge和firefox下没有问题，但是在chrome下，由于`toLocaleString()`返回：`2021/01/13上午8:00:00`，不包含空格，无法正常分割取到年月日。

`toJSON()方法`返回的形式：`2021-01-13T23:15:30.000Z`，以字符 `T` 作为分割，取获得的数组第一个对象：`2021-01-13`

###  2. lastUpdated时间格式由：2021/01/13 上午8:00:00 改为 2021-01-13

找到`theme/components/Page.vue`组件，修改方法同上

原始内容：

```js
    lastUpdated () {
      return new Date(this.$page.lastUpdated).toLocaleString()
    },
```

修改为：

```js
    lastUpdated () {
      if (!this.$page.lastUpdated){   
        return new Date().toJSON().split('T')[0] // 如果未提交过git，lastUpdated为当前时间
      }
      else
        return new Date(this.$page.lastUpdated).toJSON().split('T')[0]
    },
```