---
title: windows安装ubuntu双系统 order: 2 nav:
title: 其他
---

## u 盘镜像制作

- [下载 ubuntu](<[https://ubuntu.com/download](https://ubuntu.com/download)>)

- [下载软碟通 ultralso](https://cn.ultraiso.net/)

- [制作 u 盘报错---格式化](https://www.diskgenius.cn/exp/dg-530.php)

- windows10 系统隔出一个盘来---`计算机---管理---磁盘管理---压缩空间`
- 重启(f2、f9)---`UEFI格式的U盘`

- 安装类型---`与windows boot manager共享`

## 系统配置

### 关闭 sudo 密码

```bash
%sudo ALL=(ALL:ALL) NOPASSWD:ALL
```

### 修改软件源

- `Software & Updates`(软件和更新)中选择国内的镜像

### 更新系统

```bash
# 更新本地包数据库
sudo apt update

# 更新所有已安装的包（也可以使用 full-upgrade）
sudo apt upgrade
```

### 高分屏适配

- `Settings>Displays（设置>显示）`中开启 HiDPI 支持，以整数倍来调整屏幕比例

  ```bash
  # scaling-factor 仅能设置为整数 1=100%，2=200% 3=300% ......
  gsettings set org.gnome.desktop.interface scaling-factor 2
  ```

- 查看你 Linux 设备上的 Window System（图形接口协议）

  ```bash
  echo $XDG_SESSION_TYPE
  ```

- x11

  ```bash
  xrandr --output DP-4 --scale 1.50x1.50
  ```

- 自动脚本设置

  ```bash
  # start-service.sh
  #!/bin/bash
  xrandr --output DP-4 --scale 1.50x1.50
  ```

  - startup Applications 将脚本添加进去

### 安装 Python2

```bash
sudo apt install python
```

### 安装 Git

```bash
sudo apt install git
```

设置用户名和邮箱

```bash
git config --global user.name xxx
git config --global user.email xxx
```

### 中文输入法

```bash
sudo apt install ibus-libpinyin
sudo apt install ibus-clutter
```

- 接着在应用程序中找到「Language Support」(语言支持)，更改「Keyboard input method system」(键盘输入法系统)为「IBUS」。重启系统，然后在 Settings>Region & Language>Input Sources（设置>区域与语言>输入源）中新增「Chinese(Intelligent Pinyin) 」(中文(智能拼音))就可以使用中文输入法了

### net-tools

```shell
sudo apt install net-tools
```

## 命令行工具

### 安装 Terminnator

```bash
sudo add-apt-repository ppa:gnome-terminator
sudo apt update
sudo apt install terminator
```

### 安装 zsh

```bash
sudo apt-get install zsh
```

### 默认 Shell

```bash
chsh -s /bin/zsh
```

### 配置密码文件

```bash
sudo vim /etc/passwd
```

- 设置 root 和 administrator 的默认 shell 为/bin/zsh

### oh-my-zsh

```bash
wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh
```

### ZSH 插件

- git-open

```bash
git clone https://github.com/paulirish/git-open.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/git-open
```

- autojump

```bash
sudo apt install autojump
```

- zsh-autosuggestions

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

- zsh-syntax-highlighting

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

### cmatrix

```bash
sudo apt install cmatrix
```

### screenfetch

```bash
sudo apt install screenfetch
```

## 软件安装

### expressvpn

- 下载包
- 安装

```shell
sudo dpkg -i file_name
```

- 激活

```shell
expressvpn activate
```

- 常用命令

```shell
## 连接
expressvpn connect

## 不连接
expressvpn disconnect
```

### typora

```bash
# or run:
# sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys BA300B7755AFCFAE
wget -qO - https://typora.io/linux/public-key.asc | sudo apt-key add -

# add Typora's repository
sudo add-apt-repository 'deb https://typora.io/linux ./'
sudo apt update

# install typora
sudo apt install typora
```

### JetBrains

- [toolbox-app](https://www.jetbrains.com/toolbox-app/)

### nvm

- 下载

```shell
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

- 配置(~/.zshrc)

```shell
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

- 下载 node

```shell
# 查看node版本
nvm ls-remote

# 下载指定版本
nvm install v14.18.0

nvm use v14.18.0

nvm default v14.18.0

nvm alias default v14.18.0
```

### Shutter(截图)

```shell
sudo apt install shutter
```

### [金山 WPS](https://www.wps.cn/product/wpslinux)

```shell
sudo dpkg -i /your_path_to/wps-office_11.1.0.8865_amd64.deb
```

### [谷歌浏览器](https://www.google.cn/chrome/)

```shell
sudo dpkg -i /your_path_to/google-chrome-stable_current_amd64.deb
```

### Vim

```shell
sudo apt-get install vim
```

### [JDK8](https://www.oracle.com/java/technologies/downloads/#java8)

- 解压缩

```shell
sudo tar -xzvf /user/local/software/jdk-8u191-linux-x64.tar.gz
```

- 配置环境变量

```shell
export JAVA_HOME=/usr/local/jdk1.8.0_191
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib
export PATH=.:${JAVA_HOME}/bin:$PATH
```

### [Maven](https://maven.apache.org/download.cgi)

- 解压缩

```shell
sudo tar -xzvf /user/local/apache-maven-3.6.2-bin.tar.gz
```

- 配置环境变量

```shell
export MAVEN_HOME=/usr/local/apache-maven-3.6.2
export PATH=${MAVEN_HOME}/bin:$PATH
```

- 配置镜像源 编辑 maven 的 settings.xml 文件（maven 主目录下/conf/），在<mirrors></mirrors>区块之间加入：

```xml

<mirror>
  <id>aliyunmaven</id>
  <mirrorOf>*</mirrorOf>
  <name>阿里云公共仓库</name>
  <url>https://maven.aliyun.com/repository/public</url>
</mirror>
```

### Postman

- 直接在 Ubuntu 自带的【Ubuntu 软件】中搜索 Postman
