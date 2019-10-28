module.exports = {
  name: 'angular-ngrx-example',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-ngrx-example',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
