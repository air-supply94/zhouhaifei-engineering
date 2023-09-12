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
    this.fs.copy(
      this.templatePath(''),
      this.destinationPath('')
    );

    this.fs.copy(
      this.templatePath('\.**'),
      this.destinationPath('')
    );

    this.fs.delete(this.destinationPath('.gitignore.ejs'));
    this.fs.copyTpl(
      this.templatePath('.gitignore.ejs'),
      this.destinationPath('.gitignore'),
      this.props
    );
  }

  install() {
    this.yarnInstall();
  }
};
