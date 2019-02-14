const {accountPrefix} = require('./Function');
const {SuccessResponse} = require('../../Object');

module.exports = router =>
{
    router.get(accountPrefix('/getVerificationCode'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse();
        await next();
    });

    router.post(accountPrefix('/forgetPassword'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse();
        await next();
    });

    router.post(accountPrefix('/signUp'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse();
        await next();
    });

    router.post(accountPrefix('/login'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse();
        await next();
    });

    router.get(accountPrefix('/verifySession'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse();
        await next();
    });

    router.post(accountPrefix('/logout'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse();
        await next();
    });
};