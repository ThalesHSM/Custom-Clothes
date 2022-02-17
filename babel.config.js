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
          '@HomeScreen': './src/screens/HomeScreen',
          '@SignIn': './src/screens/SignIn',
          '@ClotheScreen': './src/screens/ClotheScreen',
          '@Components': './src/components',
          '@Config': './src/config',
          '@Routes': './src/config/routes',
        },
      },
    ],
  ],
};
