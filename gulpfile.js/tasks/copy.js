'use strict';

const settings = require('../settings');
const { task, src, dest } = require('gulp');

// Копирование вендорных JS файлов(css в т.ч)
task('copy', () =>
  src(settings.vendor.scripts).pipe(dest(settings.paths.dest.scripts)),
  src(settings.vendor.styles).pipe(dest(settings.paths.dest.styles))
);
