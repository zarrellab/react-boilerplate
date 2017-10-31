module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  setupFiles: ['<rootDir>/_jest-setup/shim.js', '<rootDir>/_jest-setup/setup.js'],
  coveragePathIgnorePatterns: ['<rootDir>/_jest-setup'],
}
