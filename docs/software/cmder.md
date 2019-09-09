# Cmder 好用的cmd工具
## 参考资料
- [GitHub仓库](https://github.com/cmderdev/cmder)
- [简书上的配置步骤](https://www.jianshu.com/p/5b7c985240a7)
## 我的配置
1. 下载cmder，解压到指定文件夹  
2. 将Cmder.exe所在文件路径添加至Path环境变量   
3. 设置任意地方鼠标右键启动Cmder，以管理员身份打开cmd，输入命令：Cmder.exe /REGISTER ALL  
4. windows+alt+p进入界面设置  
    - General栏设置语言  
    - Fonts栏设置字体大小 取消勾选Monospace（可能会出现字体错位）  
    - 背景透明度  
    - 将Cmder默认的命令提示符"λ"改为“$” 在cmder\vendor中的clink.lua内 找到local lambda="λ" 修改"λ"替换成"$"  
5. 快捷键
```
Tab       自动路径补全
Ctrl+T    建立新页签
Ctrl+W    关闭页签
Ctrl+R    历史命令搜索
Ctrl+`    最小化
```

