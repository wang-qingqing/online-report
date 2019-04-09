/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1554459673916_3999';

  // add your middleware config here
  config.middleware = [];

  // 添加 view 配置
  config.view = {
    mapping: {
      '.ejs': 'ejs',
    },
  };

  // 添加index的配置
  config.index = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0', // 这个url好像访问不了
  };

  // add your user config here
  const userConfig = {
    myAppName: 'online-report',
  };

  return {
    ...config,
    ...userConfig,
  };

};
