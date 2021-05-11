'use strict';
const chalk = require('chalk');
const Generator = require('yeoman-generator');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the slick ${chalk.red('generator-zhouhaifei-react')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: '项目名称',
        default: this.appname,
      },
      {
        type: 'confirm',
        name: 'isWeb',
        message: '是web项目',
        default: true,
      },
      {
        type: 'number',
        name: 'remUnit',
        message: 'rem单位(有单位则开启rem布局且自动引入amfe-flexible)',
        default: 0,
      },
    ];

    return this.prompt(prompts)
      .then((props) => {
        // To access props later use this.props.someAnswer;
        this.props = props;
      });
  }

  writing() {
    this.fs.copy(
      this.templatePath(''),
      this.destinationPath('')
    );

    this.fs.copy(
      this.templatePath('\.**'),
      this.destinationPath('')
    );

    this.fs.delete(this.destinationPath('template'));

    // package.json
    this.fs.copyTpl(
      this.templatePath('template/package.json.ejs'),
      this.destinationPath('package.json'),
      this.props
    );

    // babel-config
    this.fs.copyTpl(
      this.templatePath('template/babel.config.js.ejs'),
      this.destinationPath('babel.config.js'),
      this.props
    );

    // request
    this.fs.copyTpl(
      this.props.isWeb ? this.templatePath('template/request.web.tsx') : this.templatePath('template/request.h5.tsx'),
      this.destinationPath('src/utils/request.ts')
    );

    // locale
    this.fs.copyTpl(
      this.props.isWeb ? this.templatePath('template/locale.web.tsx') : this.templatePath('template/locale.h5.tsx'),
      this.destinationPath('src/utils/locale.tsx')
    );

    // entry file
    this.fs.copyTpl(
      this.templatePath('template/index.tsx.ejs'),
      this.destinationPath('src/index.tsx'),
      this.props
    );

    // postcss
    this.fs.copyTpl(
      this.templatePath('template/postcss.config.js.ejs'),
      this.destinationPath('postcss.config.js'),
      this.props
    );
  }

  install() {
    this.yarnInstall();
  }
};
