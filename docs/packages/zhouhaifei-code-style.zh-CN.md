---
title: lint工具
order: 2
---

## `换行符(windows)`

```bash
# 提交时验证
# 拒绝提交包含混合换行符的文件
git config --global core.safecrlf true

# 允许提交包含混合换行符的文件
git config --global core.safecrlf false

# 提交包含混合换行符的文件时给出警告
git config --global core.safecrlf warn

# 下拉提交时操作
# 提交时转换为LF，检出时转换为CRLF
git config --global core.autocrlf true

# 提交时转换为LF，检出时不转换
git config --global core.autocrlf input

# 提交检出均不转换
git config --global core.autocrlf false
```

- `windows参考配置`

```bash
git config --global core.safecrlf false
git config --global core.autocrlf input
```
