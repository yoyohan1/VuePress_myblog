# VuePress平日所记
## 搭建博客步骤  
```
npm init 
npm install -D vuepress
mkdir docs
echo #首页 >docs/README.md    <!-- 在该md文件中 添加首页配置代码 见下方超链接 -->
mkdir docs\.vuepress
echo config.js >docs\.vuepress\config.js  <!-- config.js配置代码 见下方超链接 -->
vuepress dev docs             <!-- 打开本地路径进行浏览 -->
vuepress build docs           <!-- 打包成网页的命令 -->
```
[添加首页配置代码](https://github.com/yoyohan1/VuePress_myblog/blob/master/docs/README.md)  
[config.js配置代码](https://github.com/yoyohan1/VuePress_myblog/blob/master/docs/.vuepress/config.js) 
## 仅有的两种路径方式
```
1. 相对路径  
![image](../../assets/ui/1.png)
![image](~ui/1.png)//通过config.js configureWebpack配置

config.js
configureWebpack: {
    resolve: {
        alias: {
            'ui': '../../assets/ui',
            'ui-en': '../../../assets/ui'
        }
    }
},

2. 公共路径
//必须带上base的前缀（不带在dev不报错 build后读取不到）
![image](/myblog/banner.png)
<img src="/myblog/banner.png" alt="foo">

//为了改善带上base的前缀被重命名 出现了$withBase  注意必须 是:src开头 只能读取公共文件下的内容
<img :src="$withBase('/banner.png')" alt="foo">
```
## 配置插件
[配置插件官方文档](https://v1.vuepress.vuejs.org/zh/plugin/)
```
plugins: [
    ['@vuepress/back-to-top',true],  //置顶 安装命令：npm install -D @vuepress/plugin-back-to-top 
    ['@vuepress/medium-zoom',true],  //图片放大 安装命令：npm install -D @vuepress/plugin-medium-zoom 
    //最后更新时间显示 安装命令：npm install -D moment
    ['@vuepress/last-updated', {
        transformer: (timestamp, lang) => {
            // 不要忘了安装 moment
            const moment = require('moment')
            moment.locale(lang)
            return moment(timestamp).format('YYYY-MM-DD hh:mm:ss')
        }
    }]
]

//加入lastUpdated配置
themeConfig.lastUpdated: '上次更新时间'
```