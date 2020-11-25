const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'your project name',
        default: this.appname
      }
    ])
    .then(answers => {
      this.answers = answers
    })
  }
  writing() {
    // 批量生成对应的目标路径

    const templates = [
      '.browserslistrc',
      '.editorconfig',
      '.eslintrc.js',
      '.gitignore',
      'babel.config.js',
      'package.json',
      'README.md',
      'tsconfig.json',
      'public/favicon.ico',
      'public/index.html',
    ]
    templates.map(item => {
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answers
      )
    })
  }
}