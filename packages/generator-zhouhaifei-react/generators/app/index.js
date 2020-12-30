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
        type: 'input',
        name: 'projectDescription',
        message: '项目描述',
        default: '',
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

    this.fs.copyTpl(
      this.templatePath('package.json.ejs'),
      this.destinationPath('package.json'),
      {
        projectName: this.props.projectName,
        projectDescription: this.props.projectDescription,
      }
    );
  }

  install() {
    this.yarnInstall();
  }
};
