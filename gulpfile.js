var gulp   = require('gulp');
var elixir = require('laravel-elixir');
var fs = require('fs');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

var elixirTypscript = require('elixir-typescript-angular2');

elixir(function(mix) {
    mix.sass('app.scss');
    mix.styles('app.css', 'public/build/css/app.css', 'public/css');

    package_path = './package.json';
    if (fs.statSync(package_path) !== undefined) {
      var package_file = JSON.parse(fs.readFileSync(package_path, 'utf8'));
      var dependencies = package_file.dependencies;

      for (var dependency in dependencies) {
        if (dependencies.hasOwnProperty(dependency)) {
          full_path = 'node_modules/' + dependency + "/";
          mix.copy(full_path, 'public/' + full_path);
        }
      }
    }

    mix.typescript('**/*.ts', './public');
});
