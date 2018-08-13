const env = require('./env-config');

const presets = [
  'next/babel',
  '@zeit/next-typescript/babel'
];

const presetsTesting = [
  [
    'next/babel',
    {
      'preset-env': {
        'modules': 'commonjs'
      }
    }
  ],
  '@zeit/next-typescript/babel'
];

const plugins = [
  [
    'styled-components', 
    {
      'ssr': true,
      'displayName': true,
      'preprocess': false
    }
  ],
  [
    'transform-define', env
  ],
  [
    'module-resolver',
    {
      root: ['./'],
      alias: {
        components: './src/components',
        config: './src/config',
        containers: './src/containers',
        globals: './src/globals',
        shared: './src/shared',
        utils: './src/utils',
      }
    }
  ]
]

module.exports = {
  env: {
    development: {
      presets: presets,
      plugins: plugins
    },
    production: {
      presets: presets,
      plugins: plugins
    },
    test: {
      presets: presetsTesting,
      plugins: plugins
    }
  }
}