---
sidebar_position: 2
---

# 安装

## Windows

### WinGet

pot 已经进入了 winget 仓库，可以直接使用 winget 安装

```powershell
winget install Pylogmon.pot
```

### 手动安装

在 [Release](https://github.com/Pylogmon/pot/releases) 下载最新 msi 安装包安装

## Linux

### Debian/Ubuntu

在 [Release](https://github.com/Pylogmon/pot/releases) 下载最新 deb 包安装

> **注意：低版本系统请下载 `pot_<version>_amd64_universal.deb` 否则会因为`glibc`版本过低无法运行**

### Deepin

Deepin V20 用户请下载`pot_<version>_amd64_universal.deb`，Deepin V23 可以下载正常的 deb 包。

另外，pot 已经上架 Deepin 应用商店，由[@Lichenkass](https://github.com/Lichenkass)进行维护。

### Arch/Manjaro

已提供 [AUR](https://aur.archlinux.org/packages?O=0&K=pot-translation) 包

### 关于 Wayland

pot 默认运行在 xwayland 下，如果发现在某些软件中快捷键不起作用，可以将 pot 设置中的快捷键清空，在系统设置中设置自定义快捷键：

```bash
pot translate # 划词翻译
pot persistent # 独立窗口
```

## MacOS

在 [Release](https://github.com/Pylogmon/pot/releases) 根据自己 CPU 型号选择对应的 dmg 包下载安装

Intel 芯片下载`pot_<version>_x64.dmg`，M 系列芯片下载`pot_<version>_aarch64.dmg`

## 手动编译

### 所需工具

- rust 1.67.0
- pnpm
- nodejs 19

### 编译步骤

1. 克隆仓库

```bash
git clone https://github.com/Pylogmon/pot.git
```

2. 安装构建依赖

```bash
sudo apt-get install -y libgtk-3-dev libwebkit2gtk-4.0-dev libappindicator3-dev librsvg2-dev patchelf
```

3. 开始编译

```bash
cd pot

pnpm install # 安装前端依赖

pnpm tauri build # 编译打包
```

4. 安装
   编译完成之后，可以在`src-tauri/target/Release/bundle`目录下找到对应平台的安装包
