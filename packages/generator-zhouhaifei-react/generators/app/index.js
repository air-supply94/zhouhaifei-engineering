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
      this.templatePath('.**'),
      this.destinationPath('')
    );

    const tplList = [
      '.editorconfig',
      '.env.development',
      '.env.production',
      '.eslintignore',
      '.eslintrc.cjs',
      '.gitignore',
      '.npmrc',
      '.prettierignore',
      '.stylelintignore',
      'bundlerConfig.ts',
      'commitlint.config.cjs',
      'package.json',
      'prettier.config.cjs',
      'stylelint.config.cjs',
      'tsconfig.json',
    ];

    for (let i = 0; i < tplList.length; i++) {
      this.moveDestination(
        `${tplListl[i]}.tpl`,
        tplList[i]
      );
    }
  }
};
