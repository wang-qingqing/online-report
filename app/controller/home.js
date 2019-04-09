'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const newsList = await ctx.service.home.index(page);
    await ctx.render('home.ejs', { list: newsList });
  }
}

module.exports = HomeController;
