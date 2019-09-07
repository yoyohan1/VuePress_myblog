# VuePress平日所记
## VuePress的仅有的三种路径方式

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
![image](/banner.png)

3. 公共路径跟随
<img :src="$withBase('/banner.png')" alt="foo">//注意必须 是:src开头 只能读取公共文件下的内容
```


<img :src="$withBase('/banner.png')" alt="foo">
<img src="/myblog/banner.png" alt="foo">