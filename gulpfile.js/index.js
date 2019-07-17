'use strict';

require('require-dir')('./tasks');

const { task, series, parallel } = require('gulp');

task(
  'build',
  series(
    'clean',
    parallel('fonts', 'copyjs', 'copycss', 'pages', 'styles', 'scripts', 'images', 'webp', 'icons')
  )
);

task('default', series('build', 'server', 'watch'));
