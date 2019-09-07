const moment = require('moment');

module.exports = {
    /**
     * 部署站点的基础路径
     * 默认值: /
     * 如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"
     */
    base: '/myblog/',

    /**
     * 网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上
     */
    title: 'yoyohan的博客空间',

    /**
     * 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
     */
    description: '爱代码，爱写作！ ',

    /**
     * 额外的需要被注入到当前页面的 HTML <head> 中的标签，每个标签都可以以 [tagName, { attrName: attrValue }, innerHTML?] 的格式指定
     * 例如：增加一个自定义的 favicon
     */
    head: [
        ['link', {
            rel: 'icon',
            href: './logo.png'
        }]
    ],

    /**
     * 指定用于 dev server 的主机名
     * 默认 '0.0.0.0'
     */
    host: '0.0.0.0',

    /**
     * 指定 dev server 的端口
     * 默认 8080
     */
    port: 8082,

    /**
     * 指定 vuepress build 的输出目录
     * 默认 .vuepress/dist
     * 注：从根目录出发
     */
    dest: 'dist',

    // 提供一个 Google Analytics ID 来使 GA 生效
    // ga: '',

    /**
     * 
     */
    cache: true,

    /**
     * 如果设置成 true，VuePress 将会自动生成并且注册一个 service worker，它缓存了那些已访问过的页面的内容，用于离线访问（仅在生产环境生效）。
     * @type {Boolean}
     * 默认值: false
     */
    serviceWorker: true,

    // 提供多语言支持的语言配置。具体细节请查看 https://vuepress.vuejs.org/zh/guide/i18n.html
    // 键名是该语言所属的子路径 作为特例，默认语言可以使用 '/' 作为其路径。
    locales: {
        '/': {
            label: 'zh-CN',
            title: 'yoyohan的博客空间',
            description: '爱代码，爱写作！'
        },
        '/en/': {
            label: 'en-US', // 将会被设置为 <html> 的 lang 属性
            title: "yoyohan's blog",
            description: 'love code love writing!'
        }
    },

    // 一个函数，用来控制对于哪些文件，是需要生成 <link rel="prefetch"> 资源提示的，参考 https://ssr.vuejs.org/zh/api/#shouldpreload
    // shouldPrefetch: () => true,

    /**
     * 是否对异步加载页面的内容开启占位符加载。如果它是一个字符串，那么它应该是自定义加载组件的名称
     */
    contentLoading: true,

    // 当你使用自定义主题的时候，需要指定它。参考自定义主题：https://vuepress.vuejs.org/zh/theme/#using-a-theme
    // theme: '',

    // 为当前的主题提供一些配置，这些选项依赖于你正在使用的主题
    // 默认主题配置选项参考：https://vuepress.vuejs.org/zh/theme/default-theme-config.html
    themeConfig: {
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'yoyohan1/VuePress_myblog',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'GitHub',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'yoyohan1/VuePress_myblog',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 全局设置是否显示导航栏，也可以在页面中单独设置
        navbar: true,
        // 侧边栏深度可选 0,1,2
        sidebarDepth: 2,
        // 最后更新时间
        lastUpdated: '上次更新时间',

        locales: {
            '/': {
                label: '简体中文',
                selectText: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                nav: [{
                    text: '项目',
                    link: '/project/'
                }, {
                    text: '前端',
                    link: '/front-end/'
                }, {
                    text: '后端',
                    link: '/back-end/'
                }, {
                    text: '语言',
                    link: '/program-language/'
                }],
                sidebar: {
                    '/project/': getPJSidebar('项目展示', '我的公开源码'),
                    '/front-end/': getFESidebar('游戏引擎', '原生开发', '网页H5'),
                    '/back-end/': getBESidebar('接口服务器', '强联网服务器'),
                    '/program-language/': getPLSidebar('面向对象', '非面向对象')
                }
            },
            '/en/': {
                label: 'English',
                selectText: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                nav: [{
                    text: 'project',
                    link: '/en/project/'
                },{
                    text: 'front-end',
                    link: '/en/front-end/'
                }, {
                    text: 'back-end',
                    link: '/en/back-end/'
                }, {
                    text: 'program-language',
                    link: '/en/program-language/'
                }],
                // sidebar: {
                //     '/project/': getPJSidebar('show', 'public'),
                //     '/en/front-end/': getFESidebar('GameEngine', 'NativeDev', 'Web_H5'),
                //     '/en/back-end/': getBESidebar('Interface_server', 'socket_server'),
                //     '/en/program-language/': getPLSidebar('oop', 'non_oop')
                // }
            }
        }
    },

    /**
     * 插件配置
     * 参考：https://vuepress.vuejs.org/zh/plugin/#using-a-plugin
     */
    plugins: [
        ['@vuepress/back-to-top',true],
        ['@vuepress/medium-zoom',true],
        ['@vuepress/last-updated', {
            transformer: (timestamp, lang) => {
                // 不要忘了安装 moment
                const moment = require('moment')
                moment.locale(lang)
                return moment(timestamp).format('YYYY-MM-DD hh:mm:ss')
            }
        }]

    ],
    /**
     * 用于修改内部的 Webpack 配置
     *   如果给定一个对象，那么它将会被 webpack-merge 合并到最终的配置中
     *   如果给定一个函数，它将会接受 config 作为第一个参数，以及 isServer 作为第二个参数，你可以直接更改 config，也可以返回一个待合并的对象
     * 类型: Object | Function
     * 默认值: undefined
     */
    configureWebpack: {
        resolve: {
            alias: {
                'ui': '../../assets/ui',
                'ui-en': '../../../assets/ui'
            }
        }
    },
}

