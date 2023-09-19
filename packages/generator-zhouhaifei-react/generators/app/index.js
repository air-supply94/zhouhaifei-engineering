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
    this.copyTemplate(
      this.templatePath(''),
      this.destinationPath('')
    );

    this.copyTemplate(
      this.templatePath('\.**'),
      this.destinationPath('')
    );

    this.moveDestination(
      '.gitignore.ejs',
      '.gitignore'
    );
  }
};
