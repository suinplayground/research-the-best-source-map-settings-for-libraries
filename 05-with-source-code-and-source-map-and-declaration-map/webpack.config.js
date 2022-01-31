export default (env, argv) => {
  return {
    entry: "./main.ts",
    devtool: "source-map",
    module: {
      rules: [
        { test: /\.js$/, enforce: "pre", use: ["source-map-loader"] },
        { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    output: {
      filename:
        argv.mode === "production"
          ? "webpack-production.js"
          : "webpack-development.js",
      path: process.cwd(),
    },
  };
};
