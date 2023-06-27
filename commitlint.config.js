module.exports = {
  extends: ['cz'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'chore', 'style', 'refactor', 'test']],
    'scope-enum': [2, 'always', ['accounts', 'admin', 'exampleScope']],
    'subject-case': [2, 'always', 'sentence-case'],
    'body-max-line-length': [2, 'always', 100],
    // 自定义规则
    'custom-rule': (parsed, when) => {
      if (parsed.header && parsed.header.startsWith('WIP')) {
        return [true, 'WIP commits are not allowed.'];
      }
      return [true];
    },
  },
};
