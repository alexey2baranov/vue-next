
module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    "^.+\\.(ts|tsx|js|jsx)?$": "ts-jest"
  },
}
