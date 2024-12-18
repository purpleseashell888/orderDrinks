// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    [
      "taro",
      {
        framework: "react",
        ts: false,
        compiler: "webpack5",
      },
    ],
    "@babel/preset-react", // 添加这个行
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    [
      "import",
      {
        libraryName: "@nutui/nutui-react-taro",
        libraryDirectory: "dist/esm",
        style: "css",
        camel2DashComponentName: false,
      },
      "nutui-react-taro",
    ],
  ],
};
