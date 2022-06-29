'use strict';
const { resolve } = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const INDEX_TEMPLATE = resolve('./src/index.html');

const commonConfig = merge([
  {
    entry: './src/index.ts',
    output: {
      path: resolve('./dist'),
      filename: '[name].[chunkhash:8].js',
      module: true,
      chunkLoading: 'import',
      chunkFormat: 'module'
    },
    experiments: {
      outputModule: true
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'esbuild-loader',
          options: {
            loader: 'ts',
            target: 'es2020'
          }
        }
      ]
    }
  }
]);

const productionConfig = merge([
  {
    devtool: 'nosources-source-map',
    mode: 'production',
    optimization: {
      concatenateModules: false,
      minimizer: [
        new ESBuildMinifyPlugin({
          target: 'es2020',
          legalComments: 'eof'
        })
      ],
      runtimeChunk: {
        name: 'runtime'
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)$/
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'My Vaadin application',
        template: INDEX_TEMPLATE,
        inject: false,
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          minifyCSS: true,
          minifyJS: true
        }
      })
    ]
  }
]);

module.exports = (env, argv) => {
  return merge(commonConfig, productionConfig);
};