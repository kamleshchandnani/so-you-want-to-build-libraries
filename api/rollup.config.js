import babel from 'rollup-plugin-babel';

const target = process.env.BABEL_ENV;
const pkg = require('./package.json');

export default {
  input: 'src/index.js',
  output: {
    file: {
      es: pkg.module,
      cjs: pkg.main,
    }[target],
    format: target,
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
