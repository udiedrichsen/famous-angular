Package.describe({
  name: 'doedel:famous-angular',
  version: '0.5.2',
  // Brief, one-line summary of the package.
  summary: 'Bring structure to your Famo.us apps with the power of AngularJS',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/udiedrichsen/famous-angular',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use("mjn:famous@0.3.5",'client');
  api.addFiles('famous-angular.css','client');
  api.addFiles('famous-angular.js','client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('doedel:famous-angular');
  api.addFiles('famous-angular-tests.js');
});
