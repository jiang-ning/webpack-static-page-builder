const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const I18nPlugin = require('@zainulbr/i18n-webpack-plugin');

const languages = {
  en: require('./src/lang/en.json'),
  zh_chs: require('./src/lang/zh_chs.json'),
};

const pages = require('./src/pages.json');

const exportConfig = Object.keys(languages).map(function (language) {
  const config = {
    name: language,
    entry: {
      app: './src/main.js'
    },
    output: {
      filename: 'assets/js/[name].bundle.js',
      assetModuleFilename: 'assets/imgs/[name].[ext]',
      path: path.resolve(__dirname, 'dist/'),
      publicPath: '/'
    },
    module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
          loader: 'babel-loader',
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
        {
          exclude: /fonts/,
          test: /\.(png|jpg|jpeg|png|gif|svg)$/,
          type: 'asset/resource',
        },
        {
          test: /\.tpl$/,
          loader: 'ejs-loader',
          options: {
            esModule: false
          }
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'assets/css/[name].css',
      }),
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        path: path.resolve(__dirname, 'dist/')
      }),
      new HtmlWebPackPlugin({
        template: './src/templates/home/index.html',
        filename: language + '/index.html',
        path: path.resolve(__dirname, 'dist/' + language)
      }),
      new HtmlWebPackPlugin({
        template: './src/404.html',
        filename: '404.html',
        path: path.resolve(__dirname, 'dist/')
      }),
      new HtmlWebPackPlugin({
        template: './src/templates/404.html',
        filename: language + '/404.html',
        path: path.resolve(__dirname, 'dist/' + language)
      }),
      new I18nPlugin(languages[language]),
      new CopyPlugin({
        patterns: [{
          from: path.resolve(__dirname, './src/templates/assets'),
          to: 'assets',
          globOptions: {
            ignore: ['.*']
          }
        }],
      })
    ],

  };

  Object.keys(pages).forEach((page) => {
    if (typeof pages[page] !== 'string') {
      config.plugins.push(
        new HtmlWebPackPlugin({
          template: `./src/templates/${page}/${page}.html`,
          filename: language + '/' + page + '/index.html',
          path: path.resolve(__dirname, 'dist/')
        })
      );
      pages[page].forEach((key) => {
        config.plugins.push(
          new HtmlWebPackPlugin({
            template: `./src/templates/${page}/${key}/${key}.html`,
            filename: language + '/' + page + `/${key}.html`,
            path: path.resolve(__dirname, 'dist/')
          })
        );
      });
    } else {
      config.plugins.push(
        new HtmlWebPackPlugin({
          template: `./src/templates/${page}/${page}.html`,
          filename: language + `/${page}.html`,
          path: path.resolve(__dirname, 'dist/')
        })
      );
    }
  });

  return config;
});

module.exports = exportConfig;
