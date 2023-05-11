---
sidebar_position: 5
---

# FAQ

## 设置无效导致软件启动失败

如果设置了不可用的快捷键，或者设置文件经过手动修改后出现格式问题，应用会无法启动，这时候需要手动删除设置文件后再重新启动应用。

设置文件路径：

- Linux `$XDG_CONFIG_HOME/cn.pylogmon.pot/config.toml` or `$HOME/.config/cn.pylogmon.pot/config.toml`
- Windows `C:\User\{用户名}\AppData\Roaming\cn.pylogmon.pot\config.toml`
- MacOS `$HOME/Library/Application Support/cn.pylogmon.pot/config.toml`
