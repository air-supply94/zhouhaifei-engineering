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

    // .gitignore
    this.fs.copyTpl(
      this.templatePath('template/gitignore.ejs'),
      this.destinationPath('.gitignore'),
      this.props
    );
  }

  install() {
    this.yarnInstall();
  }
};
