module.exports = {
  presets: [
    '@babel/preset-typescript',
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@HomeScreen': './src/components/HomeScreen',
        },
      },
    ],
  ],
};
