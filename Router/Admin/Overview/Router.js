const {overviewPrefix} = require('./Function');
const {SuccessResponse} = require('../../../Object');
const NAMESPACE = require('../../../Namespace');
const {randomInteger} = require('../../../Function');

module.exports = router =>
{
    router.get(overviewPrefix('/getLoginInfo'), async (ctx, next) =>
    {
        const date = new Date();
        ctx.body = new SuccessResponse(
            {
                [NAMESPACE.ACCOUNT.ACCOUNT.EMAIL]: 'example@example.com',
                [NAMESPACE.OVERVIEW.LOGIN_INFO.LAST_LOGIN_IP]: '1.2.3.4',//上次登录 IP
                [NAMESPACE.OVERVIEW.LOGIN_INFO.CURRENT_LOGIN_IP]: '1.2.3.4',// 本次登录 IP
                [NAMESPACE.OVERVIEW.LOGIN_INFO.LAST_LOGIN_TIME]: date.toISOString(),// 上次登录时间
            },
        );
        await next();
    });

    router.get(overviewPrefix('/getScreenInfo'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse(
            {
                [NAMESPACE.OVERVIEW.SCREEN_INFO.CURRENT_SCREEN_AMOUNT]: randomInteger(30, 40),// 总共有多少个屏幕
                [NAMESPACE.OVERVIEW.SCREEN_INFO.RUNNING_SCREEN_AMOUNT]: randomInteger(0, 30),// 现在有多少个屏幕在运行
            },
        );
        await next();
    });

    router.get(overviewPrefix('/getAdvertisementInfo'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse(
            {
                [NAMESPACE.OVERVIEW.ADVERTISEMENT_INFO.CURRENT_ADVERTISEMENT_AMOUNT]: randomInteger(150, 200),// 总共有多少广告
                [NAMESPACE.OVERVIEW.ADVERTISEMENT_INFO.CURRENT_IMAGE_AMOUNT]: randomInteger(100, 150),// 有多少广告是图片形式的
                [NAMESPACE.OVERVIEW.ADVERTISEMENT_INFO.ADVERTISEMENT_FILE_SIZE]: randomInteger(10000, 20000),// 广告占用了多少存储空间
            },
        );
        await next();
    });

    router.get(overviewPrefix('/getResourcePackInfo'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse(
            {
                [NAMESPACE.OVERVIEW.RESOURCE_PACK_INFO.CURRENT_RESOURCE_PACK_AMOUNT]: randomInteger(10, 20),// 当前资源包总个数
                [NAMESPACE.OVERVIEW.RESOURCE_PACK_INFO.CURRENT_RESOURCE_PACK_IN_USING_AMOUNT]: randomInteger(5, 10), // 当前正在被使用的资源包个数
            },
        );
        await next();
    });

    router.get(overviewPrefix('/getTagInfo'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse(
            {
                [NAMESPACE.OVERVIEW.TAG_INFO.CURRENT_TAG_AMOUNT]: randomInteger(0, 20),     // 当前有多少个 Tag
            },
        );
        await next();
    });
};