function getPJSidebar(Show, Public) {
    return [
        ['', Show],
        {
            title: Public,
            collapsable: false,
            children: [
                ['unity', 'Unity'],
                ['cocoscreator', 'CocosCreator'],
                ['layabox', 'Layabox'],
                ['android', 'Android'],
                ['weapp', '微信小程序'],
                ['other', '其他'],
            ]
        },
    ]
}

function getFESidebar(GameEngine, NativeDev, Web_H5) {
    return [
        ['', '首页'],
        {
            title: GameEngine,
            collapsable: false,
            children: [
                ['unity', 'Unity'],
            ]
        },
        {
            title: NativeDev,
            collapsable: false,
            children: [
                ['android', 'Android'],
                ['ios', 'IOS'],
            ]
        },
        {
            title: Web_H5,
            collapsable: false,
            children: [
                ['layabox', 'Layabox'],
                ['cocoscreator', 'CocosCreator'],
                ['egret', 'Egret'],
                ['vuepress', 'VuePress'],
                ['vue', 'Vue'],
            ]
        }
    ]
}

function getBESidebar(Interface_server, socket_server) {
    return [
        {
            title: Interface_server,
            collapsable: false,
            children: [
                ['', 'README'],
                ['asp.net', 'Asp.Net'],
                ['php', 'Php'],
                ['node', 'Node'],
            ]
        },
        {
            title: socket_server,
            collapsable: false,
            children: [
                ['c#', 'C#'],
                ['java', 'Java'],
            ]
        }
    ]
}

function getPLSidebar(oop, non_oop) {
    return [
        {
            title: oop,
            collapsable: false,
            // sidebarDepth: 2,
            children: [
                ['', 'README'],
                ['c#', 'C#'],
                ['java', 'Java'],
                ['typescript', 'Typescript'],
            ]
        },
        {
            title: non_oop,
            collapsable: false,
            // sidebarDepth: 2,
            children: [
                ['javascript', 'Javascript'],
            ]
        },
    ]
}

    // /**
    //  * 网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上
    //  */
    // title: 'yoyohan的博客空间',

    // /**
    //  * 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
    //  */
    // description: 'love code love writing! ',


     // /**
    //  * markdown 配置
    //  * 参考：https://vuepress.vuejs.org/zh/config/#markdown
    //  */
    // markdown: {
    //     // 是否在每个代码块的左侧显示行号，参考 https://vuepress.vuejs.org/zh/guide/markdown.html#%E8%A1%8C%E5%8F%B7
    //     lineNumbers: false,
    //     // 锚点配置，参考 https://github.com/valeriangalliat/markdown-it-anchor
    //     anchor: {
    //         permalink: true,
    //         permalinkBefore: true,
    //         permalinkSymbol: '#'
    //     },
    //     // 这个键值对将会作为特性被增加到是外部链接的 <a> 标签上，默认的选项将会在新窗口中打开一个该外部链接。
    //     externalLinks: {
    //         target: '_blank',
    //         rel: 'noopener noreferrer'
    //     },
    //     // 内容导航 markdown-it-table-of-contents 的选项
    //     toc: {
    //         includeLevel: [2, 3]
    //     },
    //     // 一个用于修改当前的 markdown-it 实例的默认配置，或者应用额外的插件的函数。参考文档：https://github.com/markdown-it/markdown-it
    //     config: md => { /* config markdown instance */ }
    // },

    // /**
    //  * 类型: Object
    //  * 默认值: { plugins: [require('autoprefixer')] }
    //  * [postcss-loader](https://github.com/postcss/postcss-loader) 的选项，请注意，指定这个值，将会覆盖内置的 autoprefixer，所以你需要自己将它加进去
    //  */
    // postcss: {
    //     plugins: [require('autoprefixer')]
    // },

    // /**
    //  * [stylus-loader](https://github.com/shama/stylus-loader) 的选项
    //  * Type: Object
    //  * Default: { preferPathResolver: 'webpack' }
    //  */
    // stylus: {
    //     preferPathResolver: 'webpack'
    // },

    // /**
    //  * 加载 .scss 文件的 [sass-loader](https://github.com/postcss/postcss-loader) 的选项
    //  * Type: Object
    //  * Default: {}
    //  */
    // scss: {},

    // /**
    //  * 加载 *.sass 文件的 [sass-loader](https://github.com/postcss/postcss-loader) 的选项
    //  * Type: Object
    //  * Default: { indentedSyntax: true }
    //  */
    // sass: {
    //     indentedSyntax: true
    // },

    // /**
    //  * [less-loader](https://github.com/webpack-contrib/less-loader) 的选项
    //  * Type: Object
    //  * Default: {}
    //  */
    // less: {},



    // /**
    //  * 通过 [webpack-chain](https://github.com/neutrinojs/webpack-chain) 来修改内部的 Webpack 配置
    //  * 类型: Function
    //  * 默认值: undefined
    //  */
    // chainWebpack: (config, isServer) => {
    //     // config 是 ChainableConfig 的一个实例
    // },

    // /**
    //  * 如果你的对象只有那些 “常青树” 浏览器，你可以将其设置成 true，这将会禁止 ESNext 到 ES5 的转译以及对 IE 的 polyfills，同时会带来更快的构建速度和更小的文件体积
    //  * 类型: boolean
    //  * 默认值: false
    //  */
    // evergreen: false