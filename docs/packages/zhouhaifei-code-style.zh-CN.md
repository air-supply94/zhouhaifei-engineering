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

## lint 工具说明

- 目的：尽可能减少代码风格差异
- 注意 prettier，别混用。先用 ide 自带的格式化，再以自动保存格式化。基本没什么错误。出错请对照下面插件找相关原因。如果是第三方插件的错误，看情况忽略错误
- eslint
  - [eslint 官方](https://cn.eslint.org/docs/rules/)主要是官方推荐、及可修复
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)主要是官方推荐、及可修复
  - [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) 主要是官方推荐、及可修复
- stylelint
  - [styleLint](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/rules/list.md) 主要是官方推荐、及可修复
  - [styleLintStandard](https://github.com/stylelint/stylelint-config-standard) 主要是官方推荐、及可修复
- commitLint
  - [commitLint](https://github.com/conventional-changelog/commitlint#benefits-using-commitlint) 里面有相关提交类型的说明
  - [commitlint-config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional)
  - [cz](https://github.com/commitizen/cz-cli) git commit 辅助工具，一般只需要前三步
    - feat(简要): 描述
      - feat 对应第一步类型
      - 简要对应第二步
      - 描述对应第三步
