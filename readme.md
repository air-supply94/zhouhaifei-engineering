## 项目模版生成器

### node

- 建议 >= 16.20.1

### 生成

```bash
mkdir 目录名称
cd 目录名称
npx -p yo -p generator-zhouhaifei-react -c "yo zhouhaifei-react"
```

## windows 换行符设置

### git 换行符相关配置说明

```bash
# 提交时验证
# 拒绝提交包含混合换行符的文件
git config --global core.safecrlf true

# 允许提交包含混合换行符的文件
git config --global core.safecrlf false

# 提交包含混合换行符的文件时给出警告
git config --global core.safecrlf warn

# 下拉提交时操作
# 提交时转换为LF,检出时转换为CRLF
git config --global core.autocrlf true

# 提交时转换为LF,检出时不转换
git config --global core.autocrlf input

# 提交检出均不转换
git config --global core.autocrlf false
```

### windows 参考配置

```bash
git config --global core.safecrlf false
git config --global core.autocrlf input
```
