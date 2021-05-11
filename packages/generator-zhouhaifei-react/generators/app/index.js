'use strict';
const chalk = require('chalk');
const yeoman = require('yeoman-environment');
const Generator = require('yeoman-generator');
const yosay = require('yosay');

const env = yeoman.createEnv();
env.register(require.resolve('generator-zhouhaifei-react'), 'npm:generator-zhouhaifei-react');
env.run('npm:generator-zhouhaifei-react');

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
      { projectName: this.props.projectName }
    );

    this.fs.deleteDestination(this.templatePath('package.json.ejs'));
  }

  install() {
    this.yarnInstall();
  }
};
