import chalk from 'chalk';
import Generator from 'yeoman-generator';
import yosay from 'yosay';

export default class extends Generator {
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
    this.copyTemplate(
      this.templatePath('.husky'),
      this.destinationPath('.husky')
    );

    const tplList = [
      '.editorconfig',
      '.env.development',
      '.env.production',
      '.eslintignore',
      '.eslintrc.js',
      '.gitignore',
      '.npmrc',
      '.prettierignore',
      '.stylelintignore',
      'bundlerConfig.ts',
      'commitlint.config.js',
      'package.json',
      'prettier.config.js',
      'stylelint.config.js',
      'tsconfig.json',
    ];

    for (let i = 0; i < tplList.length; i++) {
      this.moveDestination(
        `${tplList[i]}.tpl`,
        tplList[i]
      );
    }
  }
}
