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
        type: 'confirm',
        name: 'someAnswer',
        message: 'Would you like to enable this option?',
        default: true,
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
  }

  install() {
    this.yarnInstall();
  }
};
