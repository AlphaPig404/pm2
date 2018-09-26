const Koa = require('koa');
const app = new Koa();
const fs = require('fs')

app.use(async ctx => {
  if(ctx.request.url == '/'){
    const data = await fs.readFileSync('index.html','utf-8')
    ctx.body = data
  }
});

app.listen(3030);