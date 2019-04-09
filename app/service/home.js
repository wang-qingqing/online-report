'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async index(page = 1) {
    // 读取配置
    const { serverUrl, pageSize } = this.config.index;

    // 使用内置的http客户端获取
    const { data: idList } = await this.ctx.curl(`${serverUrl}/topstories.json`, {
      data: {
        orderBy: '"key"',
        startAt: `"${pageSize * (page - 1)}"`,
        endAt: `"${pageSize * page - 1}"`,
      },
      dataType: 'json',
    });

    // 并行获取详细信息
    const newsList = await Promise.all(
      Object.keys(idList).map(key => {
        const url = `${serverUrl}/item/${idList[key]}.json`;
        return this.ctx.curl(url, { dataType: 'json' });
      })
    );

    return newsList.map(res => res.data);
  }
}

module.exports = HomeService;
