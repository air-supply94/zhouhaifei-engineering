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
  }

  writing() {
    this.fs.copyTemplate(
      this.templatePath(''),
      this.destinationPath('')
    );

    this.fs.copyTemplate(
      this.templatePath('\.**'),
      this.destinationPath('')
    );

    this.fs.moveDestination(
      '.gitignore.ejs',
      '.gitignore',
      this.props
    );
  }

  install() {
    this.yarnInstall();
  }
};
