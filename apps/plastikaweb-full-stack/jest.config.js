module.exports = {
  name: 'plastikaweb-full-stack',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/plastikaweb-full-stack',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
