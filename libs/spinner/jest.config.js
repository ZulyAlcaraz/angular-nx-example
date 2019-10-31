module.exports = {
  name: 'spinner',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/spinner',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
