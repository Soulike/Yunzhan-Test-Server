const Koa = require('koa');
const app = new Koa();
const session = require('koa-session');
const bodyParser = require('koa-bodyparser');
const router = require('./Router');

const {SERVER: {KEY, PORT, SESSION}} = require('./Config');

app.keys = KEY;
app
    .use(bodyParser())
    .use(session(SESSION, app))
    .use(async (ctx, next) =>
    {
        try
        {
            console.log(`-`.repeat(20));
            console.log(`请求方法：${ctx.method}`);
            console.log(`请求 URL：${ctx.url}`);
            console.log(`请求体\n${ctx.request.body ? JSON.stringify(ctx.request.body) : '空'}`);
        }
        catch (e)
        {
            console.error(e);
        }
        finally
        {
            await next();
            console.log(`响应体\n${ctx.body ? JSON.stringify(ctx.body) : '空'}`);
            console.log(`-`.repeat(20));
        }
    })
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(PORT, () =>
    {
        console.log(`测试服务器运行在 ${PORT} 端口`);
    });