const {screenManagementPrefix} = require('./Function');
const {SuccessResponse} = require('../../../Object');
const NAMESPACE = require('../../../Namespace');
const {randomInteger, randomString, randomCharacters, randomBoolean} = require('../../../Function');

module.exports = router =>
{
    router.get(screenManagementPrefix('/getBasicInfo'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse(
            {
                [NAMESPACE.SCREEN_MANAGEMENT.BASIC_INFO.SCREEN_AMOUNT]: randomInteger(20, 30),// 总屏幕数
                [NAMESPACE.SCREEN_MANAGEMENT.BASIC_INFO.RUNNING_SCREEN_AMOUNT]: randomInteger(10, 20),// 运行中屏幕数
                [NAMESPACE.SCREEN_MANAGEMENT.BASIC_INFO.ABNORMAL_EVENT_AMOUNT]: randomInteger(0, 10),// 异常事件个数
            },
        );
        await next();
    });

    router.get(screenManagementPrefix('/getLogList'), async (ctx, next) =>
    {
        const logList = [];
        const listLength = randomInteger(0, 50);
        for (let i = 0; i < listLength; i++)
        {
            logList.push(
                {
                    [NAMESPACE.SCREEN_MANAGEMENT.LOG.TIME]: (new Date()).toISOString(),
                    [NAMESPACE.SCREEN_MANAGEMENT.LOG.CONTENT]: randomCharacters(30),
                },
            );
        }

        ctx.body = new SuccessResponse(
            {
                [NAMESPACE.SCREEN_MANAGEMENT.LIST.LOG]: logList,
            },
        );
        await next();
    });

    router.get(screenManagementPrefix('/getScreenList'), async (ctx, next) =>
    {
        const screenList = [];
        const screenLength = randomInteger(0, 50);
        for (let i = 0; i < screenLength; i++)
        {
            screenList.push(
                {
                    [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.ID]: i + 1,
                    [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.UUID]: randomString(6),
                    [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.NAME]: randomCharacters(4),
                    [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.IS_RUNNING]: randomBoolean(),
                    [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.RESOURCE_PACK_ID]: randomInteger(0, 20),
                    [NAMESPACE.SCREEN_MANAGEMENT.SCREEN.RESOURCE_PACK_NAME]: randomCharacters(6),
                },
            );
        }

        ctx.body = new SuccessResponse(
            {
                [NAMESPACE.SCREEN_MANAGEMENT.LIST.SCREEN]: screenList,
            },
        );
        await next();
    });

    router.post(screenManagementPrefix('/unbindResourcePack'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse();
        await next();
    });

    router.post(screenManagementPrefix('/addScreen'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse();
        await next();
    });

    router.post(screenManagementPrefix('/deleteScreen'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse();
        await next();
    });

    router.post(screenManagementPrefix('/startScreen'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse();
        await next();
    });

    router.post(screenManagementPrefix('/stopScreen'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse();
        await next();
    });

    router.get(screenManagementPrefix('/getResourcePackList'), async (ctx, next) =>
    {
        const resourcePackList = [];
        const resourcePackListLength = randomInteger(0, 50);
        for (let i = 0; i < resourcePackListLength; i++)
        {
            resourcePackList.push(
                {
                    [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.ID]: i,// 资源包 ID
                    [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.NAME]: randomCharacters(5),// 资源包名
                    [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.ADVERTISEMENT_AMOUNT]: randomInteger(10, 30),// 内含广告数量
                    [NAMESPACE.RESOURCE_PACK_MANAGEMENT.RESOURCE_PACK.DESCRIPTION]: randomCharacters(30),// 资源包备注
                },
            );
        }

        ctx.body = new SuccessResponse(
            {
                [NAMESPACE.RESOURCE_PACK_MANAGEMENT.LIST.RESOURCE_PACK]: resourcePackList,
            },
        );
        await next();
    });

    router.post(screenManagementPrefix('/bindResourcePack'), async (ctx, next) =>
    {
        ctx.body = new SuccessResponse();
        await next();
    });
};