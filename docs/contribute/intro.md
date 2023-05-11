---
sidebar_position: 1
---

# 接口贡献指南

## 如何添加翻译接口

### 目录

接口全部都在[src/interfaces](https://github.com/Pylogmon/pot/blob/master/src/interfaces)目录下，要添加接口在其中新建一个 js 文件即可。

### 接口内容

js 文件需要分别暴露 `info` 和 `translate` ，具体内容参考[src/interfaces](https://github.com/Pylogmon/pot/blob/master/src/interfaces)目录下的 `utils/example.js` 文件/

### 暴露接口

接口完成之后在[src/interfaces](https://github.com/Pylogmon/pot/blob/master/src/interfaces)目录下的 index.js 文件中参考参考文件内容暴露接口。

### 添加接口图标

将接口图标(必须是 svg 格式)放到 public 文件夹中，名字和接口 js 文件相同。

### 完成

至此就新增了一个翻译接口。
