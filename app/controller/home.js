'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const dataList = {
        list: [
            { id: 1, title: 'this is news 1'},
            { id: 2, title: 'this is news 2'}
        ]
    };
    await this.ctx.render('home.ejs', dataList);
  }
}

module.exports = HomeController;
