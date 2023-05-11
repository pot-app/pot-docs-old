---
sidebar_position: 1
---

# 介绍

<img width="200px" src="https://cdn.staticaly.com/gh/Pylogmon/pot/master/public/icon.png" align="left"/>

# Pot (Translator of Pylogmon)

> 🌈 一个跨平台的划词翻译软件 (
> [快速上手](/docs/tutorial/intro)|
> [软件下载](/download)|
> [进阶配置](/docs/category/软件配置)|
> [QQ 交流群](https://cdn.staticaly.com/gh/Pylogmon/pot/master/asset/qq_group.jpg))

![License](https://img.shields.io/github/license/Pylogmon/pot.svg)
![Tauri](https://img.shields.io/badge/Tauri-1.3.0-blue?logo=tauri)
![JavaScript](https://img.shields.io/badge/-JavaScript-yellow?logo=javascript&logoColor=white)
![Rust](https://img.shields.io/badge/-Rust-orange?logo=rust&logoColor=white)
![Windows](https://img.shields.io/badge/-Windows-blue?logo=windows&logoColor=white)
![MacOS](https://img.shields.io/badge/-macOS-black?&logo=apple&logoColor=white)
![Linux](https://img.shields.io/badge/-Linux-yellow?logo=linux&logoColor=white)

<br/>
<hr/>

## 名字来源

### pot(Translator of Pylogmon | 派了个萌的翻译器)

> 不用 top 是因为已经有知名 linux 软件占用了`top`这个名字
> 所以现在你也可以叫他翻译锅 😂

<div align="center">
<table>
<tr>
    <td> <img src="https://cdn.staticaly.com/gh/Pylogmon/pot/master/asset/dark.png"/></td>
    <td> <img src="https://cdn.staticaly.com/gh/Pylogmon/pot/master/asset/example.png"/></td>
    <td> <img src="https://cdn.staticaly.com/gh/Pylogmon/pot/master/asset/light.png"/></td>
</tr>
</table>

## 使用方法

<table>
<tr>
    <td></td>
    <td>描述</td>
    <td>预览</td>
</tr>
<tr>
    <td>划词翻译</td>
    <td>选中需要翻译的文本之后，按下划词翻译快捷键即可</td>
    <td> <img src="https://cdn.staticaly.com/gh/Pylogmon/pot/master/asset/output1.gif"/></td>
</tr>
<tr>
    <td>输入翻译</td>
    <td>按下输入翻译快捷键，输入需要翻译的文本，<code>Enter</code> 键翻译</td>
    <td><img src="https://cdn.staticaly.com/gh/Pylogmon/pot/master/asset/output2.gif"/></td>
</tr>
<tr>
    <td>插件调用</td>
    <td>选中需要翻译的文本之后，点击插件图标即可，详情见 <a href="/docs/tutorial/config/plugin_config">插件调用</a></td>
    <td><img src="https://cdn.staticaly.com/gh/Pylogmon/pot/master/asset/output3.gif"/></td>
</tr>
</table>

</div>

## 支持特性

<table>
<tr>
    <td>支持特性</td>
    <td>Linux</td>
    <td>Windows</td>
    <td>MacOS</td>
</tr>
<tr>
    <td>划词翻译</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
</tr>
<tr>
    <td>独立窗口</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
</tr>
<tr>
    <td>插件调用</td>
    <td> <a href="/docs/tutorial/config/plugin_config#starrylinux">Starry</a></td>
    <td> <a href="/docs/tutorial/config/plugin_config#snipdowindows">SnipDo</a></td>
    <td> <a href="/docs/tutorial/config/plugin_config#popclipmacos">PopClip</a></td>
</tr>
<tr>
    <td>添加到 Anki</td>
    <td colspan="3" align="center"> <a href="/docs/tutorial/config/ext_config#anki">配置指南</a></td>
</tr>
</table>

## 支持接口

- DeepL(无需申请)
- Open AI(需要申请 [api 服务](/docs/category/api服务申请) 0.002$/1000token)
- 阿里翻译(需要申请 [api 服务](/docs/category/api服务申请) 每月免费额度 100 万字符)
- 百度翻译(需要申请 [api 服务](/docs/category/api服务申请) 每月免费额度 100 万字符)
- 彩云小译(需要申请 [api 服务](/docs/category/api服务申请) 每月免费额度 100 万字符)
- 腾讯翻译(需要申请 [api 服务](/docs/category/api服务申请) 每月免费额度 500 万字符)
- 火山翻译(需要申请 [api 服务](/docs/category/api服务申请) 每月免费额度 200 万字符)
- 谷歌翻译(无需申请，但需要自己解决网络问题，已提供镜像站地址设置选项)
- 必应词典(无需申请，只能查词)

具体的 api 服务申请步骤，见[申请指南](/docs/category/api服务申请)

> 由于使用 api 产生的费用本作者概不负责

## 感谢

- [Bob](https://github.com/ripperhe/Bob) 灵感来源
- [bob-plugin-openai-translator](https://github.com/yetone/bob-plugin-openai-translator) OpenAI 接口参考
- [@uiYzzi](https://github.com/uiYzzi) 提供实现思路
- [@Lichenkass](https://github.com/Lichenkass) 维护 Deepin 应用商店版本
- [Tauri](https://github.com/tauri-apps/tauri) 好用的 Gui 框架
