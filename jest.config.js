module.exports = {
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFiles: ['./src/setupTests.ts'],
  collectCoverage: true,
  coverageReporters: ['text', 'html', 'lcov'],
};
