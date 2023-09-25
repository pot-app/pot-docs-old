---
sidebar_position: 1
---

# 介绍

<img width="200px" src="https://cdn.staticaly.com/gh/pot-app/pot-desktop/master/public/icon.png" align="left"/>

# Pot (Translator of Pylogmon)

> 🌈 一个跨平台的划词翻译软件

![License](https://img.shields.io/github/license/pot-app/pot-desktop.svg)
![Tauri](https://img.shields.io/badge/Tauri-1.3.0-blue?logo=tauri)
![JavaScript](https://img.shields.io/badge/-JavaScript-yellow?logo=javascript&logoColor=white)
![Rust](https://img.shields.io/badge/-Rust-orange?logo=rust&logoColor=white)
![Windows](https://img.shields.io/badge/-Windows-blue?logo=windows&logoColor=white)
![MacOS](https://img.shields.io/badge/-macOS-black?&logo=apple&logoColor=white)
![Linux](https://img.shields.io/badge/-Linux-yellow?logo=linux&logoColor=white)

<br/>
<hr/>

<div align="center">
<table>
<tr>
    <td> <img src="img/1.png"/></td>
    <td> <img src="img/2.png"/></td>
    <td> <img src="img/3.png"/></td>
</tr>
</table>

## 使用方法

| 划词翻译                                             | 输入翻译                                                       | 外部调用                                                             |
| ---------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------------- |
| 鼠标选中需要翻译的文本，按下设置的划词翻译快捷键即可 | 按下输入翻译快捷键呼出翻译窗口，输入待翻译文本后按下 回车 翻译 | 通过被其他软件调用实现更加方便高效的功能, 详见 [外部调用](#外部调用) |
| <img src="img/eg1.gif"/>                             | <img src="img/eg2.gif"/>                                       | <img src="img/eg3.gif"/>                                             |

| 剪切板监听模式                                                         | 截图 OCR                                          | 截图翻译                                         |
| ---------------------------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------ |
| 在任意翻译面板上点击左上角图标启动剪切板监听默认，复制文字即可完成翻译 | 按下截图 OCR 快捷键后框选需要识别区域即可完成识别 | 按下截图翻译快捷键后框选需要识别区域即可完成翻译 |
| <img src="img/eg4.gif"/>                                               | <img src="img/eg5.gif"/>                          | <img src="img/eg6.gif"/>                         |

</div>

## 支持接口

### 翻译

- [x] [OpenAI](https://platform.openai.com/)
- [x] [阿里翻译](https://www.aliyun.com/product/ai/alimt)
- [x] [百度翻译](https://fanyi.baidu.com/)
- [x] [彩云小译](https://fanyi.caiyunapp.com/)
- [x] [腾讯翻译君](https://fanyi.qq.com/)
- [x] [腾讯交互翻译](https://transmart.qq.com/)
- [x] [火山翻译](https://translate.volcengine.com/)
- [x] [小牛翻译](https://niutrans.com/)
- [x] [Lingva](https://github.com/thedaviddelta/lingva-translate)
- [x] [Google](https://translate.google.com)
- [x] [Bing](https://learn.microsoft.com/zh-cn/azure/cognitive-services/translator/)
- [x] [Bing 词典](https://www.bing.com/dict)
- [x] [DeepL](https://www.deepl.com/)
- [x] [有道翻译](https://ai.youdao.com/)
- [x] [剑桥词典](https://dictionary.cambridge.org/)
- [x] [MoJi 辞书](https://www.mojidict.com/)
- [x] [Yandex](https://translate.yandex.com/)
- [x] [Tatoeba](https://tatoeba.org/)
- [x] [PALM2](https://ai.google/discover/palm2/)
- [ ] 持续增加...

### 文字识别

- [x] 系统 OCR (离线)
  - [x] [Windows.Media.OCR](https://learn.microsoft.com/en-us/uwp/api/windows.media.ocr.ocrengine?view=winrt-22621) on Windows
  - [x] [Apple Vision Framework](https://developer.apple.com/documentation/vision/recognizing_text_in_images) on MacOS
  - [x] [Tesseract OCR](https://github.com/tesseract-ocr) on Linux
- [x] [Tesseract.js](https://tesseract.projectnaptha.com/) (离线)
- [x] [PaddleOCR](https://github.com/xushengfeng/eSearch-OCR) (离线)
- [x] [百度](https://ai.baidu.com/tech/ocr/general)
- [x] [腾讯](https://cloud.tencent.com/product/ocr-catalog)
- [x] [OCR Space](http://ocr.space/)
- [x] [火山](https://www.volcengine.com/product/OCR)
- [x] [迅飞](https://www.xfyun.cn/services/common-ocr)
- [x] [腾讯图片翻译](https://cloud.tencent.com/document/product/551/17232)
- [x] [百度图片翻译](https://fanyi-api.baidu.com/product/22)
- [x] [Simple LaTeX](https://simpletex.cn/)
- [ ] 持续增加...

### 语音合成

- [x] [Lingva](https://github.com/thedaviddelta/lingva-translate)

### 生词本

- [x] [Anki](https://apps.ankiweb.net/)
- [x] [欧路词典](https://dict.eudic.net/)

具体的 api 服务申请步骤，见[申请指南](/docs/category/api服务申请)

> 由于使用 api 产生的费用本作者概不负责

## 感谢

- [Bob](https://github.com/ripperhe/Bob) 灵感来源
- [bob-plugin-openai-translator](https://github.com/yetone/bob-plugin-openai-translator) OpenAI 接口参考
- [@uiYzzi](https://github.com/uiYzzi) 提供实现思路
- [@Lichenkass](https://github.com/Lichenkass) 维护 Deepin/UOS 应用商店版本
- [Tauri](https://github.com/tauri-apps/tauri) 好用的 Gui 框架
